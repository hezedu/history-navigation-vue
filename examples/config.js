import Index from './pages/index.vue';
import List from './pages/list.vue';
import Detail from './pages/detail.vue';
import NotFound from './pages/not-found.vue';
export default {
  navigatorMode: 'hash',
  pages: [
    { path: '/', component: Index },
    { path: '/list', component: List },
    { path: '/detail', component: Detail, className: 'hahahah' },
  ],
  notFoundPage: NotFound
}