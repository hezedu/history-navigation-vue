/*!
  * history-navigation-vue v1.4.1
  * (c) 2021 hezedu
  * @license MIT
  */
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["historyNavigationVue"] = factory();
	else
		root["historyNavigationVue"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "plugin": function() { return /* binding */ bundle_plugin; },
  "version": function() { return /* binding */ version; }
});

;// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/navigation-controller.vue?vue&type=template&id=7caa483a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"h-nav-ctrler",class:'h-nav-behavior-' + _vm.behavior.type,style:({'--h-nav-distance': _vm.behavior.distance}),attrs:{"tag":"div","enter-class":"","leave-class":"","enter-to-class":"","leave-to-class":"","enter-active-class":"h-nav--page_load","leave-active-class":"h-nav--page_unload"}},[_vm._l((_vm.stackMap),function(v){return _c('div',{key:v.stackId,staticClass:"h-nav-page-handle",class:_vm.transition.className,style:(v.isClean ? 'transition: none!important; animation: none!important;' : '')},[(v.isTab)?_c('TabCtrler',{key:v.stackId,style:([{zIndex: v.stateKey}]),attrs:{"tabStackMap":_vm.tabStackMap,"tabList":_vm.tabList,"traClassName":_vm.transition.className,"currTabPage":v,"isActive":v.stackId === _vm.currentPage.stackId,"isFirstLoad":_vm.isFirstLoad,"globalPageStyle":_vm.globalPageStyle}}):_c('Page',{key:v.stackId,attrs:{"transitionName":"h-nav-page","v":v,"isActive":v.stackId === _vm.currentPage.stackId,"isFirstLoad":_vm.isFirstLoad,"globalPageStyle":_vm.globalPageStyle}})],1)}),_vm._v(" "),(_vm.isErr)?_c('div',{key:"not_support",staticClass:"h-nav-not-support"},[_vm._t("default",[_c('h1',[_vm._v("history-navigation-vue")]),_vm._v(" "),_c('p',[_vm._v("Sorry, Your browser doesn't support HTML history API.")])])],2):_vm._e()],2)}
var staticRenderFns = []


;// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/page.vue?vue&type=template&id=2ea3481a&
var pagevue_type_template_id_2ea3481a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.transitionName,"appear":true}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],class:_vm.transitionName,style:({zIndex: _vm.v.stateKey})},[_c('PageMain',{class:_vm.v.className,style:([_vm.globalPageStyle, _vm.v.style]),attrs:{"path":_vm.v.path,"title":_vm.v.title,"isHome":_vm.v.isHome,"isTab":_vm.v.isTab,"tabIndex":_vm.v.tabIndex,"stateKey":_vm.v.stateKey,"route":_vm.v.route,"isFirstLoad":_vm.isFirstLoad,"isActive":_vm.isActive}},[_c(_vm.v.cmptKey,{tag:"component"})],1),_vm._v(" "),_vm._l((_vm.v.modalList),function(modal){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!modal.isBAE),expression:"!modal.isBAE"}],key:modal.key,staticClass:"h-nav-modal",style:({zIndex: modal.key})},[_c('div',{attrs:{"id":'h_nav_modal_' + modal.uid}})])})],2)])}
var pagevue_type_template_id_2ea3481a_staticRenderFns = []


;// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/page_main.vue?vue&type=template&id=21d18cb0&
var page_mainvue_type_template_id_21d18cb0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-nav-page-main"},[_vm._t("default")],2)}
var page_mainvue_type_template_id_21d18cb0_staticRenderFns = []


;// CONCATENATED MODULE: ./constant.js
var PAGE_E_SHOW_NAME = '_h_nav_page_show';
var PAGE_E_HIDE_NAME = '_h_nav_page_hide';
var cmptPageSuffix = 'h-nav-page-';
var notFoundPageKey = cmptPageSuffix + 'not-found'; // export const DEF_IS_SET_HREF = true;

var DEF_URL_IS_HASH_MODE = true;
var DEF_NAVIGATOR_TRIGGER_EVENT = 'click';
var DEF_URL_BASE = '';
var DEF_TRANSITION = 'h-nav-transition';
var KEY_NAME = '_h_n_key';
var MODAL_CRUMBS_KEY_NAME = '_h_n_crumbs';
var MODAL_KEY_NAME = '_h_n_modal_key';
var MODAL_BAE_KEY = '_H_NAV_BAE_MODAL_';
var DEF_PAGE_STYLE = undefined; // export const AGAIN_TO_EXIT_INTERVAL = 2000;
// export const AGAIN_TO_EXIT_TIP = 'Press Back Again to Exit';
;// CONCATENATED MODULE: ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/page_main.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var page_mainvue_type_script_lang_js_ = ({
  name: 'HistoryNavigationPage',
  provide: function provide() {
    return {
      $page: this
    };
  },
  props: {
    path: {
      type: String
    },
    title: String,
    isHome: Boolean,
    isTab: {
      type: Boolean,
      required: true
    },
    tabIndex: Number,
    stateKey: Number,
    route: {
      type: Object,
      required: true
    },
    isFirstLoad: {
      type: Boolean,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      isLoad: this.isFirstLoad
    };
  },
  watch: {
    isActive: function isActive() {
      this._handleShowHide();
    }
  },
  methods: {
    _handleShowHide: function _handleShowHide() {
      if (this.isActive) {
        this._uniteEmit(PAGE_E_SHOW_NAME);
      } else {
        this._uniteEmit(PAGE_E_HIDE_NAME);
      }
    },
    _uniteEmit: function _uniteEmit(key) {
      this.$emit(key);
    },
    _uniteBeforeDestory: function _uniteBeforeDestory() {
      if (!this.isLoad) {
        return;
      }

      this.$options._tmp_is_before_destroy = true; // // Unlike window app. 
      // // It's like wehn input dom removed the blur event also trigger. 
      // // It's will trigger hide event before destroy.

      if (this.isActive) {
        this._uniteEmit(PAGE_E_HIDE_NAME);
      }

      this.isLoad = false;
    }
  },
  beforeCreate: function beforeCreate() {// if(this.$navigator.vueIs3){ // FIT_VUE_3_SWITCH
    //   vue$3FitEmitOnOff(this);
    // }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.isLoad) {
      // For pre rendering or server rendering
      this._uniteEmit(PAGE_E_SHOW_NAME);

      return;
    }

    setTimeout(function () {
      if (_this.$options._tmp_is_before_destroy) {
        return;
      } // If don't use setTimeout, 
      // the next page's document addEventListener click will trigger in current page.


      _this.isLoad = true;

      _this.$nextTick(function () {
        _this._uniteEmit(PAGE_E_SHOW_NAME);
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    this._uniteBeforeDestory();
  },
  beforeUnmount: function beforeUnmount() {
    this._uniteBeforeDestory();
  }
});
;// CONCATENATED MODULE: ./cmpt/page_main.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_page_mainvue_type_script_lang_js_ = (page_mainvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ../node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./cmpt/page_main.vue





/* normalize component */
;
var component = normalizeComponent(
  cmpt_page_mainvue_type_script_lang_js_,
  page_mainvue_type_template_id_21d18cb0_render,
  page_mainvue_type_template_id_21d18cb0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var page_main = (component.exports);
;// CONCATENATED MODULE: ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pagevue_type_script_lang_js_ = ({
  name: 'HistoryNavigationPageWrap',
  components: {
    PageMain: page_main
  },
  props: {
    transitionName: {
      type: String,
      default: 'h-nav-page'
    },
    v: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    },
    isFirstLoad: {
      type: Boolean,
      required: true
    },
    globalPageStyle: undefined
  }
});
;// CONCATENATED MODULE: ./cmpt/page.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_pagevue_type_script_lang_js_ = (pagevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./cmpt/page.vue





