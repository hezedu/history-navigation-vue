import Index from './pages/index.vue';
import List from './pages/list.vue';
import NotFound from './pages/not-found.vue';
export default {
  navigatorMode: 'hash',
  pages: [
    { path: '/', component: Index },
    { path: '/list', component: List },
  ],
  notFoundPage: NotFound
}