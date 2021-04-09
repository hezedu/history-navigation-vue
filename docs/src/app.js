

import config from './multi_test/config';

import multi from './multi/index';
const Vue = window.Vue;
Vue.use(multi, config);


import './css/style.scss';
import './lib/vue-prototype';
import './lib/vue-filter';

import store from './store/index.js';
// import Root from './root.vue';
import Root from './multi_test/root_multi.vue';


var app = new Vue({
  store,
  render: h => h(Root)
});
app.$mount('#app');

