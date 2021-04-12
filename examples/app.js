

import config from './config';

import multi from '../src/index';

const Vue = window.Vue;
Vue.use(multi, config);

import './css/docs.scss';

import Root from './root.vue';

var app = new Vue({
  render: h => h(Root)
});

app.$mount('#app');
