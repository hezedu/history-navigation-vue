import NavigationController from './cmpt/navigation-controller.vue';
import DefaultNotFound from './cmpt/default-not-found.vue';
import Navigator from './cmpt/navigator.vue';
import navigator from './navigator/navigator';
import { trimSlash } from './navigator/url';
import ShowHideMixin from './mixin/show-hide-mixin';
import { def, throwErr } from './util';
import {cmptPageSuffix, 
  notFoundPageKey, 
  DEF_PAGE_INTERVAL_OFFSET_X, 
  DEF_NAVIGATOR_TRIGGER_EVENT,
  DEF_URL_BASE,
  DEF_URL_IS_HASH_MODE } from './constant';


const defNotFoundPage = {
  title: 'Not Found',
  component: DefaultNotFound
}

export default function install(Vue, config) {

  if(!Array.isArray(config.pages)){
    throwErr('config.pages is not Array.');
  }

  const pageMap  = _formatPages(config.pages);
  let tabBar;
  if(config.tabBar){
    tabBar = _formatTabBar(config.tabBar, pageMap);
  }
  
  let notFoundPage = config.notFoundPage || defNotFoundPage;
  Vue.component(notFoundPageKey, notFoundPage.component);

  notFoundPage = {
    path: null,
    title: notFoundPage.title,
    cmptKey: notFoundPageKey,
    isTab: false,
    
    trimedPath: null
  }

  let i, page;
  for(i in pageMap){
    page = pageMap[i];
    Vue.component(page.cmptKey, page.component);
  }

  Vue.component('NavigationController', NavigationController);
  Vue.component('Navigator', Navigator);
  
  const globalOption = Object.create(null);
  def(globalOption, config, 'pageIntervalOffsetX', DEF_PAGE_INTERVAL_OFFSET_X);
  def(globalOption, config, 'navigatorTriggerEvent', DEF_NAVIGATOR_TRIGGER_EVENT);
  const options = {
    global: globalOption,

    Vue,
    pageMap,
    cmptPageSuffix,
    notFoundPage,
    tabBar,
    onRouted: config.onRouted
  }

  def(options, config, 'urlBase', DEF_URL_BASE);
  def(options, config, 'urlIsHashMode', DEF_URL_IS_HASH_MODE);

  Vue.prototype.$navigator = navigator(options);
  Vue.mixin(ShowHideMixin);
}

function _formatPages(pages){

  let map = Object.create(null);
  let i = 0, len = pages.length, page, tk;
  for(; i < len; i++){
    page = pages[i];
    tk = trimSlash(page.path);
    if(map[tk]){
      throwErr(`pageMap key: ${tk} is same as ${page.path}`);
    }
    map[tk] = Object.assign({}, page, {
      trimedPath: tk,
      isTab: false,
      cmptKey: cmptPageSuffix + i
    });
  }
  return map;
}

function _formatTabBar(tabBar, pageMap){
  const list = tabBar.list;
  let len = list.length;
  if(len < 2){
    throwErr(`tabBar list length must >= 2`);
  }
  let i = 0,  tk, item;
  
  const map = Object.create(null);
  const newList = [];
  for(; i < len; i++){
    item = list[i];
    tk = trimSlash(item.pagePath);
    const page = pageMap[tk];
    if(!page || page.path !== item.pagePath){
      throwErr(`tabBar pagePath: ${i} is not found in pages`);
    }
    if(map[tk]){
      throwErr(`tabBar pagePath: ${tk} is same as ${i}`);
    }
    page.isTab = true;
    page.tabIndex = i;
    map[tk] = true;
    newList.push(Object.assign({}, item));
  }
  return {
    map,
    list: newList
  };
}


