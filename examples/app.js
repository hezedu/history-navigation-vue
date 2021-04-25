

import config from './config';

import * as hNav from '../dist/history-navigation-vue';
// const hNav = require('../dist/history-navigation-vue')
console.log('hNav', hNav)
const Vue = window.Vue;
Vue.use(hNav.plugin, config);

import './css/docs.scss';

import Root from './root.vue';

var app = new Vue({
  render: h => h(Root)
});

app.$mount('#app');
