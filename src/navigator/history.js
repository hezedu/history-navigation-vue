import { nativeWindow, nativeHistory, nativeLocation } from './native';
import URL, { fullUrlParse } from './url';
import { getCurrentStateKey, genStateKey, getPreStateKey,  setPreStateKey, KEY_NAME } from './state-key';
import { throwErr } from '../util';
import modalPart from './libs/modal_crumbs';
const BACK_TRA_PROP_KEY = 'h_nav_b_tra';
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
  // this._exitImmediately = true;
  // this.onExit = opt.onExit; // Chrome must touch the document once to work.
  this._tra = {className: this._global.transition};
  this.uniteVue = opt.uniteVue;
  // if(!this._history || !this._history.pushState){
  //   throwErr('required history.pushState API');
  // }
  this.pageMap = opt.pageMap;
  this.notFoundPage = opt.notFoundPage;
  if(opt.tabBar){
    this.tabMap = opt.tabBar.map;
    this.tabList = opt.tabBar.list;
    this.tabStackMap = Object.create(null);
  }
  this.stackMap = Object.create(null);
  
  this._whenPopInfo = null;
  this._whenPopTra = null;

  this._stackItemId = 1;
  this.tabCtrlerStackId = 1;
  // this.isPageDestroyWhenBack = true;
  this.onRouted = opt.onRouted;
  
  this.URL = new URL({isHashMode: opt.urlIsHashMode, base: opt.urlBase});

  this.behavior = {
    type: '',
    distance: 0,
    isPop: false
  }

  this.currentPage = {
    path: null,
    title: null,
    className: undefined,


    isTab: false,
    tabIndex: null,
    cmptKey: null,

    stackId: null,
    
    stateKey: null,
    modalList: [],
    isClean: false,
    route: {}
  }
  modalPart.init(this);
  this._setModalCrumbs(3, 3);
  // this.fitVue$3(); // FIT_VUE_3_SWITCH
}

History.prototype.checkCompatibility = function(){
  if(this._history && this._history.pushState){
    return true;
  }
  return false;
}

History.prototype._bind = function(){
  this._popstateHandle = () => {
    this.handlePop();
  }
  this._window.addEventListener('popstate', this._popstateHandle);

  this._handleWinUnload = () => {
    this.handleWinUnload();
  }
  this._window.addEventListener('beforeunload', this._handleWinUnload);
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


History.prototype._forMatInputArg = function(opt){
  let fullParse, tra;
  if(typeof opt === 'string'){
    fullParse = fullUrlParse(opt);
  } else {
    fullParse = fullUrlParse({
      path: opt.url,
      query: opt.query
    })
    tra = opt.transition;
  }
  return {
    fullParse,
    tra
  };
}


History.prototype._load = function(userUrl){
  this._bind();
  const _userUrl = userUrl === undefined ? 
      this.URL.getUrlByLocation() : 
      userUrl;
  const currRoute = fullUrlParse(_userUrl);
  const key = getCurrentStateKey();
  this.clearModalWhenLoad();
  if(key !== 1){
    if(this._isTabRoute(currRoute.trimedPath)){
      this._backToStartAndReplace(currRoute, 'loaded');
      return;
    }
  }
  this._replace(currRoute, 'loaded');
}

History.prototype._setTra = function(className){
  this._tra.className = className || this._global.transition;
}

History.prototype.push = function(userUrl){
  const { fullParse, tra } = this._forMatInputArg(userUrl);
  if(this._isTabRoute(fullParse.trimedPath)){
    console.error('Cannot push the tab url, please use switchTab');
    return;
  }
  this._setTra(tra);
  this._push(fullParse, tra);
}

History.prototype.replace = function(userUrl){
  const { fullParse, tra } = this._forMatInputArg(userUrl);
  if(this._isTabRoute(fullParse.trimedPath)){
    console.error('Cannot replace the tab url, please use switchTab');
    return;
  }
  this._setTra(tra);
  this._replace(fullParse);
}


History.prototype.switchTab = function(userUrl){
  // if(userUrl.indexOf('?') !== -1){
  //   console.error('switchTab not support queryString');
  // }
  const { fullParse, tra } = this._forMatInputArg(userUrl);
  if(!this._isTabRoute(fullParse.trimedPath)){
    console.error(fullParse, ' is not tab url');
    return;
  }

  this._backToStartAndReplace(fullParse, 'switchtab', tra);
}

History.prototype.back = function(_steps, tra){
  const key = getCurrentStateKey();
  // const state = this._history.state;
  // let modalKey;
  // if(state){
  //   modalKey = state._h_nav_modal_i;
  // }
  // if(key === 1 && !modalKey){
  //   console.error('Currnt page is first, Cannot back.');
  //   return -1;
  // }
  let steps = _steps;
  if(typeof steps === 'number' && steps > 0){
    if(key - steps < 1){
      steps = key - 1;
    }
  }
  this._whenPopTra = tra;
  if(steps){
    this._history.go(-steps);
  }else {
    this._history.back();
  }
  
  return 0;
}

History.prototype.relaunch = function(userUrl){
  const { fullParse, tra } = this._forMatInputArg(userUrl);
  this.tabCtrlerStackId = this.tabCtrlerStackId + 1;
  this._backToStartAndReplace(fullParse, 'relaunch', tra);
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
    style: page.style,
    modalList: [],
    isClean: false // when curr page leaveing, It doesn't work.
  }

  if(_page.isTab){
    _page.stackId = 'tab_stack_' + this.tabCtrlerStackId;
    this.uniteVue.set(this.tabStackMap, page.tabIndex, _page);
  } else {
    _page.stackId = this._genStackItemId();
  }

  
  
  
  // Object.assign(this.currentPage, _page);
  this.uniteVue.set(this.stackMap, key, _page);
  Object.assign(this.currentPage, _page);
}
History.prototype._getBackTra = function(){
  const H = this._history;
  if(H.state){
    return H.state[BACK_TRA_PROP_KEY];
  }
}

