import { getCurrentStateKey, getCurrState } from '../state-key';
import { _getTotalSteps } from '../../util';
export default {
  init(){
    this._whenPopTra = null;
    this._whenPopInfo = null;
    this._whenBackPopInfo = null;
  },
  proto: {
    _getStepsTotal(distState){
      const currState = getCurrState();
      const { key, modalKey } = currState;
      const distKey = distState.key;
      const distModalKey = distState.modalKey;
      let count = key - distKey;
      if(count === 0){
        return modalKey - distModalKey;
      }
      const arr = this._modal_crumbs;
      let start, end;
      const isBack = count > 0;
      if(isBack){
        start = distState;
        end = currState;
      } else {
        start = currState;
        end = distState;
      }
      let total = _getTotalSteps(arr, start, end);
      if(!isBack){
        total = -total;
      }
      return total;
    },
    // _getTotalFromPreState(){
    //   return this._getStepsTotal({key: 1, modalKey: 0});
    // },
    _backGetTo1Count(){
      return this._getStepsTotal({key: 1, modalKey: 0});
    },
    back(_steps, tra){
      // const key = getCurrentStateKey();
      // const modalCount = this.get2ModalStepsTotal();
      // console.log('modalCount', modalCount, key)
      // const total = key + modalCount;
      let steps = _steps || 1;
      if(steps < 1){
        return;
      }
      // if(typeof steps === 'number' && steps > 0){
      //   if(total - steps < 1){
      //     steps = total - 1;
      //   }
      // }
      // console.log('[back] steps', steps);
      this._whenPopTra = tra;
      if(steps){
        this._history.go(-steps);
      }
    },
    backToPage(_steps, tra){
      const arr = this._modal_crumbs;
      console.log('[backToPage] _modal_crumbs', arr);
      if(!arr.length){
        this.back(_steps, tra);
        return;
      }
      const key = getCurrentStateKey();
      const distKey = key - _steps;
      let i = 0, v, count = 0;
      const max = arr.length;
      for(; i < max; i++){
        v = arr[i];
        if(v[0] > distKey){
          count = count + v[1];
        } else {
          break;
        }
      }
      this.back(_steps + count, tra);
      
    },
    _backAndApply(steps, method, args, tra){
      if(steps < 1){
        return;
      }
      this._whenBackPopInfo = {
        method,
        args
      }
      this.back(steps, tra);
    },

    _backToStartAndReplace(fullParse, behavior, tra){
      const total = this._backGetTo1Count();
      // console.log('_backToStartAndReplace', total, this._modal_crumbs);
      // return;
      if(total > 0){
        this._backAndApply(total, '_replace', [fullParse, behavior], tra);
      } else if(total === 0){
        this._setTra(tra);
        this._replace(fullParse, behavior);
      } else {
        console.error('_backToStartAndReplace not back', total);
      }
    }
  }
}
