import { getCurrentStateKey } from '../state-key';
import { MODAL_BAE_KEY, MODAL_KEY_NAME } from '../../constant';
export default {
  proto: {
    _isBAEPage(){
      if(this.BAE){
        const key = getCurrentStateKey();
        const page = this.stackMap[key];
        if(key === 1 && page && (page.isHome || page.isTab)){
          return true;
        }
      }
      return false;
    },
    _isBAEPageByTK(tk){
      if(this.BAE){
        const key = getCurrentStateKey();
        const page = this.pageMap[tk];
        if(key === 1 && page && (page.isHome || page.isTab)){
          return true;
        }
      }
      return false;
    },
    _isNeedBAE(){
      if(this._isBAEPage()){
        const state = this._history.state;
        if(state && !state[MODAL_KEY_NAME]){
          return true;
        }
      }
      return false;
    },
    _autoBAE(){
      const isN = this._isNeedBAE();
      console.log('_autoBAE', isN);
      if(isN){
        this.modal(MODAL_BAE_KEY);
      }
    }
  }
}