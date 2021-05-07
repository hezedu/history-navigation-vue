import { nativeWindow, nativeHistory, nativeLocation } from './native';
import URL, { fullUrlParse } from './url';
import { getCurrentStateKey, genStateKey, getPreStateKey,  setPreStateKey, KEY_NAME} from './state-key';
import { notFoundPageKey } from '../constant';
function noop(){}

let isCreated = false;
function History(opt){
  if(isCreated){
    throw new Error('Only one instance can be generated.');
  }
  isCreated = true;
  this._global = opt.global;
  this.pageIntervalOffsetX = opt.pageIntervalOffsetX;
  this._window = nativeWindow;
  this._history = nativeHistory;
  this._location = nativeLocation;
  this._Vue = opt.Vue;
  if(!this._history || !nativeHistory.pushState){
    throw new Error('history-navigation-vue-vue required history.pushState API');
  }
  
  this.isHashMode = opt.isHash;

  this.pageMap = opt.pageMap;
  if(opt.tabBar){
    this.tabMap = opt.tabBar.map;
    this.tabList = opt.tabBar.list;
    this.tabStackMap = Object.create(null);
  }
  this.stackMap = Object.create(null);

  
  this._relaunchTo = null;
  this._switchTab = null;
  this._whenPopInfo = null;
  this._stackItemId = 0;
  // this.isPageDestoryWhenBack = true;
  this.onChange = noop;
  
  this.URL = new URL({isHashMode: this.isHashMode, base: opt.urlBase});
  this._popstateHandle = () => {
    this.handlePop();
  }

  this.behavior = {
    type: '',
    step: 0,
    isPop: false
  }

  this.currentPage = {
    stateKey: null,
    cmptKey: null,
    tabIndex: -1,
    isTab: false,
    info: {},
    route: {}
  }
}

History.prototype._genStackItemId = function(){
  this._stackItemId = this._stackItemId + 1;
  return 'stack_' + + this._stackItemId;
}

History.prototype._isTabRoute = function(trimedPath){
  if(!this.tabMap){
    return false;
  }
  if(this.tabMap[trimedPath]){
    return true;
  }
  return false;
}

History.prototype._load = function(userUrl){
  this._window.addEventListener('popstate', this._popstateHandle);
  let currRoute = userUrl === undefined 
  ? this.getFullUrlParseByLocation()
    : fullUrlParse(userUrl);
  const key = getCurrentStateKey();
  if(key !== 1){
    if(this._isTabRoute()){
      this.relaunch(currRoute.fullPath);
      return;
    }
  }
  this._replace(currRoute, 'loaded');
}

History.prototype.switchTab = function(userUrl){
  // if(userUrl.indexOf('?') !== -1){
  //   console.error('switchTab not support queryString');
  // }
  const fullParse = fullUrlParse(userUrl);
  if(!this._isTabRoute(fullParse.trimedPath)){
    console.error(userUrl + ' is not tab url');
    return;
  }
  this._backToStartAndReplace(userUrl, 'switchtab');
}



History.prototype._setMapItem = function(key, route){

  const _page = {
    stackId: this._genStackItemId(),
    stateKey: key,
    route
  }
  let page = this.pageMap[route.trimedPath];
  if(page){
    _page.isTab = page.isTab;
    _page.cmptKey = page.cmptKey;
    
    _page.info = {
      className: page.className,
      path: page.path,
      id: page.id,
      tabIndex: page.tabIndex
    }
  } else {
    _page.isTab = false;
    _page.cmptKey = notFoundPageKey;
    _page.info = {
      id: -1
    }
  }

  if(_page.isTab){
    this._Vue.set(this.tabStackMap, route.trimedPath, _page);
  }

  Object.assign(this.currentPage, _page);
  this._Vue.set(this.stackMap, key, _page);
}

History.prototype._delMapItem = function(key){
  this._Vue.delete(this.stackMap, key);
}

History.prototype.getFullUrlParseByLocation = function(){
  return fullUrlParse(this.URL.getUrlByLocation());
}
History.prototype.push = function(userUrl){
  const fullParse = fullUrlParse(userUrl);
  if(this._isTabRoute(fullParse.trimedPath)){
    console.error('Cannot push the tab url, please use switchTab');
    return;
  }
  this._push(fullParse);
}

