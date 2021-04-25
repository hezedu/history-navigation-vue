import { nativeWindow, nativeHistory, nativeLocation } from './native';
import URL, { fullUrlParse } from './url';
import { getCurrentStateKey, genStateKey, getPreStateKey,  setPreStateKey, KEY_NAME} from './state-key';
function noop(){}

// function _def(th, obj, key, defV){
//   let v = obj[key];
//   v = v === undefined ? defV : v;
//   th[key] = v;
// }

let isCreated = false;
function History(opt){
  if(isCreated){
    throw new Error('Only one instance can be generated.');
  }
  isCreated = true;
  this.isSetAHref = opt.isSetAHref;
  this._window = nativeWindow;
  this._history = nativeHistory;
  this._location = nativeLocation;
  this._Vue = opt.Vue;
  if(!this._history || !nativeHistory.pushState){
    throw new Error('history-navigation-vue-vue required history.pushState API');
  }
  
  this.isHashMode = opt.isHash === undefined ? true : opt.isHash;
  this.pageMap = opt.pageMap;
  this.cmptPageSuffix = opt.cmptPageSuffix;
  this.notFoundPageKey = opt.cmptPageSuffix + opt.notFoundPageKey;
  this.stackMap = Object.create(null);
  this._relaunchTo = null;
  // this.isPageDestoryWhenBack = true;
  this.onChange = noop;
  
  this.URL = new URL({isHashMode: this.isHashMode});
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
    info: {},
    route: {}
  }
}

History.prototype._load = function(userUrl){
  this._window.addEventListener('popstate', this._popstateHandle);
  let currRoute = userUrl === undefined 
  ? this.getFullUrlParseByLocation()
    : fullUrlParse(userUrl);
  this.replace(currRoute.fullPath, 'loaded');
}

History.prototype._setMapItem = function(key, route){

  const _page = {
    stateKey: key,
    route
  }
  let page = this.pageMap[route.trimedPath];
  if(page){
    _page.cmptKey = this.cmptPageSuffix + page.index;
    _page.info = {
      className: page.className,
      path: page.path
    }
  } else {
    _page.cmptKey = this.notFoundPageKey;
    _page.info = {}
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
  /* 
    from [vue-router]
    try...catch the pushState call to get around Safari
    DOM Exception 18 where it limits to 100 pushState calls
  */
  this._clear();
  const fullParse = fullUrlParse(userUrl);
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
  this._clear();
  const fullParse = fullUrlParse(userUrl);
  const key = getCurrentStateKey();
  const toUrl = this.URL.toLocationUrl(fullParse.fullPath);
  // console.log('toUrl', toUrl)
  this._history.replaceState({[KEY_NAME]: key}, '', toUrl);
  this._delMapItem(key);
  this._Vue.nextTick(() => {
    this._setMapItem(key, fullParse);
    Object.assign(this.behavior, {
      type: behavior || 'replace',
      step: 0,
      isPop: false
    })
    this.onChange();
  })

}

History.prototype.back = function(step){
  const key = getCurrentStateKey();

  if(key === 1){
    return -1;
  }
  if(typeof step === 'number' && step > 0){
    if(key - step < 1){
      console.log('out range', key, step)
      return -1;
    }
    this._history.go(-step);
  } else {
    this._history.back();
  }
  return 0;
}

History.prototype.relaunch = function(userUrl){
  const key = getCurrentStateKey();
  if(key > 1){
    this._relaunchTo = userUrl;
    this.back(key - 1);
    console.log('relaunch back', key);
  } else {
    this._relaunch(userUrl);
  }
}

History.prototype._relaunch = function(userUrl){
  this.replace(userUrl, 'relaunch');
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


  if(this._relaunchTo !== null){
    this._relaunch(this._relaunchTo);
    this._relaunchTo = null;
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
