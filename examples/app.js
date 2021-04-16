

import config from './config';

import * as multi from '../src/index';

const Vue = window.Vue;
Vue.use(multi.plugin, config);

import './css/docs.scss';

import Root from './root.vue';

var app = new Vue({
  render: h => h(Root)
});

app.$mount('#app');
