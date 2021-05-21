import { nativeWindow, nativeHistory, nativeLocation } from './native';
import URL, { fullUrlParse } from './url';
import { getCurrentStateKey, genStateKey, getPreStateKey,  setPreStateKey, KEY_NAME} from './state-key';
import { throwErr } from '../util';

let isCreated = false;
function History(opt){
  if(isCreated){
    throwErr('Only one instance can be generated.');
  }
  isCreated = true;
  this._global = opt.global;
  this._window = nativeWindow;
  this._history = nativeHistory;
  this._location = nativeLocation;

  this._tra = {className: this._global.transition};

  this._Vue = opt.Vue;
  if(!this._history || !this._history.pushState){
    throwErr('required history.pushState API');
  }
  this.pageMap = opt.pageMap;
  this.notFoundPage = opt.notFoundPage;
  if(opt.tabBar){
    this.tabMap = opt.tabBar.map;
    this.tabList = opt.tabBar.list;
    this.tabStackMap = Object.create(null);
  }
  this.stackMap = Object.create(null);

  
  this._whenPopInfo = null;
  this._stackItemId = 1;
  this.tabCtrlerStackId = 1;
  // this.isPageDestoryWhenBack = true;
  this.onRouted = opt.onRouted;
  
  this.URL = new URL({isHashMode: opt.urlIsHashMode, base: opt.urlBase});
  this._popstateHandle = () => {
    this.handlePop();
  }

  this.behavior = {
    type: '',
    distance: 0,
    isPop: false
  }

  this.currentPage = {
    path: null,
    title: null,
    className: undefined,
    transitionClassName: undefined,


    isTab: false,
    tabIndex: null,
    cmptKey: null,

    stackId: null,
    
    stateKey: null,
    isClean: false,
    route: {}
  }

}

History.prototype._onRouted = function(){
  if(!this.onRouted){
    return;
  }
  const curr = this.currentPage;
  this.onRouted({
    title: curr.title,
    routeFullPath: curr.route.fullPath
  });
}

