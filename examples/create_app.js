

import config from './config';



// import '../dist/history-navigation-vue.css';
// import * as hNav from '../dist/history-navigation-vue';
import * as hNav from '../src/bundle';
import './css/docs.css';
import './css/transition-mask.css';

import Root from './root.vue';

export default function createApp(_Vue, _config){
  if(_config){
    Object.assign(config, _config);
  }
  _Vue.use(hNav.plugin, config);
  var app = new _Vue({
    render: h => h(Root)
  });
  app.$mount('#app');
  return app;
}