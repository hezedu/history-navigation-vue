
function H_NAV(opt){
  this._opt = Object.assign(Object.create(null), opt);

  if(!this._opt.native){
    if(typeof window === undefined){
      throw new Error(_wrap_error('window is undefined'));
    }
    this._navite = {
      window: window,
      history: window.history,
      location: window.location
    }
  } else {
    this._navite = Object.assign(Object.create(null), this._opt.native);
    delete this._opt.native;
  }
  this.init();
}

const PAGE_KEY = '_h_nav_page';

H_NAV.prototype.init = function(){
  const state = this._navite.history.state || {};
  if(!state[PAGE_KEY]){

  }
}

function _wrap_error(msg){
  return 'Error: h_nav ' + msg;
}