History.prototype._genStackItemId = function(){
  this._stackItemId = this._stackItemId + 1;
  return 'stack_' + this._stackItemId;
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
    if(this._isTabRoute(currRoute.trimedPath)){
      this._backToStartAndReplace(currRoute.fullPath, 'loaded');
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
  // const key = getCurrentStateKey();
  // // if(key !== 1){
  // //   console.log('key', key)
  // //   this.tabCtrlerStackId = this.tabCtrlerStackId + 1;
  // // }
  this._backToStartAndReplace(userUrl, 'switchtab');
}



History.prototype._setMapItem = function(key, route){


  let page = this.pageMap[route.trimedPath] || this.notFoundPage;
  const _page = {

    path: page.path,
    title: page.title,
    tabIndex: page.tabIndex,
    route,
    cmptKey: page.cmptKey,
    isTab: page.isTab,
    stateKey: key,
    className: page.className,
    transitionClassName: page.transitionClassName,
    isClean: false // when curr page leaveing, It doesn't work.
  }

  if(_page.isTab){
    _page.stackId = 'tab_stack_' + this.tabCtrlerStackId;
    this._Vue.set(this.tabStackMap, page.tabIndex, _page);
  } else {
    _page.stackId = this._genStackItemId();
  }

  
  
  
  // Object.assign(this.currentPage, _page);
  this._Vue.set(this.stackMap, key, _page);
  Object.assign(this.currentPage, _page);
  // this._Vue.nextTick(() => {
    
    
  // })
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
  // this._clearAfter();
  
  const key = genStateKey();

  this._history.pushState({[KEY_NAME]: key}, '', this.URL.toLocationUrl(fullParse.fullPath));
  setPreStateKey(key);
  const newBehavior = {
    type: 'push',
    distance: 1,
    isPop: false
  }
  Object.assign(this.behavior, newBehavior);

  this._setMapItem(key, fullParse);

  this._onRouted();
}
History.prototype.replace = function(userUrl){
  const fullParse = fullUrlParse(userUrl);
  if(this._isTabRoute(fullParse.trimedPath)){
    console.error('Cannot replace the tab url, please use switchTab');
    return;
  }
  this._replace(fullParse);
}
History.prototype._replace = function(fullParse, behavior, _distance){
  const distance = _distance === undefined ? 0 : _distance;
  const newBehavior = {
    type: behavior || 'replace',
    distance,
    isPop: false
  }
  Object.assign(this.behavior, newBehavior);
  const key = getCurrentStateKey();

  if(this.behavior.type !== 'switchtab' || distance){
    // unactive currentPage
    this.currentPage.stackId = 'unactive_' + this.currentPage.stackId;
  }
  const toUrl = this.URL.toLocationUrl(fullParse.fullPath);
  
  this._history.replaceState({[KEY_NAME]: key}, '', toUrl);

  this._Vue.nextTick(() => {
    if(newBehavior.type === 'relaunch'){
      this._setAllCleaned();
      const oldKey = key - distance;
      this.stackMap[oldKey].isClean = false;
      this._Vue.nextTick(() => {
        this._clearAll();
        this._setMapItem(key, fullParse);
      })
      
    } else {
      this._clearAfter();
      this._setMapItem(key, fullParse);
      this._onRouted();
    }
  })
  
  // if(behavior === 'loaded'){
  //   this._Vue.nextTick(_after);
  // } else {
  //   _after();
  // }


}

History.prototype._directReplace = function(userUrl, behavior, compare){

  const fullParse = 
  typeof userUrl  === 'string' ? 
   fullUrlParse(userUrl) 
   : userUrl;
  this._replace(fullParse, behavior, compare);
}

History.prototype.back = function(steps){
  const key = getCurrentStateKey();

  if(key === 1){
    console.error('Currnt page is first, Cannot back.');
    return -1;
  }
  if(typeof steps === 'number' && steps > 0){
    if(key - steps < 1){
      return -1;
    }
    this._history.go(-steps);
  } else {
    this._history.back();
  }
  return 0;
}

History.prototype.relaunch = function(userUrl){
  this.tabCtrlerStackId = this.tabCtrlerStackId + 1;
  this._backToStartAndReplace(userUrl, 'relaunch');
}

History.prototype._setMapCleaned = function(map){
  for(let i in map){
     map[i].isClean = true;
  }
}
History.prototype._setAllCleaned = function(){
  if(this.tabStackMap){
    this._setMapCleaned(this.tabStackMap);
  }
  this._setMapCleaned(this.stackMap);
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

History.prototype._clearAfter = function(){
  const key = getCurrentStateKey();
  const map = this.stackMap;
  let i, v;
  const arr = [];
  for (i in map) {
    v = map[i];
    if (v.stateKey > key) {
      v.isClean = true;
      arr.push(v);
    }
  }
  let len = arr.length;
  if(len){
    const last = arr.pop();
    last.isClean = false;
    this._Vue.delete(map, last.stateKey);
    len = arr.length;
    if(len){
      this._Vue.nextTick(() => {
        i =  0;
        for(; i < len; i++){
          v = arr[i];
          this._Vue.delete(map, v.stateKey);
        }
      })
    }
  }
}

History.prototype._clearMap  = function(map){
  let i;
  for(i in map){
    this._Vue.delete(map, i);
  }
}

History.prototype._clearAll = function(){
  if(this.tabStackMap){
    this._clearMap(this.tabStackMap);
  }
  this._clearMap(this.stackMap);
}

History.prototype.handlePop = function(){
  const preKey = getPreStateKey();
  const currKey = getCurrentStateKey();
  setPreStateKey(currKey);

  const _info = this._whenPopInfo;
  const compare = currKey - preKey;
  const behavior = compare <  0 ? 'back' : 'forward';

  if(_info !== null){
    this._directReplace(_info.userUrl, _info.behavior, compare);
    this._whenPopInfo = null;
    return;
  }



  // this.isPageDestoryWhenBack && 

  let page = this.stackMap[currKey];
  // console.log('compare', compare);
  // console.log('poped',  page, preKey, currKey, getCurrentStateKey())
  const newBehavior = {
    type: behavior,
    distance: compare,
    isPop: true
  }
  Object.assign(this.behavior, newBehavior);

  if(page){
    Object.assign(this.currentPage, page);
  } else {
    this._setMapItem(currKey, this.getFullUrlParseByLocation());
  }

  if(behavior === 'back'){
    this._Vue.nextTick(() => {
      this._clearAfter();
      this._onRouted();
    })
  } else {
    this._onRouted();
  }
  
}

History.prototype.destory = function(){
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