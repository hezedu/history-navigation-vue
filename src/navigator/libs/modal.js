import { getCurrentStateKey } from '../state-key';
import { KEY_NAME, MODAL_BAE_KEY, MODAL_CRUMBS_KEY_NAME, MODAL_KEY_NAME } from '../../constant';
// import { nativeDocument } from '../native';

export default {
  init(){
    this._modal_crumbs = null;
    this._initModalCrumbs();
    console.log('_initModalCrumbs', this._modal_crumbs)
  },
  proto: {
    modal({component, propsData, parent, success}){
      const isBAEModal = arguments[0] === MODAL_BAE_KEY;
      if(!isBAEModal){
        this._autoBAE();
      }
      const key = getCurrentStateKey();
      const page = this.stackMap[key];
      const state = this._history.state;
      let modalKey = state[MODAL_KEY_NAME];
      console.log('[modal]: Key', modalKey);
      if(!modalKey) {
        modalKey = 0;
        this._history.replaceState({[KEY_NAME]: key, [MODAL_KEY_NAME]: modalKey}, '');
      }
      modalKey = modalKey + 1;
      this._history.pushState({[KEY_NAME]: key, [MODAL_KEY_NAME]: modalKey}, '');

      console.log('[modal]: Key pushed', modalKey);
      const item = {
        key: modalKey,
        uid: _genModalKey()
      }
      page.modalList.push(item);
      this._setModalCrumbs(key, modalKey);
      if(isBAEModal){
        item.isBAE = true;
        return;
      }
      const id = 'h_nav_modal_' + item.uid;
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
    },
    removeModal(){
      const state = this._history.state;
      if(!state){
        return;
      }
      const currKey = getCurrentStateKey();
      const modalKey = state[MODAL_KEY_NAME];
      if(typeof modalKey === 'number'){
        const page = this.stackMap[currKey];
        let arr;
        if(page){
          console.log('[removeModal] modalKey', page.modalList, modalKey);
          arr = page.modalList.splice(modalKey);
          arr.forEach(item => {
            item._isDestroy = true;
            if(item._destoryCmpt){
              item._destoryCmpt();
            }
          })
        }
        if(modalKey === 0){
          if(this._isNeedBAE()){
            if(arr && arr.length > 1){
              console.log('[removeModal] step not 1', arr.length);
              this._autoBAE();
            } else {
              this.BAE.onFirstTrigger();
              setTimeout(() => {
                this._autoBAE();
              }, this.BAE.maxInterval);
            }
          }
          this.removeModalKeyWhenBackPage();
        }
      }
    },
    _autoRemoveModal(){
      const state = this._history.state;
      if(!state){
        return;
      }
      const key = getCurrentStateKey();
      const page = this.stackMap[key];
      
      const modalKey = state[MODAL_KEY_NAME] || 0;
      if(page && page.modalList.length > modalKey){
        this.removeModal();
      }
    },
    _setModalCrumbsWhenChange(){
      const key = getCurrentStateKey();
      const modalKey = this.getCurrModaKey();
      this._setModalCrumbs(key, modalKey);
    },
    getCurrModaKey(){
      const state = this._history.state;
      if(state && typeof state[MODAL_KEY_NAME] === 'number'){
        return state[MODAL_KEY_NAME];
      }
      return 0;
    },
    removeModalKeyWhenBackPage(){
      const newState = Object.assign({}, this._history.state);
      delete newState[MODAL_KEY_NAME];
      this._history.replaceState(newState, '');
    },
    _initModalCrumbs(){
      const h = this._history;
      const state = Object.assign({}, h.state);
      const v = state[MODAL_CRUMBS_KEY_NAME];
      if(v){
        delete state[MODAL_CRUMBS_KEY_NAME];
        this._history.replaceState(state, '');
        this._modal_crumbs = _parse(v);
      } else {
        const modalKey = this.getCurrModaKey();
        if(modalKey){
          console.log('[_initModalCrumbs]', modalKey);
          this._modal_crumbs = [[getCurrentStateKey(), modalKey]];
        } else {
          this._modal_crumbs = [];
        }
        
      }
    },
    _setModalCrumbs(stateKey, modalCount){
      const arr = this._modal_crumbs;
      let lastI = arr.length - 1;
      let v = arr[lastI];
      if(lastI === -1 || v[0] < stateKey){
        arr.push([stateKey, modalCount]);
        return;
      }
      for(; lastI > -1; lastI--){
        v = arr[lastI];
        if(v[0] < stateKey){
          break;
        }
      }
      arr.splice(lastI, arr.length, [stateKey, modalCount]);
      if(!modalCount){
        arr.pop();
      }
    },
    _saveModalCrumbs(){
      console.log('_saveModalCrumbs');
      if(this._modal_crumbs.length){
        const h = this._history;
        const state = h.state || {};
        state[MODAL_CRUMBS_KEY_NAME] = _format(this._modal_crumbs);
        this._history.replaceState(state, '');
      }
    }
  }
}

function _parse(str){
  // STATE_KEY:MODAL_COUNT;...
  const arr = str.split(';');
  const result = [];
  let i = 0, v;
  const MAX = arr.length;
  for(; i < MAX; i++){
    v = arr[i].split(':');
    result.push([Number(v[0]), Number(v[1])]);
  }
  return result;
}

function _format(arr){
  return arr.map(function(v) {
    console.log('_format', v);
    return v.join(':');
  }).join(';');
}


let _modalKey = 0;
function _genModalKey(){
  _modalKey = _modalKey + 1;
  return _modalKey;
}