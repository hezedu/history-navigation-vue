import Index from './pages/index.vue';
import List from './pages/list.vue';
import Detail from './pages/detail.vue';
import API from './pages/api.vue';
import NotFound from './pages/not-found.vue';
export default {
  // urlIsHashMode: false,
  urlBase: '/urlModeTest',
  pages: [
    { path: '/', component: Index, title: '首页' },
    { path: '/list', component: List, title: '列表' },
    { path: '/api', component: API, title: 'API' },
    { path: '/detail', component: Detail, title: '详情' },
  ],
  // notFoundPage: {
  //   title: '404',
  //   component: NotFound
  // },
  tabBar: {
    list: [{
      pagePath: '/',
      text: '首页'
    },
    {
      pagePath: '/api',
      text: 'API'
    }]
  },
  onRouted(e){
    document.title = e.title;
  }
}