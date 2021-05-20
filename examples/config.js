import Index from './pages/index.vue';
import List from './pages/list.vue';
import Detail from './pages/detail.vue';
import API from './pages/api.vue';
import MePage from './pages/me.vue';
// import NotFound from './pages/not-found.vue';
export default {
  // urlIsHashMode: false,
  urlBase: '/urlModeTest',
  pages: [
    { path: '/', component: Index, title: '首页', className: 'custom-index'},
    { path: '/me', component: MePage, title: '我', className: 'custom-me'},

    { path: '/api', component: API, title: 'API' },
    { path: '/list', component: List, title: '列表', className: 'custom-list' , transition: {
      duration: 40000
    }},
    { path: '/detail', component: Detail, title: '详情', transition: {
      duration: 1000
    } },
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
    },
    {
      pagePath: '/me',
      text: 'Me'
    }]
  },
  onRouted(e){
    document.title = e.title;
  },
  pageIntervalOffsetX: 33
}