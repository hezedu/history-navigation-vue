import * as vue from 'vue';
import { fitVue3, plugin } from '../../../src/bundle';

import '../../../examples/css/docs.scss';
import '../../../examples/css/transition-mask.css';

import config from '../../../examples/config';
import Root from '../../../examples/root.vue';
// import App from './App.vue'
fitVue3(vue);

const app = vue.createApp(Root);
app.use(plugin, config);

console.log(app);

app.mount('#app')
