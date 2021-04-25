import Index from './pages/index/index.vue';
import List from './pages/list.vue';
import Detail from './pages/detail.vue';
import API from './pages/api.vue';
import NotFound from './pages/not-found.vue';
export default {
  navigatorMode: 'hash',
  pages: [
    { path: '/', component: Index },
    { path: '/list', component: List },
    { path: '/api', component: API },
    { path: '/detail', component: Detail, className: 'hahahah' },
  ],
  notFoundPage: NotFound
}