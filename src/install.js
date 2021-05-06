import NavigationController from './cmpt/navigation-controller.vue';
import DefaultNotFound from './cmpt/default-not-found.vue';
import Navigator from './cmpt/navigator.vue';
import TabBarCtrler from './cmpt/tab-bar-ctrler.vue';
import navigator from './navigator/navigator';
import { trimSlash } from './navigator/url';
import ShowHideMixin from './mixin/show-hide-mixin';
import {cmptPageSuffix, notFoundPageKey, tabWrapKey} from './constant';

export default function install(Vue, config) {

  if(!Array.isArray(config.pages)){
    throw new Error('history-navigation-vue config.pages is not Array.');
  }

  
  const pageMap  = _formatPages(config.pages);
  let tabBar;
  if(config.tabBar){
    tabBar = _formatTabBar(config.tabBar, pageMap);
  }
  
  Vue.component(notFoundPageKey, config.notFoundPage || DefaultNotFound);
  Vue.component(tabWrapKey, TabBarCtrler);
  let i, page;
  for(i in pageMap){
    page = pageMap[i];
    Vue.component(page.cmptKey, page.component);
  }

  Vue.component('NavigationController', NavigationController);
  Vue.component('Navigator', Navigator);
  
  Vue.prototype.$navigator = navigator({
    homePagePath: config.homePagePath || config.pages[0].path,

    isHash: config.urlIsHashMode === undefined ? true : config.isHash,
    urlBase: config.urlBase || '',
    Vue,
    pageMap,
    cmptPageSuffix,
    notFoundPageKey,
    tabBar
  });
  Vue.mixin(ShowHideMixin);
}

function _formatPages(pages){

  let map = Object.create(null);
  let i = 0, len = pages.length, page, tk;
  for(; i < len; i++){
    page = pages[i];
    tk = trimSlash(page.path);
    if(map[tk]){
      throw new Error(`history-navigation-vue pageMap key: ${tk} is same as ${page.path}`);
    }
    map[tk] = Object.assign({}, page, {
      trimedPath: tk,
      isTab: false,
      id: i,
      cmptKey: cmptPageSuffix + i
    });
  }
  return map;
}

function _formatTabBar(tabBar, pageMap){
  const list = tabBar.list;
  let len = list.length;
  if(len < 2){
    throw new Error(`history-navigation-vue tabBar list length must >= 2`);
  }
  let i = 0,  tk, item;
  
  const map = Object.create(null);
  const newList = [];
  for(; i < len; i++){
    item = list[i];
    tk = trimSlash(item.pagePath);
    const page = pageMap[tk];
    if(!page){
      throw new Error(`history-navigation-vue tabBar pagePath: ${i} is not found in pages`);
    }
    if(map[tk]){
      throw new Error(`history-navigation-vue tabBar pagePath: ${tk} is same as ${i}`);
    }
    page.isTab = true;
    page.tabIndex = i;
    map[tk] = true;
    newList.push(Object.assign({id: page.id}, item));
  }
  return {
    map,
    list: newList
  };
}