import { getCurrentStateKey } from '../state-key';
export default {
  init(){
    this._whenPopTra = null;
    this._whenPopInfo = null;
    this._whenBackPopInfo = null;
  },
  proto: {
    getModalStepsTotal(){
      const arr = this._modal_crumbs;
      let count = 0, i = 0;
      const max = arr.length;
      for(; i < max; i++){
        count = count + arr[i][1];
      }
      return count;
    },
    _backGetTo1Count(){
      const key = getCurrentStateKey();
      const modalCount = this.getModalStepsTotal();
      console.log('modalCount', modalCount, key)
      const total = key + modalCount;
      return total - 1;
    },
    back(_steps, tra){
      // const key = getCurrentStateKey();
      // const modalCount = this.getModalStepsTotal();
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
      // else {
      //   this._history.back();
      // }
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
      console.log('_backToStartAndReplace')
      if(total > 0){
        this._backAndApply(total, '_replace', [fullParse, behavior], tra);
      } else {
        this._setTra(tra);
        this._replace(fullParse, behavior);
      }
    }
  }
}
