import History from './history';

export default function(opt){
  const h = new History(opt);
  const obj = {
    _h: h,
    URL: h.URL,
    // vueIs3: h.uniteVue.is3, FIT_VUE_3_SWITCH
    GLOBAL_CONFIG: h._global
  };
  
  ['push', 'back', 'backToPage', 'replace', 'relaunch', 'switchTab', 'modal'].forEach(k => {
    _bindToOther(obj, k, h);
  });
  
  return obj;

}

function _bindToOther(obj, attr, h){
  obj[attr] = function(){
    h[attr].apply(h, arguments);
  }
}