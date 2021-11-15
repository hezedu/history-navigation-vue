import Index from './pages/index.vue';
import List from './pages/list.vue';
import Detail from './pages/detail.vue';
import API from './pages/api.vue';
import MePage from './pages/me.vue';
// import NotFound from './pages/not-found.vue';
export default {
  // urlIsHashMode: false,
  // urlBase: '/urlModeTest',
  pageStyle: {background: '#fff'},
  pages: [
    { path: '/', component: Index, title: '首页',  className: 'custom-index'},
    { path: '/me', component: MePage, title: '我', className: 'custom-me'},

    { path: '/api', component: API, title: 'API' },
    { path: '/list', component: List, title: '列表', className: 'custom-list'},
    { path: '/detail', component: Detail, title: '详情'},
  ],
  // notFoundPage: {
  //   title: '404',
  //   component: NotFound
  // },
  // tabBar: {
  //   list: [{
  //     pagePath: '/',
  //     icon: 'index_icon',
  //     text: '首页'
  //   },
  //   {
  //     pagePath: '/api',
  //     icon: 'api_icon',
  //     text: 'API'
  //   },
  //   {
  //     pagePath: '/me',
  //     icon: 'me_icon',
  //     text: 'Me'
  //   }]
  // },
  onRouted(e){
    document.title = e.title;
  },
  onExit: againToExit(2000, 'Press Back Again to Exit')
}

function againToExit(interval, tips){
  let isAgain = false;
  return function handleExit(e){
    console.log('onExit', isAgain);
    if(!isAgain){
      e.preventDefault();
      isAgain = true;
      window.$simpleTips.tips(tips);
      setTimeout(() => {
        isAgain = false;
      }, interval);
    }

  }
}