/* normalize component */
;
var page_component = normalizeComponent(
  cmpt_pagevue_type_script_lang_js_,
  pagevue_type_template_id_2ea3481a_render,
  pagevue_type_template_id_2ea3481a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var page = (page_component.exports);
;// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/tab-bar-controller.vue?vue&type=template&id=0f688486&
var tab_bar_controllervue_type_template_id_0f688486_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"h-nav-page","appear":true}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"h-nav-tabs-ctrler h-nav-tabs-wrap"},[_c('transition-group',{staticClass:"h-nav-tab-pages-wrap",class:'h-nav-tab-behavior-' + _vm.tabBehavior,style:({'--h-nav-tab-distance': _vm.tabBehaviorDistance}),attrs:{"tag":"div","enter-class":"","leave-class":"","enter-to-class":"","leave-to-class":"","enter-active-class":"h-nav-tab_page_load","leave-active-class":"h-nav-tab_page_unload"}},_vm._l((_vm.tabStackMap),function(v){return _c('div',{key:v.tabIndex,staticClass:"h-nav-tab-page-handle",class:_vm.traClassName,style:(v.isClean ? 'transition: none!important; animation: none!important;' : '')},[_c('Page',{attrs:{"transitionName":"h-nav-tab-page","v":v,"isActive":_vm.isActive && (_vm.currTabPage.tabIndex === v.tabIndex),"isFirstLoad":_vm.isFirstLoad,"globalPageStyle":_vm.globalPageStyle}})],1)}),0),_vm._v(" "),_c('TabBar',{attrs:{"list":_vm.tabList,"currentIndex":_vm.currTabPage.tabIndex}})],1)])}
var tab_bar_controllervue_type_template_id_0f688486_staticRenderFns = []


;// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/tab-bar.vue?vue&type=template&id=2194face&
var tab_barvue_type_template_id_2194face_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-nav-tabbar"},_vm._l((_vm.list),function(v,index){return _c('Navigator',{key:v.pagePath,staticClass:"h-nav-tab",attrs:{"isActive":_vm.currentIndex === index,"url":v.pagePath,"type":"switchTab"}},[(v.icon)?_c('div',{staticClass:"h-nav-tab-icon",class:v.icon}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"h-nav-tab-text"},[_vm._v(_vm._s(v.text))])])}),1)}
var tab_barvue_type_template_id_2194face_staticRenderFns = []


;// CONCATENATED MODULE: ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/tab-bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tab_barvue_type_script_lang_js_ = ({
  props: {
    list: {
      // Global config tabBar.list
      type: Array,
      required: true
    },
    currentIndex: {
      // Current tab page's index
      type: Number,
      required: true
    }
  },
  name: "HistoryNavigationTabBar"
});
;// CONCATENATED MODULE: ./cmpt/tab-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_tab_barvue_type_script_lang_js_ = (tab_barvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./cmpt/tab-bar.vue



;


/* normalize component */

var tab_bar_component = normalizeComponent(
  cmpt_tab_barvue_type_script_lang_js_,
  tab_barvue_type_template_id_2194face_render,
  tab_barvue_type_template_id_2194face_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab_bar = (tab_bar_component.exports);
;// CONCATENATED MODULE: ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/tab-bar-controller.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var tab_bar_controllervue_type_script_lang_js_ = ({
  name: "HistoryNavigationTabBarController",
  components: {
    Page: page,
    TabBar: tab_bar
  },
  props: {
    currTabPage: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    },
    isFirstLoad: {
      type: Boolean,
      required: true
    },
    traClassName: {
      type: String
    },
    globalPageStyle: undefined,
    tabList: Array,
    tabStackMap: Object
  },
  data: function data() {
    return {
      tabBehavior: '_inherit',
      tabBehaviorDistance: 0
    };
  },
  watch: {
    'currTabPage.tabIndex': function currTabPageTabIndex(newVal, oldVal) {
      var distance = newVal - oldVal;
      var type = distance > 0 ? 'increase' : 'reduce';
      this.tabBehaviorDistance = distance;
      this.tabBehavior = type;
    },
    isActive: function isActive() {
      this.tabBehavior = '_inherit'; // if(newVal){
      //   this.tabBehavior = 'enter';
      // } else {
      //   this.tabBehavior = 'leave';
      // }
    }
  },
  created: function created() {}
});
;// CONCATENATED MODULE: ./cmpt/tab-bar-controller.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_tab_bar_controllervue_type_script_lang_js_ = (tab_bar_controllervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./cmpt/tab-bar-controller.vue





/* normalize component */
;
var tab_bar_controller_component = normalizeComponent(
  cmpt_tab_bar_controllervue_type_script_lang_js_,
  tab_bar_controllervue_type_template_id_0f688486_render,
  tab_bar_controllervue_type_template_id_0f688486_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab_bar_controller = (tab_bar_controller_component.exports);
;// CONCATENATED MODULE: ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/navigation-controller.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var navigation_controllervue_type_script_lang_js_ = ({
  components: {
    Page: page,
    TabCtrler: tab_bar_controller
  },
  name: 'HistoryNavigationController',
  props: {
    entryPagePath: {
      type: String
    }
  },
  data: function data() {
    var _h = this.$navigator._h;
    return {
      isErr: false,
      isFirstLoad: true,
      stackMap: _h.stackMap,
      behavior: _h.behavior,
      currentPage: _h.currentPage,
      globalPageStyle: this.$navigator.GLOBAL_CONFIG.pageStyle,
      transition: _h._tra,
      tabStackMap: _h.tabStackMap,
      tabList: _h.tabList
    };
  },
  methods: {
    _uniteDestroy: function _uniteDestroy() {
      this.$navigator._h.destroy();
    }
  },
  created: function created() {
    var _this = this;

    var _h = this.$navigator._h;

    if (!_h.checkCompatibility()) {
      this.isErr = true;
      return;
    }

    _h._load(this.entryPagePath);

    this.$nextTick(function () {
      _this.isFirstLoad = false;
    });
  },
  destroyed: function destroyed() {
    this._uniteDestroy();
  },
  unmounted: function unmounted() {
    this._uniteDestroy();
  }
});
;// CONCATENATED MODULE: ./cmpt/navigation-controller.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_navigation_controllervue_type_script_lang_js_ = (navigation_controllervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./cmpt/navigation-controller.vue