History.prototype._push = function(fullParse, tra){
  /* 
    from [vue-router]
    try...catch the pushState call to get around Safari
    DOM Exception 18 where it limits to 100 pushState calls
  */
  // this._clearAfter();
  const oldTra = this._getBackTra();
  
  if(tra !== oldTra){
    let state = Object.assign({}, this._history.state);
    if(tra){
      state[BACK_TRA_PROP_KEY] = tra;
    } else {
      delete(state[BACK_TRA_PROP_KEY]);
    }
    
    this._history.replaceState(state, '');
  }
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
  let state =  this._history.state;
  if(!state || !state[KEY_NAME]){
    state = Object.assign({}, history.state);
    state[KEY_NAME] = key;
  }
  
  this._history.replaceState(state, '', toUrl);

  this.uniteVue.nextTick(() => {
    if(newBehavior.type === 'relaunch'){
      this._setAllCleaned();
      const oldKey = key - distance;
      this.stackMap[oldKey].isClean = false;
      this.uniteVue.nextTick(() => {
        this._clearAll();
        this._setMapItem(key, fullParse);
        this._onRouted();
      })
      
    } else {
      this._clearAfter();
      this._setMapItem(key, fullParse);
      this._onRouted();
    }
  })

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



History.prototype._backToStartAndReplace = function(fullParse, behavior, tra){
  const key = getCurrentStateKey();
  if(key > 1){
    this._whenPopInfo = {
      fullParse,
      behavior
    };
    this.back(key - 1, tra);
  } else {
    this._setTra(tra);
    this._replace(fullParse, behavior);
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
    this.uniteVue.delete(map, last.stateKey);
    len = arr.length;
    if(len){
      this.uniteVue.nextTick(() => {
        i =  0;
        for(; i < len; i++){
          v = arr[i];
          this.uniteVue.delete(map, v.stateKey);
        }
      })
    }
  }
}

History.prototype._clearMap  = function(map){
  let i;
  for(i in map){
    this.uniteVue.delete(map, i);
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

  if(!this._history.state){ // The user manually modifies the browser address bar
    let _popPushKey = preKey + 1;
    this._history.replaceState({[KEY_NAME]: _popPushKey}, '');
    setPreStateKey(_popPushKey);
    this._replace(fullUrlParse(this.URL.getUrlByLocation()), 'popPush');
    console.log('_popPushKey', _popPushKey);
    return;
  }

  const currKey = getCurrentStateKey();
  if(preKey === currKey){
    const modalKey = this._history.state._h_nav_modal_i;
    if(typeof modalKey === 'number'){
      const page = this.stackMap[currKey];
      if(page){
        const arr = page.modalList.splice(modalKey);
        arr.forEach(item => {
          item._isDestroy = true;
          if(item._destoryCmpt){
            item._destoryCmpt();
          }
        })
      }
      if(modalKey === 0){
        this.removeModalKeyWhenBackPage();
      }
    }
    return;
  }
  setPreStateKey(currKey);

  const _info = this._whenPopInfo;
  const compare = currKey - preKey;
  const behavior = compare <  0 ? 'back' : 'forward';
  let backTra = this._whenPopTra;
  if(!backTra && behavior === 'back' && compare === -1){
    backTra = this._getBackTra();
    // console.log('--------------- backTra ---------------', backTra);
  } 
  this._setTra(backTra);
  this._whenPopTra = null;
  if(_info !== null){
    this._replace(_info.fullParse, _info.behavior, compare);
    this._whenPopInfo = null;
    return;
  }

  // this.isPageDestroyWhenBack && 

  let page = this.stackMap[currKey];
  const newBehavior = {
    type: behavior,
    distance: compare,
    isPop: true
  }
  Object.assign(this.behavior, newBehavior);

  if(page){
    Object.assign(this.currentPage, page);
  } else {
    this._setMapItem(currKey, fullUrlParse(this.URL.getUrlByLocation()));
  }

  if(behavior === 'back'){
    this.uniteVue.nextTick(() => {
      this._clearAfter();
      this._onRouted();
    })
  } else {
    this._onRouted();
  }
}

History.prototype.modal = function({component, propsData, parent, success}){
  const key = getCurrentStateKey();
  const page = this.stackMap[key];
  const state = this._history.state;
  let modalKey = state._h_nav_modal_i;
  if(!modalKey) {
    modalKey = 0;
    this._history.replaceState({[KEY_NAME]: key, _h_nav_modal_i: modalKey}, '');
  }
  modalKey = modalKey + 1;
  this._history.pushState({[KEY_NAME]: key, _h_nav_modal_i: modalKey}, '');
  const item = {
    key: modalKey
  }
  page.modalList.push(item);
  
  const id = 'h_nav_modal_' + modalKey;
  if(component){
    this.uniteVue.nextTick(() => {
      if(!item._isDestroy){
        // const Cmpt = this.uniteVue.extend(component);
        // const cmpt = new Cmpt({
        //   el: '#' + id,
        //   parent,
        //   propsData
        // });
        const cmpt = this.uniteVue.newComponent(component, {
          el: '#' + id,
          parent,
          propsData
        });
        item._destoryCmpt = () => {
          this.uniteVue.destroy(cmpt);
        };
        success && success(cmpt);
      }
    });
  }
  return id;
}
History.prototype.clearModalWhenLoad = function(){
  const state = this._history.state;
  if(state){
    const modalKey = state._h_nav_modal_i;
    if(modalKey !== undefined){
      if(modalKey === 0){
        this.removeModalKeyWhenBackPage();
      } else if(modalKey > 0){
        this._history.go(-modalKey);
      }
    }
  }
}

History.prototype.removeModalKeyWhenBackPage = function(){
  const newState = Object.assign({}, this._history.state);
  delete(newState._h_nav_modal_i);
  this._history.replaceState(newState, '');
}

History.prototype.destroy = function(){
  if(isCreated){
    if(this._popstateHandle){
      this._window.removeEventListener('popstate', this._popstateHandle);
    }
    if(this._handleWinUnload){
      this._window.removeEventListener('_handleWinUnload', this._handleWinUnload);
    }
    isCreated = false;
  }
}

History.prototype.handleWinUnload = function(){
  this._saveModalCrumbs();
}



Object.assign(History.prototype, modalPart.proto);

// History.prototype.fitVue$3 = function(){ // FIT_VUE_3_SWITCH
//   if(this.uniteVue.is3){
//     let v;
//     ['stackMap', 'behavior', 'currentPage', '_tra', 'tabList', 'tabStackMap'].forEach(k => {
//       v = this[k];
//       if(v){
//         this[k] = vue$3Reactive(v)
//       }
//     })
//   }
// }

export default History;

// window.addEventListener('beforeunload', function(event){
//   console.log('beforeunload')
//   event.preventDefault();
//   event.returnValue = "Are you sure you want to exit?"
//   return 'beforeunload';
// })