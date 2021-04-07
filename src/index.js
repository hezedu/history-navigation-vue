
import { nativeHistory } from './navigator/native';
if(!nativeHistory || !nativeHistory.pushState){
  throw new Error('multi required history.pushState API');
}

import App from './cmpt/app.vue';
import DefNotFound from './cmpt/not-found.vue';
import NavigatorCmpt from './cmpt/navigator.vue';
import navigator from './navigator/navigator';
import { trimSlash } from './navigator/url';
import getPage from './get-page';
function install(Vue, config) {

  if(!Array.isArray(config.pages)){
    throw new Error('vue-multi config.pages is not Array.');
  }

  const cmptKeys = config.componentKeys || Object.create(null);
  const cmptPageSuffix = cmptKeys.pageSuffix || 'multi-page-';
  const notFoundPageKey = cmptPageSuffix + 'not-found';
  const pageMap  = _formatPages(config.pages);
  const navigatorMode = config.navigatorMode || 'hash';

  Vue.component(notFoundPageKey, config.notFoundPage || DefNotFound);
  let i, page;
  for(let i in pageMap){
    page = pageMap[i];
    Vue.component(cmptPageSuffix + page.index, page.component);
  }

  Vue.component(cmptKeys.App || 'App', App);
  Vue.component(cmptKeys.Navigator || 'Navigator', NavigatorCmpt);

  Vue.prototype.$navigator = navigator({
    isHash: navigatorMode === 'hash',
    Vue,
    entryPagePath: config.entryPagePath,
    pageMap,
    cmptPageSuffix,
    notFoundPageKey
  });
  Vue.prototype.$getPage = getPage;
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