/* normalize component */
;
var navigation_controller_component = normalizeComponent(
  cmpt_navigation_controllervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var navigation_controller = (navigation_controller_component.exports);
;// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/default-not-found.vue?vue&type=template&id=03bedd28&
var default_not_foundvue_type_template_id_03bedd28_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding-top":"8%","text-align":"center"}},[_c('h1',[_vm._v("History Navigation Vue")]),_vm._v(" "),_c('h2',[_vm._v("Page Not Found")]),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.$page.stateKey > 1)?_c('navigator',{staticStyle:{"text-decoration":"underline"},attrs:{"type":"back"}},[_vm._v("Back")]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('navigator',{staticStyle:{"text-decoration":"underline"},attrs:{"type":"relaunch","url":_vm.homePagePath}},[_vm._v("Take me home")])],1)}
var default_not_foundvue_type_template_id_03bedd28_staticRenderFns = []


;// CONCATENATED MODULE: ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/default-not-found.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var default_not_foundvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      homePagePath: this.$navigator.GLOBAL_CONFIG.homePagePath
    };
  }
});
;// CONCATENATED MODULE: ./cmpt/default-not-found.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_default_not_foundvue_type_script_lang_js_ = (default_not_foundvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./cmpt/default-not-found.vue





/* normalize component */
;
var default_not_found_component = normalizeComponent(
  cmpt_default_not_foundvue_type_script_lang_js_,
  default_not_foundvue_type_template_id_03bedd28_render,
  default_not_foundvue_type_template_id_03bedd28_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var default_not_found = (default_not_found_component.exports);
;// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/navigator.vue?vue&type=template&id=55866d54&
var navigatorvue_type_template_id_55866d54_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:{'h-nav-active': _vm.isActive, 'h-nav-disabled': _vm.disabled},attrs:{"href":_vm.href}},[_vm._t("default")],2)}
var navigatorvue_type_template_id_55866d54_staticRenderFns = []


;// CONCATENATED MODULE: ../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./cmpt/navigator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
var allowedMethodMap = Object.assign(Object.create(null), {
  push: true,
  replace: true,
  relaunch: true,
  switchTab: true
});
/* harmony default export */ var navigatorvue_type_script_lang_js_ = ({
  name: "HistoryNavigator",
  props: {
    url: {
      type: String
    },
    type: {
      type: String,
      default: 'push'
    },
    steps: {
      type: Number,
      default: 1
    },
    transition: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    event: {
      type: String
    }
  },
  computed: {
    href: function href() {
      return this.url ? this.$navigator.URL.toLocationUrl(this.url) : undefined;
    }
  },
  methods: {
    handleEvent: function handleEvent(e) {
      e.preventDefault();

      if (this.isActive || this.disabled) {
        return;
      }

      switch (this.type) {
        case 'back':
          this.$navigator.back(this.steps, this.transition);
          break;

        default:
          if (allowedMethodMap[this.type]) {
            this.$navigator[this.type]({
              url: this.url,
              transition: this.transition
            });
          } else {
            console.error('history-navigation-vue navigator not support type: ' + this.type);
          }

      }
    }
  },
  mounted: function mounted() {
    var eventName = this.event || this.$navigator.GLOBAL_CONFIG.navigatorTriggerEvent;
    this.$el.addEventListener(eventName, this.handleEvent);
  }
});
;// CONCATENATED MODULE: ./cmpt/navigator.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_navigatorvue_type_script_lang_js_ = (navigatorvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./cmpt/navigator.vue





