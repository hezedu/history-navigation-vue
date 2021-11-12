
export function uniteVue2(_Vue){

  return {
    proto: _Vue.prototype,
    nextTick: _Vue.nextTick,
    newComponent: function(Cmpt, newOpts) {
      const CmptExtend = _Vue.extend(Cmpt);
      return new CmptExtend(newOpts);
    },
    destroy: function(cmpt){
      cmpt.$destroy();
    },
    set: _Vue.set,
    delete: _Vue.delete,
    // reactive: function(obj){ // vue3 API
    //   return obj;
    // }
  }
}

let _Vue3; // createApp, h, nextTick;
export function fitVue3(_Vue){
  _Vue3 = _Vue;
}

export function uniteVue3(app){
  return {
    proto: app.config.globalProperties,
    nextTick: _Vue3.nextTick,
    newComponent: (Cmpt, newOpts) => {
      let app = _Vue3.createApp(Cmpt, newOpts.propsData);
      app.mount(newOpts.el);
      return app;
    },
    destroy: function(cmpt){
      cmpt.unmount();
    },
    set: function(obj, k, v){
      obj[k] = v;
    },
    delete: function(obj, k){
      delete obj[k];
    },
    reactive: function(obj){ // vue3 API
      return _Vue3.reactive(obj);
    }
  }
}