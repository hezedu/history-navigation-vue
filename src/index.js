import './css/style.scss';

import NavigationController from './cmpt/navigation-controller.vue';
import DefaultNotFound from './cmpt/default-not-found.vue';
import Navigator from './cmpt/navigator.vue';
import navigator from './navigator/navigator';
import { trimSlash } from './navigator/url';
import ShowHideMixin from './mixin/show-hide-mixin';

function install(Vue, config) {

  if(!Array.isArray(config.pages)){
    throw new Error('vue-multi config.pages is not Array.');
  }

  const cmptPageSuffix = 'vue-multi-page-';
  const notFoundPageKey = cmptPageSuffix + 'not-found';
  const pageMap  = _formatPages(config.pages);
  const navigatorMode = config.navigatorMode || 'hash';

  Vue.component(notFoundPageKey, config.notFoundPage || DefaultNotFound);
  let i, page;
  for(i in pageMap){
    page = pageMap[i];
    Vue.component(cmptPageSuffix + page.index, page.component);
  }

  Vue.component('NavigationController', NavigationController);
  Vue.component('Navigator', Navigator);
  
  Vue.prototype.$navigator = navigator({
    isHash: navigatorMode === 'hash',
    Vue,
    entryPagePath: config.entryPagePath,
    pageMap,
    cmptPageSuffix,
    notFoundPageKey
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
      throw new Error(`vue-multi pageMap key: ${tk} is same as ${page.path}`);
    }
    map[tk] = {
      ...page,
      trimedPath: tk,
      index: i
    };
  }
  return map;
}

export default {
  install
}