History.prototype._push = function(fullParse){
  /* 
    from [vue-router]
    try...catch the pushState call to get around Safari
    DOM Exception 18 where it limits to 100 pushState calls
  */
  
  

  this._clear();
  
  const key = genStateKey();

  this._history.pushState({[KEY_NAME]: key}, '', this.URL.toLocationUrl(fullParse.fullPath));
  setPreStateKey(key);
  this._setMapItem(key, fullParse);
  Object.assign(this.behavior, {
    type: 'push',
    step: 1,
    isPop: false
  })
  this.onChange();
}
History.prototype.replace = function(userUrl, behavior){
  const fullParse = fullUrlParse(userUrl);
  if(this._isTabRoute(fullParse.trimedPath)){
    console.error('Cannot replace the tab url, please use switchTab');
    return;
  }
  this._replace(fullParse, behavior);
}
History.prototype._replace = function(fullParse, behavior){

  this._clear();
  const key = getCurrentStateKey();
  const toUrl = this.URL.toLocationUrl(fullParse.fullPath);
  // console.log('toUrl', toUrl)
  
  this._history.replaceState({[KEY_NAME]: key}, '', toUrl);
  let _after = () => {
    this._setMapItem(key, fullParse);
    Object.assign(this.behavior, {
      type: behavior || 'replace',
      step: 0,
      isPop: false
    })
    this.onChange();
  }
  _after();
  // if(behavior === 'loaded'){
  //   this._Vue.nextTick(_after);
  // } else {
  //   _after();
  // }


}

History.prototype._directReplace = function(userUrl, behavior){

  const fullParse = 
  typeof userUrl  === 'string' ? 
   fullUrlParse(userUrl) 
   : userUrl;
  this._replace(fullParse, behavior);
}

History.prototype.back = function(step){
  const key = getCurrentStateKey();

  if(key === 1){
    console.error('Currnt page is first, Cannot back.');
    return -1;
  }
  if(typeof step === 'number' && step > 0){
    if(key - step < 1){
      return -1;
    }
    this._history.go(-step);
  } else {
    this._history.back();
  }
  return 0;
}

History.prototype.relaunch = function(userUrl){
  // for(i in this.stackMap){
  //   this._Vue.delete(this.stackMap, i);
  // }
  if(this.tabStackMap){
    let i;
    for(i in this.tabStackMap){
      this._Vue.delete(this.tabStackMap, i);
    }
  }
  this._backToStartAndReplace(userUrl, 'relaunch');
}

History.prototype._backToStartAndReplace = function(userUrl, behavior){
  const key = getCurrentStateKey();
  if(key > 1){
    this._whenPopInfo = {
      userUrl,
      behavior
    };
    this.back(key - 1);
  } else {
    this._directReplace(userUrl, behavior);
  }
}

History.prototype._clear = function(){
  const key = getCurrentStateKey();
  const map = this.stackMap;
  // console.log('_clear', key, map);  
  for (var i in map) {
    if (Number(i) > key) {
      this._delMapItem(i);
    }
  }
}


History.prototype.handlePop = function(){
  const preKey = getPreStateKey();
  const currKey = getCurrentStateKey();
  setPreStateKey(currKey);

  const _info = this._whenPopInfo;
  if(_info !== null){
    this._directReplace(_info.userUrl, _info.behavior);
    this._whenPopInfo = null;
    return;
  }

  const compare = currKey - preKey;
  const behavior = compare <  0 ? 'back' : 'forward';

  // this.isPageDestoryWhenBack && 
  if(behavior === 'back'){
    this._clear();
  }
  let page = this.stackMap[currKey];
  // console.log('compare', compare);
  // console.log('poped',  page, preKey, currKey, getCurrentStateKey())
  if(page){
    Object.assign(this.currentPage, page);
    console.log('page', page);
  } else {
    this._setMapItem(currKey, this.getFullUrlParseByLocation());
  }

  Object.assign(this.behavior, {
    type: behavior,
    step: compare,
    isPop: true
  })
  this.onChange();
}

History.prototype.destory = function(){
  this.onChange = noop;
  this._window.removeEventListener('popstate', this._popstateHandle);
  isCreated = false;
}

export default History;

// window.addEventListener('beforeunload', function(event){
//   console.log('beforeunload')
//   event.preventDefault();
//   event.returnValue = "Are you sure you want to exit?"
//   return 'beforeunload';
// })