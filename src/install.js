import NavigationController from './cmpt/navigation-controller.vue';
import DefaultNotFound from './cmpt/default-not-found.vue';
import Navigator from './cmpt/navigator.vue';
import TabBarCtrler from './cmpt/tab-bar-ctrler.vue';
import navigator from './navigator/navigator';
import { trimSlash } from './navigator/url';
import ShowHideMixin from './mixin/show-hide-mixin';
import {cmptPageSuffix, 
  notFoundPageKey, 
  tabWrapKey, 
  DEF_PAGE_INTERVAL_OFFSET_X, 
  DEF_IS_SET_HREF,
  DEF_URL_BASE,
  DEF_URL_IS_HASH_MODE } from './constant';

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
  
  const globalOption = Object.create(null);
  _def(globalOption, config, 'pageIntervalOffsetX', DEF_PAGE_INTERVAL_OFFSET_X);
  _def(globalOption, config, 'isSetAHref', DEF_IS_SET_HREF);

  const options = {
    global: globalOption,

    Vue,
    pageMap,
    cmptPageSuffix,
    notFoundPageKey,
    tabBar
    
  }
  _def(options, config, 'urlBase', DEF_URL_BASE);
  _def(options, config, 'urlIsHashMode', DEF_URL_IS_HASH_MODE);

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
      throw new Error(`history-navigation-vue pageMap key: ${tk} is same as ${page.path}`);
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
    newList.push(Object.assign({}, item));
  }
  return {
    map,
    list: newList
  };
}



function _def(dest, src, key, def){
  let v = src[key];
  dest[key] = v === undefined ? def : v;
}