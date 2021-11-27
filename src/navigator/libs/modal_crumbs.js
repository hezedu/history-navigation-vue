const MODAL_CRUMBS_KEY_NAME = '_h_n_c';

export default {
  init(self){
    self._modal_crumbs = [];
  },
  proto: {
    _initModalCrumbs(){
      const h = this._history;
      const state = h.state || {};
      const v = state[MODAL_CRUMBS_KEY_NAME];
      if(v){
        delete state[MODAL_CRUMBS_KEY_NAME];
        this._history.replaceState(state, '');
        this._modal_crumbs = _parse(v);
      }
    },
    _setModalCrumbs(stateKey, modalCount){
      const arr = this._modal_crumbs;
      const lastI = arr.length - 1;
      let v = arr[lastI];
      if(lastI === -1 || v[0] < stateKey){
        arr.push([stateKey, modalCount]);
        return;
      }
      for(; lastI > -1; lastI--){
        v = arr[lastI];
        if(v[0] < _stateKey){
          break;
        }
      }
      arr.splice(lastI, arr.length, [stateKey, modalCount]);
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
    result.push(Number(v[0]), Number(v[1]));
  }
  return result;
}

function _format(arr){
  return arr.map(function(v) {
    return v.join(':');
  }).join(';');
}