/* normalize component */
;
var navigator_component = normalizeComponent(
  cmpt_navigatorvue_type_script_lang_js_,
  navigatorvue_type_template_id_55866d54_render,
  navigatorvue_type_template_id_55866d54_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cmpt_navigator = (navigator_component.exports);
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./navigator/native.js
var nativeWindow, nativeHistory, nativeLocation; // , nativeRAF

if (typeof window !== 'undefined') {
  nativeWindow = window;
  nativeHistory = window.history;
  nativeLocation = window.location; // nativeRAF = window.requestAnimationFrame || setTimeout;
} // if(typeof document !== 'undefined'){
//   nativeDocument = document;
// }
//  else {
//   // nativeRAF = function(cb){cb()};
//   // nativeRAF = setTimeout;
// }



;// CONCATENATED MODULE: ./navigator/url.js


function URL(_ref) {
  var _ref$isHashMode = _ref.isHashMode,
      isHashMode = _ref$isHashMode === void 0 ? true : _ref$isHashMode,
      _ref$base = _ref.base,
      base = _ref$base === void 0 ? '' : _ref$base;
  this.isHashMode = isHashMode;
  this._location = nativeLocation;

  if (isHashMode) {
    this.hashBase = this._location.pathname + this._location.search + '#';
  } else {
    this.base = base;
  }
}

URL.prototype.getHashUrlByLocation = function () {
  var url = this._location.hash;

  if (url.length > 0) {
    url = url.substr(1);
  }

  return url;
};

URL.prototype.getUrlByLocation = function () {
  if (this.isHashMode) {
    return this.getHashUrlByLocation();
  }

  var pathname = this._location.pathname;
  var i = pathname.indexOf(this.base);

  if (i === 0) {
    pathname = pathname.substr(this.base.length);
  }

  return pathname + this._location.search;
};

URL.prototype.getRouteByLocation = function () {
  return urlParse(this.getUrlByLocation());
};

URL.prototype.toLocationUrl = function (fullPath) {
  return this.isHashMode ? this.hashBase + fullPath : this.base + fullPath;
};

function urlParse(url) {
  var i = url.indexOf('?');
  var path, qsString;

  if (i !== -1) {
    path = url.substr(0, i);
    qsString = url.substr(i + 1);
  } else {
    path = url;
    qsString = '';
  }

  return {
    path: path,
    query: queryParse(qsString)
  };
}
/* path, fullPath, trimedPath, query */

function fullUrlParse(userUrl) {
  var route, fullPath, trimedPath;

  if (typeof userUrl === 'string') {
    route = urlParse(userUrl);
    fullPath = userUrl;
  } else {
    route = trimRoute(userUrl);
    fullPath = _urlStringify(route);
  }

  trimedPath = trimSlash(route.path);
  return Object.assign({
    fullPath: fullPath,
    trimedPath: trimedPath
  }, route);
}

function trimRoute(route) {
  if (route.path.indexOf('?') === -1) {
    return route;
  }

  var _route = urlParse(route.path);

  Object.assign(_route.query, route.query);
  return _route;
}

function urlStringify(route) {
  return _urlStringify(trimRoute(route));
}

function _urlStringify(route) {
  var queryStr = queryStringify(route.query);

  if (queryStr) {
    queryStr = '?' + queryStr;
  }

  return route.path + queryStr;
}

function queryParse(qsString) {
  var map = Object.create(null);

  if (!qsString || typeof qsString === 'string' && qsString.length === 0) {
    return map;
  }

  var arr = qsString.split('&');
  var i = 0,
      len = arr.length,
      v;

  for (; i < len; i++) {
    v = arr[i];
    v = v.split('=');
    map[v[0]] = decodeURIComponent(v[1]);
  }

  return map;
}

function queryStringify(obj) {
  if (!obj) {
    return '';
  }

  var arr = [];
  Object.keys(obj).forEach(function (k) {
    arr.push(k + '=' + encodeURIComponent(obj[k]));
  });
  return arr.join('&');
} // function pathJoin(str1, str2){
//   return trimSlash(str1 + '/' + str2);
// }


function trimSlash(pathStr) {
  var arr = pathStr.split('/');
  arr = arr.filter(function (v) {
    return v !== '';
  });
  return arr.join('/');
} // function _joinBase(base, fullPath){
//   if(fullPath[0] === '/'){
//     return base + fullPath;
//   }
//   return base + '/' + fullPath;
// }

/* harmony default export */ var url = (URL);
;// CONCATENATED MODULE: ./navigator/state-key.js


function getCurrentStateKey() {
  var state = nativeHistory.state;

  if (state && typeof state[KEY_NAME] === 'number') {
    return state[KEY_NAME];
  }

  return 1;
}
function genStateKey() {
  return getCurrentStateKey() + 1;
}

var _preKey = getCurrentStateKey();

function getPreStateKey() {
  return _preKey;
}
function setPreStateKey(key) {
  _preKey = key;
} // export function isUserPopPush () { // User manually enters the address bar
//   const state = nativeHistory.state;
//   let hasKey; 
//   if(!state){
//     hasKey = false;
//   } else {
//     hasKey = typeof state[KEY_NAME] === 'number';
//   }
//   return _preKey > 0 && !hasKey;
// }
;// CONCATENATED MODULE: ./util.js
function noop() {}
function def(dest, src, key, defValue) {
  var v = src[key];
  dest[key] = v === undefined ? defValue : v;
} // export function defNew(defObj, src){
//   const dest = Object.create(null);
//   const keys = Object.keys(defObj);
//   const len = keys.length;
//   let i = 0, k;
//   for(; i < len; i++){
//     k = keys[i];
//     def(dest, src, k, defObj[k]);
//   }
//   return dest;
// }

function throwErr(msg) {
  throw new Error("history-navigation-vue: ".concat(msg));
}
function getVueV(_Vue) {
  var v = _Vue.version;
  v = v.substr(0, v.indexOf('.'));
  return Number(v);
}
;// CONCATENATED MODULE: ./navigator/libs/modal.js


 // import { nativeDocument } from '../native';

/* harmony default export */ var modal = ({
  init: function init() {
    this._modal_crumbs = null;

    this._initModalCrumbs();
  },
  proto: {
    modal: function modal(_ref) {
      var _this$_history$pushSt,
          _this = this;

      var component = _ref.component,
          propsData = _ref.propsData,
          parent = _ref.parent,
          success = _ref.success;
      var isBAEModal = arguments[0] === MODAL_BAE_KEY;

      if (!isBAEModal) {
        this._autoBAE();
      }

      var key = getCurrentStateKey();
      var page = this.stackMap[key];
      var state = this._history.state;
      var modalKey = state[MODAL_KEY_NAME];

      if (!modalKey) {
        var _this$_history$replac;

        modalKey = 0;

        this._history.replaceState((_this$_history$replac = {}, _defineProperty(_this$_history$replac, KEY_NAME, key), _defineProperty(_this$_history$replac, MODAL_KEY_NAME, modalKey), _this$_history$replac), '');
      }

      modalKey = modalKey + 1;

      this._history.pushState((_this$_history$pushSt = {}, _defineProperty(_this$_history$pushSt, KEY_NAME, key), _defineProperty(_this$_history$pushSt, MODAL_KEY_NAME, modalKey), _this$_history$pushSt), '');

      var item = {
        key: modalKey,
        uid: _genModalKey()
      };
      page.modalList.push(item);

      this._setModalCrumbs(key, modalKey);

      if (isBAEModal) {
        item.isBAE = true;
        return;
      }

      var id = 'h_nav_modal_' + item.uid;

      if (component) {
        this.uniteVue.nextTick(function () {
          if (!item._isDestroy) {
            // const Cmpt = this.uniteVue.extend(component);
            // const cmpt = new Cmpt({
            //   el: '#' + id,
            //   parent,
            //   propsData
            // });
            var cmpt = _this.uniteVue.newComponent(component, {
              el: '#' + id,
              parent: parent,
              propsData: propsData
            });

            item._destoryCmpt = function () {
              _this.uniteVue.destroy(cmpt);
            };

            success && success(cmpt);
          }
        });
      }

      return id;
    },
    removeModal: function removeModal() {
      var _this2 = this;

      var state = this._history.state;

      if (!state) {
        return;
      }

      var currKey = getCurrentStateKey();
      var modalKey = state[MODAL_KEY_NAME];

      if (typeof modalKey === 'number') {
        var page = this.stackMap[currKey];
        var arr;

        if (page) {
          arr = page.modalList.splice(modalKey);
          arr.forEach(function (item) {
            item._isDestroy = true;

            if (item._destoryCmpt) {
              item._destoryCmpt();
            }
          });
        }

        if (modalKey === 0) {
          if (this._isNeedBAE()) {
            if (arr && arr.length > 1) {
              this._autoBAE();
            } else {
              this.BAE.onFirstTrigger();
              setTimeout(function () {
                _this2._autoBAE();
              }, this.BAE.maxInterval);
            }
          }

          this.removeModalKeyWhenBackPage();
        }

        this._setModalCrumbs(currKey, modalKey);
      }
    },
    _autoRemoveModal: function _autoRemoveModal() {
      var state = this._history.state;

      if (!state) {
        return;
      }

      var key = getCurrentStateKey();
      var page = this.stackMap[key];
      var modalKey = state[MODAL_KEY_NAME] || 0;

      if (page && page.modalList.length > modalKey) {
        this.removeModal();
      }
    },
    getCurrModaKey: function getCurrModaKey() {
      var state = this._history.state;

      if (state && typeof state[MODAL_KEY_NAME] === 'number') {
        return state[MODAL_KEY_NAME];
      }

      return 0;
    },
    removeModalKeyWhenBackPage: function removeModalKeyWhenBackPage() {
      var newState = Object.assign({}, this._history.state);
      delete newState[MODAL_KEY_NAME];

      this._history.replaceState(newState, '');
    },
    _initModalCrumbs: function _initModalCrumbs() {
      var h = this._history;
      var state = Object.assign({}, h.state);
      var v = state[MODAL_CRUMBS_KEY_NAME];

      if (v) {
        delete state[MODAL_CRUMBS_KEY_NAME];

        this._history.replaceState(state, '');

        this._modal_crumbs = _parse(v);
      } else {
        var modalKey = this.getCurrModaKey();

        if (modalKey) {
          this._modal_crumbs = [[getCurrentStateKey(), modalKey]];
        } else {
          this._modal_crumbs = [];
        }
      }
    },
    _setModalCrumbs: function _setModalCrumbs(stateKey, modalCount) {
      var arr = this._modal_crumbs;
      var lastI = arr.length - 1;
      var v = arr[lastI];

      if (lastI === -1 || v[0] < stateKey) {
        arr.push([stateKey, modalCount]);
        return;
      }

      for (; lastI > -1; lastI--) {
        v = arr[lastI];

        if (v[0] < stateKey) {
          break;
        }
      }

      arr.splice(lastI, arr.length, [stateKey, modalCount]);

      if (!modalCount) {
        arr.pop();
      }
    },
    _saveModalCrumbs: function _saveModalCrumbs() {
      if (this._modal_crumbs.length) {
        var h = this._history;
        var state = h.state || {};
        state[MODAL_CRUMBS_KEY_NAME] = _format(this._modal_crumbs);

        this._history.replaceState(state, '');
      }
    }
  }
});

function _parse(str) {
  // STATE_KEY:MODAL_COUNT;...
  var arr = str.split(';');
  var result = [];
  var i = 0,
      v;
  var MAX = arr.length;

  for (; i < MAX; i++) {
    v = arr[i].split(':');
    result.push([Number(v[0]), Number(v[1])]);
  }

  return result;
}

function _format(arr) {
  return arr.map(function (v) {
    return v.join(':');
  }).join(';');
}

var _modalKey = 0;

function _genModalKey() {
  _modalKey = _modalKey + 1;
  return _modalKey;
}
;// CONCATENATED MODULE: ./navigator/libs/bae.js


/* harmony default export */ var bae = ({
  proto: {
    _isBAEPage: function _isBAEPage() {
      if (this.BAE) {
        var key = getCurrentStateKey();
        var page = this.stackMap[key];

        if (key === 1 && page && (page.isHome || page.isTab)) {
          return true;
        }
      }

      return false;
    },
    _isBAEPageByTK: function _isBAEPageByTK(tk) {
      if (this.BAE) {
        var key = getCurrentStateKey();
        var page = this.pageMap[tk];

        if (key === 1 && page && (page.isHome || page.isTab)) {
          return true;
        }
      }

      return false;
    },
    _isNeedBAE: function _isNeedBAE() {
      if (this._isBAEPage()) {
        var state = this._history.state;

        if (state && !state[MODAL_KEY_NAME]) {
          return true;
        }
      }

      return false;
    },
    _autoBAE: function _autoBAE() {
      var isN = this._isNeedBAE();

      if (isN) {
        this.modal(MODAL_BAE_KEY);
      }
    }
  }
});
;// CONCATENATED MODULE: ./navigator/libs/back.js

/* harmony default export */ var back = ({
  init: function init() {
    this._whenPopTra = null;
    this._whenPopInfo = null;
    this._whenBackPopInfo = null;
  },
  proto: {
    getModalStepsTotal: function getModalStepsTotal() {
      var arr = this._modal_crumbs;
      var count = 0,
          i = 0;
      var max = arr.length;

      for (; i < max; i++) {
        count = count + arr[i][1];
      }

      return count;
    },
    _backGetTo1Count: function _backGetTo1Count() {
      var key = getCurrentStateKey();
      var modalCount = this.getModalStepsTotal();
      var total = key + modalCount;
      return total - 1;
    },
    back: function back(_steps, tra) {
      // const key = getCurrentStateKey();
      // const modalCount = this.getModalStepsTotal();
      // console.log('modalCount', modalCount, key)
      // const total = key + modalCount;
      var steps = _steps || 1;

      if (steps < 1) {
        return;
      } // if(typeof steps === 'number' && steps > 0){
      //   if(total - steps < 1){
      //     steps = total - 1;
      //   }
      // }
      // console.log('[back] steps', steps);


      this._whenPopTra = tra;

      if (steps) {
        this._history.go(-steps);
      } // else {
      //   this._history.back();
      // }

    },
    backToPage: function backToPage(_steps, tra) {
      var arr = this._modal_crumbs;

      if (!arr.length) {
        this.back(_steps, tra);
        return;
      }

      var key = getCurrentStateKey();
      var distKey = key - _steps;
      var i = 0,
          v,
          count = 0;
      var max = arr.length;

      for (; i < max; i++) {
        v = arr[i];

        if (v[0] > distKey) {
          count = count + v[1];
        } else {
          break;
        }
      }

      this.back(_steps + count, tra);
    },
    _backAndApply: function _backAndApply(steps, method, args, tra) {
      if (steps < 1) {
        return;
      }

      this._whenBackPopInfo = {
        method: method,
        args: args
      };
      this.back(steps, tra);
    },
    _backToStartAndReplace: function _backToStartAndReplace(fullParse, behavior, tra) {
      var total = this._backGetTo1Count();

      if (total > 0) {
        this._backAndApply(total, '_replace', [fullParse, behavior], tra);
      } else {
        this._setTra(tra);

        this._replace(fullParse, behavior);
      }
    }
  }
});
;// CONCATENATED MODULE: ./navigator/history.js









var BACK_TRA_PROP_KEY = 'h_nav_b_tra';
var isCreated = false;

function History(opt) {
  if (isCreated) {
    throwErr('Only one instance can be generated.');
  }

  isCreated = true;
  this._global = opt.global;
  this._window = nativeWindow;
  this._history = nativeHistory;
  this._location = nativeLocation;
  this._isOmitPopEvent = false;
  this.BAE = opt.BAE; // this._exitImmediately = true;
  // this.onExit = opt.onExit; // Chrome must touch the document once to work.

  this._tra = {
    className: this._global.transition
  };
  this.uniteVue = opt.uniteVue; // if(!this._history || !this._history.pushState){
  //   throwErr('required history.pushState API');
  // }

  this.pageMap = opt.pageMap;
  this.notFoundPage = opt.notFoundPage;

  if (opt.tabBar) {
    this.tabMap = opt.tabBar.map;
    this.tabList = opt.tabBar.list;
    this.tabStackMap = Object.create(null);
  }

  this.stackMap = Object.create(null);
  this._stackItemId = 1;
  this.tabCtrlerStackId = 1; // this.isPageDestroyWhenBack = true;

  this.onRouted = opt.onRouted || noop;
  this.URL = new url({
    isHashMode: opt.urlIsHashMode,
    base: opt.urlBase
  });
  this.behavior = {
    type: '',
    distance: 0,
    isPop: false
  };
  this.currentPage = {
    path: null,
    title: null,
    className: undefined,
    isHome: false,
    isTab: false,
    tabIndex: null,
    cmptKey: null,
    stackId: null,
    stateKey: null,
    modalList: [],
    isClean: false,
    route: {}
  };
  back.init.apply(this);
  modal.init.apply(this); // this.fitVue$3(); // FIT_VUE_3_SWITCH
}

History.prototype.checkCompatibility = function () {
  if (this._history && this._history.pushState) {
    return true;
  }

  return false;
};

History.prototype._bind = function () {
  var _this = this;

  this._popstateHandle = function () {
    _this.handlePop();
  };

  this._window.addEventListener('popstate', this._popstateHandle);

  this._handleWinUnload = function () {
    _this.handleWinUnload();
  };

  this._window.addEventListener('beforeunload', this._handleWinUnload);
};

History.prototype._onRouted = function () {
  var _this2 = this;

  var curr = this.currentPage;

  this._autoBAE(curr.route.trimedPath);

  if (this.behavior.type === 'loaded') {
    setTimeout(function () {
      _this2.onRouted({
        title: curr.title,
        routeFullPath: curr.route.fullPath
      });
    });
  } else {
    this.onRouted({
      title: curr.title,
      routeFullPath: curr.route.fullPath
    });
  }
};

History.prototype._genStackItemId = function () {
  this._stackItemId = this._stackItemId + 1;
  return 'stack_' + this._stackItemId;
};

History.prototype._isTabRoute = function (trimedPath) {
  if (!this.tabMap) {
    return false;
  }

  if (this.tabMap[trimedPath]) {
    return true;
  }

  return false;
};

History.prototype._forMatInputArg = function (opt) {
  var fullParse, tra;

  if (typeof opt === 'string') {
    fullParse = fullUrlParse(opt);
  } else {
    fullParse = fullUrlParse({
      path: opt.url,
      query: opt.query
    });
    tra = opt.transition;
  }

  return {
    fullParse: fullParse,
    tra: tra
  };
};

History.prototype._load = function (userUrl) {
  this._bind();

  var _userUrl = userUrl === undefined ? this.URL.getUrlByLocation() : userUrl;

  var currRoute = fullUrlParse(_userUrl);
  var key = getCurrentStateKey();

  if (key !== 1) {
    if (this._isTabRoute(currRoute.trimedPath)) {
      this._backToStartAndReplace(currRoute, 'loaded');

      return;
    }
  }

  this._replaceCurrPage(currRoute, 'loaded');
};

History.prototype._replaceCurrPage = function () {
  var modalCount = this.getCurrModaKey();

  if (modalCount) {
    this._backAndApply(modalCount, '_replace', arguments);

    return;
  }

  this._replace.apply(this, arguments);
};

History.prototype._setTra = function (className) {
  this._tra.className = className || this._global.transition;
};

History.prototype.push = function (userUrl) {
  var _this$_forMatInputArg = this._forMatInputArg(userUrl),
      fullParse = _this$_forMatInputArg.fullParse,
      tra = _this$_forMatInputArg.tra;

  if (this._isTabRoute(fullParse.trimedPath)) {
    console.error('Cannot push the tab url, please use switchTab');
    return;
  }

  this._setTra(tra);

  this._push(fullParse, tra);
};

History.prototype.replace = function (userUrl) {
  var _this$_forMatInputArg2 = this._forMatInputArg(userUrl),
      fullParse = _this$_forMatInputArg2.fullParse,
      tra = _this$_forMatInputArg2.tra;

  if (this._isTabRoute(fullParse.trimedPath)) {
    console.error('Cannot replace the tab url, please use switchTab');
    return;
  }

  this._setTra(tra);

  this._replaceCurrPage(fullParse);
};

History.prototype.switchTab = function (userUrl) {
  // if(userUrl.indexOf('?') !== -1){
  //   console.error('switchTab not support queryString');
  // }
  var _this$_forMatInputArg3 = this._forMatInputArg(userUrl),
      fullParse = _this$_forMatInputArg3.fullParse,
      tra = _this$_forMatInputArg3.tra;

  if (!this._isTabRoute(fullParse.trimedPath)) {
    console.error(fullParse, ' is not tab url');
    return;
  }

  this._backToStartAndReplace(fullParse, 'switchtab', tra);
};

History.prototype.relaunch = function (userUrl) {
  var _this$_forMatInputArg4 = this._forMatInputArg(userUrl),
      fullParse = _this$_forMatInputArg4.fullParse,
      tra = _this$_forMatInputArg4.tra;

  this.tabCtrlerStackId = this.tabCtrlerStackId + 1;

  this._backToStartAndReplace(fullParse, 'relaunch', tra);
};

History.prototype._setMapItem = function (key, route) {
  var page = this.pageMap[route.trimedPath] || this.notFoundPage;
  var _page = {
    path: page.path,
    title: page.title,
    tabIndex: page.tabIndex,
    route: route,
    cmptKey: page.cmptKey,
    isHome: page.isHome,
    isTab: page.isTab,
    stateKey: key,
    className: page.className,
    style: page.style,
    modalList: [],
    isClean: false // when curr page leaveing, It doesn't work.

  };

  if (_page.isTab) {
    _page.stackId = 'tab_stack_' + this.tabCtrlerStackId;
    this.uniteVue.set(this.tabStackMap, page.tabIndex, _page);
  } else {
    _page.stackId = this._genStackItemId();
  } // Object.assign(this.currentPage, _page);


  this.uniteVue.set(this.stackMap, key, _page);
  Object.assign(this.currentPage, _page);
};

History.prototype._getBackTra = function () {
  var H = this._history;

  if (H.state) {
    return H.state[BACK_TRA_PROP_KEY];
  }
};

History.prototype._push = function (fullParse, tra) {
  this._autoBAE();
  /* 
    from [vue-router]
    try...catch the pushState call to get around Safari
    DOM Exception 18 where it limits to 100 pushState calls
  */
  // this._clearAf2ter();


  var oldTra = this._getBackTra();

  if (tra !== oldTra) {
    var state = Object.assign({}, this._history.state);

    if (tra) {
      state[BACK_TRA_PROP_KEY] = tra;
    } else {
      delete state[BACK_TRA_PROP_KEY];
    }

    this._history.replaceState(state, '');
  }

  var key = genStateKey();

  this._history.pushState(_defineProperty({}, KEY_NAME, key), '', this.URL.toLocationUrl(fullParse.fullPath));

  setPreStateKey(key);
  var newBehavior = {
    type: 'push',
    distance: 1,
    isPop: false
  };
  Object.assign(this.behavior, newBehavior);

  this._setMapItem(key, fullParse);

  this._onRouted();
}; // History.prototype._replaceCurrPage = function(fullParse, behavior, _dista2nce){
//   const isBAE = this._isBAEPage();
//   const isDistBAE = this._isBAEPageByTK(fullUrlParse);
//   let step = this.getCurrModaKey();
//   if(isBAE && !isDistBAE){
//     step = step + 1;
//   }
//   if(step){
//     this._backAndApply(step, '_repl2ace', arguments);
//     return;
//   }
//   this._repl2ace.apply(this, arguments);
// }


History.prototype._replace = function (fullParse, behavior) {
  var _this3 = this;

  var preKey = getPreStateKey();
  var key = getCurrentStateKey();
  var distance = key - preKey;
  var newBehavior = {
    type: behavior || 'replace',
    distance: distance,
    isPop: false
  };
  Object.assign(this.behavior, newBehavior);

  if (this.behavior.type !== 'switchtab' || distance) {
    // unactive currentPage
    this.currentPage.stackId = 'unactive_' + this.currentPage.stackId;
  }

  var toUrl = this.URL.toLocationUrl(fullParse.fullPath);
  var state = this._history.state;

  if (!state || !state[KEY_NAME]) {
    state = Object.assign({}, history.state);
    state[KEY_NAME] = key;
  }

  this._history.replaceState(state, '', toUrl);

  this.uniteVue.nextTick(function () {
    if (newBehavior.type === 'relaunch') {
      _this3._setAllCleaned();

      var oldKey = key - distance;
      _this3.stackMap[oldKey].isClean = false;

      _this3.uniteVue.nextTick(function () {
        _this3._clearAll();

        _this3._setMapItem(key, fullParse);

        _this3._onRouted();
      });
    } else {
      _this3._clearAfter();

      _this3._setMapItem(key, fullParse);

      _this3._onRouted();
    }
  });
  setPreStateKey(key);
};

History.prototype._setMapCleaned = function (map) {
  for (var i in map) {
    map[i].isClean = true;
  }
};

History.prototype._setAllCleaned = function () {
  if (this.tabStackMap) {
    this._setMapCleaned(this.tabStackMap);
  }

  this._setMapCleaned(this.stackMap);
}; // History.prototype._backToStartAndRe2place = function(fullParse, behavior, tra){
//   const key = getCurrentStateKey();
//   if(key > 1){
//     this._whenPopInfo = {
//       fullParse,
//       behavior
//     };
//     this.back(key - 1, tra);
//   } else {
//     this._setTra(tra);
//     this._rep2lace(fullParse, behavior);
//   }
// }


History.prototype._clearAfter = function () {
  var _this4 = this;

  var key = getCurrentStateKey();
  var map = this.stackMap;
  var i, v;
  var arr = [];

  for (i in map) {
    v = map[i];

    if (v.stateKey > key) {
      v.isClean = true;
      arr.push(v);
    }
  }

  var len = arr.length;

  if (len) {
    var last = arr.pop();
    last.isClean = false;
    this.uniteVue.delete(map, last.stateKey);
    len = arr.length;

    if (len) {
      this.uniteVue.nextTick(function () {
        i = 0;

        for (; i < len; i++) {
          v = arr[i];

          _this4.uniteVue.delete(map, v.stateKey);
        }
      });
    }
  }
};

History.prototype._clearMap = function (map) {
  var i;

  for (i in map) {
    this.uniteVue.delete(map, i);
  }
};

History.prototype._clearAll = function () {
  if (this.tabStackMap) {
    this._clearMap(this.tabStackMap);
  }

  this._clearMap(this.stackMap);
};

History.prototype.handlePop = function () {
  var _this5 = this;

  if (this._isOmitPopEvent) {
    this._isOmitPopEvent = false;
    setPreStateKey(getCurrentStateKey());
    return;
  }

  var _backInfo = this._whenBackPopInfo;

  if (_backInfo) {
    this[_backInfo.method].apply(this, _backInfo.args);

    this._whenBackPopInfo = null;
    return;
  }

  var preKey = getPreStateKey();
  var hState = this._history.state;

  if (!hState) {
    // The user manually modifies the browser address bar
    var _popPushKey = preKey + 1;

    this._history.replaceState(_defineProperty({}, KEY_NAME, _popPushKey), '');

    setPreStateKey(_popPushKey);

    this._setTra('');

    this._replace(fullUrlParse(this.URL.getUrlByLocation()), 'popPush');

    return;
  }

  var currKey = getCurrentStateKey();

  if (preKey === currKey) {
    this.removeModal();
    return;
  }

  setPreStateKey(currKey);
  var compare = currKey - preKey;
  var behavior = compare < 0 ? 'back' : 'forward';
  var isBack = behavior === 'back';

  if (!isBack) {
    this._isOmitPopEvent = true;
    this.back(compare);
    return;
  }

  var backTra = this._whenPopTra;

  if (!backTra && isBack && compare === -1) {
    backTra = this._getBackTra(); // console.log('--------------- backTra ---------------', backTra);
  }

  this._setTra(backTra);

  this._whenPopTra = null; // const _info = this._whenPopInfo;
  // if(_info !== null){
  //   this._repla2ce(_info.fullParse, _info.behavior, compare);
  //   this._whenPopInfo = null;
  //   return;
  // }
  // this.isPageDestroyWhenBack && 

  var page = this.stackMap[currKey];
  var newBehavior = {
    type: behavior,
    distance: compare,
    isPop: true
  };
  Object.assign(this.behavior, newBehavior);

  if (page) {
    Object.assign(this.currentPage, page);
  } else {
    this._setMapItem(currKey, fullUrlParse(this.URL.getUrlByLocation()));
  }

  if (isBack) {
    this._autoRemoveModal();

    this.uniteVue.nextTick(function () {
      _this5._clearAfter();

      _this5._onRouted();
    });
  } else {
    this._onRouted();
  }
};

History.prototype.destroy = function () {
  if (isCreated) {
    if (this._popstateHandle) {
      this._window.removeEventListener('popstate', this._popstateHandle);
    }

    if (this._handleWinUnload) {
      this._window.removeEventListener('_handleWinUnload', this._handleWinUnload);
    }

    isCreated = false;
  }
};

History.prototype.handleWinUnload = function () {
  this._saveModalCrumbs();
};

Object.assign(History.prototype, modal.proto);
Object.assign(History.prototype, bae.proto);
Object.assign(History.prototype, back.proto); // History.prototype.fitVue$3 = function(){ // FIT_VUE_3_SWITCH
//   if(this.uniteVue.is3){
//     let v;
//     ['stackMap', 'behavior', 'currentPage', '_tra', 'tabList', 'tabStackMap'].forEach(k => {
//       v = this[k];
//       if(v){
//         this[k] = vue$3Reactive(v)
//       }
//     })
//   }
// }

/* harmony default export */ var navigator_history = (History); // window.addEventListener('beforeunload', function(event){
//   console.log('beforeunload')
//   event.preventDefault();
//   event.returnValue = "Are you sure you want to exit?"
//   return 'beforeunload';
// })
;// CONCATENATED MODULE: ./navigator/navigator.js

/* harmony default export */ function navigator_navigator(opt) {
  var h = new navigator_history(opt);
  var obj = {
    _h: h,
    URL: h.URL,
    // vueIs3: h.uniteVue.is3, FIT_VUE_3_SWITCH
    GLOBAL_CONFIG: h._global
  };
  ['push', 'back', 'backToPage', 'replace', 'relaunch', 'switchTab', 'modal'].forEach(function (k) {
    _bindToOther(obj, k, h);
  });
  return obj;
}

function _bindToOther(obj, attr, h) {
  obj[attr] = function () {
    h[attr].apply(h, arguments);
  };
}
;// CONCATENATED MODULE: ./mixin/show-hide-mixin.js


/* harmony default export */ function show_hide_mixin(isV3) {
  var key = isV3 ? 'unmounted' : 'destroyed';
  return _defineProperty({
    inject: {
      $page: {
        default: null
      }
    },
    created: function created() {
      if ((this.$options.onShow || this.$options.onHide) && this.$page) {
        _handleOnShow(this);
      }
    }
  }, key, function () {
    if (this.$options.__tmp_h_nav_show_hide_has) {
      _handleOnHide(this);
    }
  });
}

function _handleOnShow(self) {
  var $opts = self.$options;
  $opts.__tmp_h_nav_show_hide_has = true;
  var handle;

  if ($opts.onShow) {
    handle = $opts.__tmp_h_nav_page_show_hanlde = function () {
      $opts.onShow.call(self);
    };

    self.$page.$on(PAGE_E_SHOW_NAME, handle);
  }

  if ($opts.onHide) {
    handle = $opts.__tmp_h_nav_page_hide_hanlde = function () {
      $opts.onHide.call(self);
    };

    self.$page.$on(PAGE_E_HIDE_NAME, handle);
  }
}

function _handleOnHide(self) {
  var $opts = self.$options;
  var handle = $opts.__tmp_h_nav_page_show_hanlde;

  if (handle) {
    self.$page.$off(PAGE_E_SHOW_NAME, handle);
  }

  handle = $opts.__tmp_h_nav_page_hide_hanlde;

  if (handle) {
    self.$page.$off(PAGE_E_HIDE_NAME, handle);
  }
}
;// CONCATENATED MODULE: ./fit_vue.js
function uniteVue2(_Vue) {
  return {
    proto: _Vue.prototype,
    nextTick: _Vue.nextTick,
    newComponent: function newComponent(Cmpt, newOpts) {
      var CmptExtend = _Vue.extend(Cmpt);

      return new CmptExtend(newOpts);
    },
    destroy: function destroy(cmpt) {
      cmpt.$destroy();
    },
    set: _Vue.set,
    delete: _Vue.delete
  };
}
/* FIT_VUE_3_SWITCH
let _Vue3; // createApp, h, nextTick;
export function fitVue3(_Vue){
  _Vue3 = _Vue;
}

export function uniteVue3(app){
  return {
    proto: app.config.globalProperties,
    nextTick: _Vue3.nextTick,
    newComponent: (Cmpt, newOpts) => {
      let app = _Vue3.createApp(Cmpt, newOpts.propsData);
      app.mount(newOpts.el);
      return app;
    },
    destroy: function(cmpt){
      cmpt.unmount();
    },
    set: function(obj, k, v){
      obj[k] = v;
    },
    delete: function(obj, k){
      delete obj[k];
    }
  }
}

export function vue3Reactive(obj){ // vue3 API
  return _Vue3.reactive(obj);
}

export function vue3FitEmitOnOff(self){
  const eMap =  self.$options._tmp_e_map =  Object.create(null);
  self.$on = function(key, handle){
    let list = eMap[key];
    if(!list){
      list = eMap[key] = [];
    }
    list.push(handle);
  }

  self.$off = function(key, handle){
    const list = eMap[key];
    if(list){
      const i = list.indexOf(handle);
      if(i !== -1){
        list.splice(i, 1);
      }
    }
    if(!list.length){
      delete eMap[key];
    }
  }

  self._uniteEmit = function(key) {
    const list = eMap[key];
    if(list) {
      const len = list.length;
      let i = 0;
      for(; i < len; i++){
        list[i]();
      }
    }
  }
}

*/
;// CONCATENATED MODULE: ./install.js









var defNotFoundPage = {
  title: 'Not Found',
  component: default_not_found
};
function install(_Vue, config) {
  var vueV = getVueV(_Vue);
  var uniteVue;

  if (vueV === 2) {
    uniteVue = uniteVue2(_Vue); // } else if(vueV === 3){ // FIT_VUE_3_SWITCH
    //   uniteVue = uniteVue$3(_Vue);
    //   uniteVue.is3 = true;
  } else {
    throwErr('Unsupported version of Vue ' + vueV);
  }

  if (!Array.isArray(config.pages)) {
    throwErr('config.pages is not Array.');
  }

  var pageMap = _formatPages(config.pages);

  var tabBar;

  if (config.tabBar) {
    tabBar = _formatTabBar(config.tabBar, pageMap);
  }

  var notFoundPage = config.notFoundPage || defNotFoundPage;

  _Vue.component(notFoundPageKey, notFoundPage.component);

  notFoundPage = {
    path: null,
    title: notFoundPage.title,
    cmptKey: notFoundPageKey,
    isTab: false,
    trimedPath: null
  };
  var i, page;

  for (i in pageMap) {
    page = pageMap[i];

    _Vue.component(page.cmptKey, page.component);
  }

  _Vue.component('NavigationController', navigation_controller);

  _Vue.component('Navigator', cmpt_navigator);

  var globalOption = Object.create(null);
  def(globalOption, config, 'navigatorTriggerEvent', DEF_NAVIGATOR_TRIGGER_EVENT);
  def(globalOption, config, 'transition', DEF_TRANSITION);
  def(globalOption, config, 'pageStyle', DEF_PAGE_STYLE);
  def(globalOption, config, 'homePagePath', config.pages[0].path);
  var homePage = pageMap[trimSlash(globalOption.homePagePath)];

  if (!homePage) {
    throwErr('Home page not found');
  }

  homePage.isHome = true;
  var BAE = null;

  if (config.backAgainToExit) {
    BAE = Object.create(null);
    def(BAE, config.backAgainToExit, 'maxInterval', 2000);
    def(BAE, config.backAgainToExit, 'onFirstTrigger', noop);
  }

  var options = {
    global: globalOption,
    BAE: BAE,
    uniteVue: uniteVue,
    pageMap: pageMap,
    cmptPageSuffix: cmptPageSuffix,
    notFoundPage: notFoundPage,
    tabBar: tabBar,
    onRouted: config.onRouted
  };
  def(options, config, 'urlBase', DEF_URL_BASE);
  def(options, config, 'urlIsHashMode', DEF_URL_IS_HASH_MODE);
  uniteVue.proto.$navigator = navigator_navigator(options);

  _Vue.mixin(show_hide_mixin(uniteVue.is3));
}

function _formatPages(pages) {
  var map = Object.create(null);
  var i = 0,
      len = pages.length,
      page,
      tk,
      fpage;

  for (; i < len; i++) {
    page = pages[i];
    tk = trimSlash(page.path);

    if (map[tk]) {
      throwErr("pageMap key: ".concat(tk, " is same as ").concat(page.path));
    }

    fpage = Object.assign({}, page);
    Object.assign(fpage, {
      trimedPath: tk,
      isTab: false,
      isHome: false,
      cmptKey: cmptPageSuffix + i
    });
    map[tk] = fpage;
  }

  return map;
}

function _formatTabBar(tabBar, pageMap) {
  var list = tabBar.list;
  var len = list.length;

  if (len < 2) {
    throwErr("tabBar list length must >= 2");
  }

  var i = 0,
      tk,
      item;
  var map = Object.create(null);
  var newList = [];

  for (; i < len; i++) {
    item = list[i];
    tk = trimSlash(item.pagePath);
    var page = pageMap[tk];

    if (!page || page.path !== item.pagePath) {
      throwErr("tabBar pagePath: ".concat(i, " is not found in pages"));
    }

    if (map[tk]) {
      throwErr("tabBar pagePath: ".concat(tk, " is same as ").concat(i));
    }

    page.isTab = true;
    page.tabIndex = i;
    map[tk] = true;
    newList.push(Object.assign({}, item));
  }

  return {
    map: map,
    list: newList
  };
}
;// CONCATENATED MODULE: ./bundle.js
 // import './css/transition.css';


var bundle_plugin = {
  install: install
}; // export { fitVue$3 } from './fit_vue';

var version = '1.4.1';
/******/ 	return __webpack_exports__;
/******/ })()
;
});