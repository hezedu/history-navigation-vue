

import config from './config';



// import '../dist/history-navigation-vue.css';
// import * as hNav from '../dist/history-navigation-vue';
import * as hNav from '../src/bundle';
import './css/docs.css';
import './css/transition-mask.css';
const Vue = window.Vue;
Vue.use(hNav.plugin, config);



import Root from './root.vue';

var app = new Vue({
  render: h => h(Root)
});

app.$mount('#app');
