import { nativeWindow, nativeHistory, nativeLocation } from './native';
import URL, { fullUrlParse } from './url';
import { getCurrentStateKey, genStateKey,getStateKey,  setStateKey} from './state-key';
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
  this._Vue = opt.Vue;
  this.isHashMode = opt.isHash === undefined ? true : opt.isHash;
  this.pageMap = opt.pageMap;
  this.cmptPageSuffix = opt.cmptPageSuffix;
  this.notFoundPageKey = opt.notFoundPageKey;
  this.stackMap = Object.create(null);
  
  // _def(this, opt, 'isPageDestoryWhenBack', true);
  this.isPageDestoryWhenBack = true;
  this._window = nativeWindow;
  this._history = nativeHistory;
  this._location = nativeLocation;

  this.onChange = noop;
  
  this.URL = new URL({isHashMode: this.isHashMode});
  this._popstateHandle = () => {
    this.handlePop();
  }
  

  let currRoute = this.getFullUrlParseByLocation();
  this.currentRoute = {
    key: null,
    pageKey: null,
    behavior: '',
    step: 0,
    ...currRoute
  };


  // this.currentRoute.behavior = 'launch';
  // if(currRoute.trimedPath !== trimSlash(opt.entryPagePath) || (this.isHashMode && !this._location.hash)){
  //   this.replace(opt.entryPagePath);
  // } else {
  //   this._setMapItem(getCurrentStateKey(), currRoute);
  // }
}
History.prototype.start = function(userUrl){
  this._window.addEventListener('popstate', this._popstateHandle);
  let currRoute = userUrl === undefined 
  ? this.currentRoute
    : fullUrlParse(userUrl);
  this.replace(currRoute.fullPath);
}

// History.prototype.reLaunch = function(userUrl){
//   let currRoute = userUrl === undefined 
//   ? this.currentRoute
//     : fullUrlParse(userUrl);
//   this.replace(currRoute.fullPath);
// }

History.prototype._setMapItem = function(key, value){
  value.key = key;
  let page = this.pageMap[value.trimedPath];
  value.pageKey = page ? this.cmptPageSuffix + page.index : this.notFoundPageKey;

  Object.assign(this.currentRoute, value);
  this._Vue.set(this.stackMap, key, value);
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

  this._history.pushState({_multi_key: key}, '', this.URL.toLocationUrl(fullParse.fullPath));
  setStateKey(key);
  this._setMapItem(key, fullParse);
  this.currentRoute.behavior = 'push';
  this.currentRoute.step = 1;
  this.currentRoute.isPop = false;
  this.onChange();
}

History.prototype.replace = function(userUrl){
  this._clear();
  const fullParse = fullUrlParse(userUrl);
  const key = getStateKey();
  const toUrl = this.URL.toLocationUrl(fullParse.fullPath);
  // console.log('toUrl', toUrl)
  this._history.replaceState({_multi_key: key}, '', toUrl);
  this._setMapItem(key, fullParse);
  this.currentRoute.behavior = 'replace';
  this.currentRoute.step = 0;
  this.currentRoute.isPop = false;
  this.onChange();
}

History.prototype.back = function(step){
  if(typeof step === 'number' && step > 0){
    this._history.go(-step);
  } else {
    this._history.back();
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
  const oldKey = getStateKey();
  const currKey = getCurrentStateKey();
  const compare = currKey - oldKey;
  const behavior = compare <  0 ? 'back' : 'forward';
  console.log('behavior', behavior === 'back', this.isPageDestoryWhenBack)
  if(this.isPageDestoryWhenBack && behavior === 'back'){
    this._clear();
  }
  
  let page = this.stackMap[currKey];
  // console.log('compare', compare);
  // console.log('poped',  page, oldKey, currKey, getCurrentStateKey())
  if(page){
    Object.assign(this.currentRoute, page);
  } else {
    this._setMapItem(currKey, this.getFullUrlParseByLocation());
  }
  setStateKey(currKey);
  this.currentRoute.behavior = behavior;
  this.currentRoute.step = compare;
  this.currentRoute.isPop = true;
  this.onChange();
}

History.prototype.destory = function(){
  this.onChange = noop;
  this._window.removeEventListener('popstate', this._popstateHandle);
  isCreated = false;
}

export default History;
