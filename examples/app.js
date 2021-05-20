

import config from './config';



// import '../dist/history-navigation-vue.css';
// import * as hNav from '../dist/history-navigation-vue';
import * as hNav from '../src/bundle';
import './css/docs.scss';
import './css/test-trf.scss';
// const hNav = require('../dist/history-navigation-vue')
// console.log('hNav', hNav)
const Vue = window.Vue;
Vue.use(hNav.plugin, config);



import Root from './root.vue';

var app = new Vue({
  render: h => h(Root)
});

app.$mount('#app');
