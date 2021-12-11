import { getCurrentStateKey, getCurrModaKey, updatePreState } from '../state-key';
import { KEY_NAME, MODAL_BAE_KEY, MODAL_CRUMBS_KEY_NAME, MODAL_KEY_NAME } from '../../constant';
import { _cutOffAndPush } from '../../util';
// import { nativeDocument } from '../native';

export default {
  init(){
    this._modal_crumbs = null;
    this._initModalCrumbs();
    console.log('[_initModalCrumbs]', this._modal_crumbs);
  },
  proto: {
    modal({component, propsData, parent, success}){
      const isBAEModal = arguments[0] === MODAL_BAE_KEY;
      if(!isBAEModal){
        this._autoBAE();
      }
      const key = getCurrentStateKey();
      const page = this.stackMap[key];
      let modalKey = getCurrModaKey();
      modalKey = modalKey + 1;
      this._history.pushState({[KEY_NAME]: key, [MODAL_KEY_NAME]: modalKey}, '');
      this._setModalCrumbsWhenChange();
      updatePreState();
      
      const item = {
        key: modalKey,
        uid: _genModalKey()
      }
      page.modalList.push(item);
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
      const currKey = getCurrentStateKey();
      const modalKey = getCurrModaKey();
      const page = this.stackMap[currKey];
      let arr;
      if(page){
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
      }
    },
    _autoRemoveModal(){
      const key = getCurrentStateKey();
      const page = this.stackMap[key];
      const modalKey = getCurrModaKey();
      if(page && page.modalList.length > modalKey){
        this.removeModal();
      }
    },
    _setModalCrumbsWhenChange(){
      const key = getCurrentStateKey();
      const modalKey = getCurrModaKey();
      this._setModalCrumbs(key, modalKey);
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
        const modalKey = getCurrModaKey();
        if(modalKey){
          this._modal_crumbs = [[getCurrentStateKey(), modalKey]];
        } else {
          this._modal_crumbs = [];
        }
        
      }
    },
    _setModalCrumbs(stateKey, modalCount){
      const arr = this._modal_crumbs;
      _cutOffAndPush(arr, stateKey, modalCount);
    },
    
    _saveModalCrumbs(){
      console.log('_saveModalCrumbs');
      if(this._modal_crumbs.length){
        const h = this._history;
        const state = h.state || {};
        state[MODAL_CRUMBS_KEY_NAME] = _format(this._modal_crumbs);
        this._history.replaceState(state, '');
      }
    },
    getLastModalKeyByCrumbs(stateKey){
      const crumbs = this._modal_crumbs;
      const last = crumbs[crumbs.length - 1];
      if(last){
        if(last[0] === stateKey){
          return last[1];
        }
      }
      return 0;
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