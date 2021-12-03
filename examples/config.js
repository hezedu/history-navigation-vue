import Index from './pages/index.vue';
import List from './pages/list.vue';
import Detail from './pages/detail.vue';
import API from './pages/api.vue';
import MePage from './pages/me.vue';
import TraPer from './pages/tra-performance.vue';
import TraPerDetail from './pages/tra-performance-detail.vue';
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
    { path: '/tra-per', component: TraPer, title: '过渡性能'},
    { path: '/tra-per-detail', component: TraPerDetail, title: '过渡性能详情'},
  ],
  // notFoundPage: {
  //   title: '404',
  //   component: NotFound
  // },
  tabBar: {
    list: [{
      pagePath: '/',
      icon: 'index2_icon',
      text: '首页'
    },
    {
      pagePath: '/api',
      icon: 'api_icon',
      text: 'API'
    },
    {
      pagePath: '/me',
      icon: 'me_icon',
      text: 'Me'
    }]
  },
  onRouted(e){
    console.log('onRouted', e)
    document.title = e.title;
  },
  backAgainToExit: {
    maxInterval: 1500,
    onFirstTrigger() {
      window.$simpleTips.tips('Press Back Again to Exit');
    }
  }
}

function againToExit(interval, tips){
  let isAgain = false;
  return function handleExit(e){
    if(e.isTabPage() || e.isHomePage()){
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
}