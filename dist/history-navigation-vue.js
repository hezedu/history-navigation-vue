/*!
  * history-navigation-vue v1.0.0
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
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_sass_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_bar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "plugin", function() { return /* binding */ bundle_plugin; });
__webpack_require__.d(__webpack_exports__, "version", function() { return /* binding */ version; });

// EXTERNAL MODULE: ./css/style.scss
var style = __webpack_require__(2);

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./cmpt/navigation-controller.vue?vue&type=template&id=0aa5f836&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"h-nav-ctrler",class:'h-nav-behavior-' + _vm.behavior.type,style:({'--h-nav-distance': _vm.behavior.distance}),attrs:{"tag":"div","enter-class":"","leave-class":"","enter-to-class":"","leave-to-class":"","enter-active-class":"h-nav--page_load","leave-active-class":"h-nav--page_unload"}},_vm._l((_vm.stackMap),function(v){return _c('div',{key:v.stackId,staticClass:"h-nav-page-handle",class:_vm.transition.className,style:(v.isClean ? 'transition: none!important; animation: none!important;' : '')},[(v.isTab)?_c('TabCtrler',{key:v.stackId,style:([{zIndex: v.stateKey}]),attrs:{"traClassName":_vm.transition.className,"currTabPage":v,"isActive":v.stackId === _vm.currentPage.stackId,"isFirstLoad":_vm.isFirstLoad}}):_c('Page',{key:v.stackId,class:v.className,style:([_vm.globalPageStyle, v.style, {zIndex: v.stateKey}]),attrs:{"transitionName":"h-nav-page","v":v,"path":v.path,"title":v.title,"isTab":v.isTab,"modalList":v.modalList,"tabIndex":v.tabIndex,"stateKey":v.stateKey,"route":v.route,"isActive":v.stackId === _vm.currentPage.stackId,"isFirstLoad":_vm.isFirstLoad}},[_c(v.cmptKey,{tag:"component"})],1)],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./cmpt/navigation-controller.vue?vue&type=template&id=0aa5f836&

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./cmpt/page.vue?vue&type=template&id=527d985e&
var pagevue_type_template_id_527d985e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.transitionName,"appear":true}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],class:_vm.transitionName},[_c('div',{staticClass:"h-nav-page-main"},[_vm._t("default")],2),_vm._v(" "),_vm._l((_vm.modalList),function(v){return _c('div',{key:v.key,staticClass:"h-nav-modal",style:({zIndex: v.key})},[_c('div',{attrs:{"id":'h_nav_modal_' + v.key}})])})],2)])}
var pagevue_type_template_id_527d985e_staticRenderFns = []


// CONCATENATED MODULE: ./cmpt/page.vue?vue&type=template&id=527d985e&

// CONCATENATED MODULE: ./constant.js
var PAGE_E_SHOW_NAME = '_h_nav_page_show';
var PAGE_E_HIDE_NAME = '_h_nav_page_hide';
var cmptPageSuffix = 'h-nav-page-';
var notFoundPageKey = cmptPageSuffix + 'not-found'; // export const DEF_IS_SET_HREF = true;

var DEF_URL_IS_HASH_MODE = true;
var DEF_NAVIGATOR_TRIGGER_EVENT = 'click';
var DEF_URL_BASE = '';
var DEF_TRANSITION = 'h-nav-transition';
// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./cmpt/page.vue?vue&type=script&lang=js&
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
  name: 'HistoryNavigationPage',
  // components: {
  //   Modal
  // },
  provide: function provide() {
    return {
      $page: this
    };
  },
  props: {
    path: {
      type: String
    },
    modalList: Array,
    transitionName: {
      type: String,
      default: 'h-nav-page'
    },
    title: String,
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
    isActive: {
      type: Boolean,
      required: true
    },
    isFirstLoad: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      isLoad: this.isFirstLoad,
      modalCount: false,
      modalTop: 0
    };
  },
  watch: {
    isActive: function isActive() {
      this._handleShowHide();
    }
  },
  methods: {
    showModal: function showModal() {
      this.$navigator.modal();
      this.modalCount = this.modalCount + 1;
    },
    hideModal: function hideModal() {
      this.modalCount = this.modalCount - 1;
    },
    _handleShowHide: function _handleShowHide() {
      if (this.isActive) {
        this.$emit(PAGE_E_SHOW_NAME);
      } else {
        this.$emit(PAGE_E_HIDE_NAME);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.isLoad) {
      // For pre rendering or server rendering
      this.$emit(PAGE_E_SHOW_NAME);
      return;
    }

    setTimeout(function () {
      if (_this.$options._tmp_is_before_destroy) {
        return;
      } // If don't use setTimeout, 
      // the next page's document addEventListener click will trigger in current page.


      _this.isLoad = true;

      _this.$nextTick(function () {
        _this.$emit(PAGE_E_SHOW_NAME);
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.isLoad) {
      return;
    }

    this.$options._tmp_is_before_destroy = true; // // Unlike window app. 
    // // It's like wehn input dom removed the blur event also trigger. 
    // // It's will trigger hide event before destroy.

    if (this.isActive) {
      this.$emit(PAGE_E_HIDE_NAME);
    }

    this.isLoad = false;
  }
});
// CONCATENATED MODULE: ./cmpt/page.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_pagevue_type_script_lang_js_ = (pagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./cmpt/page.vue





/* normalize component */

var page_component = normalizeComponent(
  cmpt_pagevue_type_script_lang_js_,
  pagevue_type_template_id_527d985e_render,
  pagevue_type_template_id_527d985e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cmpt_page = (page_component.exports);
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./cmpt/tab-bar-controller.vue?vue&type=template&id=9fd1327e&
var tab_bar_controllervue_type_template_id_9fd1327e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"h-nav-page","appear":true}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"h-nav-tabs-ctrler h-nav-tabs-wrap"},[_c('transition-group',{staticClass:"h-nav-tab-pages-wrap",class:'h-nav-tab-behavior-' + _vm.tabBehavior,style:({'--h-nav-tab-distance': _vm.tabBehaviorDistance}),attrs:{"tag":"div","enter-class":"","leave-class":"","enter-to-class":"","leave-to-class":"","enter-active-class":"h-nav-tab_page_load","leave-active-class":"h-nav-tab_page_unload"}},_vm._l((_vm.tabStackMap),function(v){return _c('div',{key:v.tabIndex,staticClass:"h-nav-tab-page-handle",class:_vm.traClassName,style:(v.isClean ? 'transition: none!important; animation: none!important;' : '')},[_c('Page',{class:v.className,style:([_vm.globalPageStyle, v.style, {zIndex: v.tabIndex}]),attrs:{"transitionName":"h-nav-tab-page","path":v.path,"title":v.title,"isTab":v.isTab,"tabIndex":v.tabIndex,"stateKey":v.stateKey,"modalList":v.modalList,"route":v.route,"isActive":_vm.isActive && (_vm.currTabPage.tabIndex === v.tabIndex),"isFirstLoad":_vm.isFirstLoad}},[_c(v.cmptKey,{tag:"component"})],1)],1)}),0),_vm._v(" "),_c('TabBar',{attrs:{"list":_vm.tabList,"currentIndex":_vm.currTabPage.tabIndex}})],1)])}
var tab_bar_controllervue_type_template_id_9fd1327e_staticRenderFns = []


// CONCATENATED MODULE: ./cmpt/tab-bar-controller.vue?vue&type=template&id=9fd1327e&

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./cmpt/tab-bar.vue?vue&type=template&id=17ae9964&
var tab_barvue_type_template_id_17ae9964_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-nav-tabbar"},_vm._l((_vm.list),function(v,index){return _c('Navigator',{key:v.pagePath,staticClass:"h-nav-tab",attrs:{"isActive":_vm.currentIndex === index,"url":v.pagePath,"type":"switchTab"}},[(v.icon)?_c('div',{staticClass:"h-nav-tab-icon",class:v.icon}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"h-nav-tab-text"},[_vm._v(_vm._s(v.text))])])}),1)}
var tab_barvue_type_template_id_17ae9964_staticRenderFns = []


// CONCATENATED MODULE: ./cmpt/tab-bar.vue?vue&type=template&id=17ae9964&

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./cmpt/tab-bar.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./cmpt/tab-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_tab_barvue_type_script_lang_js_ = (tab_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./cmpt/tab-bar.vue?vue&type=style&index=0&lang=css&
var tab_barvue_type_style_index_0_lang_css_ = __webpack_require__(3);

// CONCATENATED MODULE: ./cmpt/tab-bar.vue






/* normalize component */

var tab_bar_component = normalizeComponent(
  cmpt_tab_barvue_type_script_lang_js_,
  tab_barvue_type_template_id_17ae9964_render,
  tab_barvue_type_template_id_17ae9964_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab_bar = (tab_bar_component.exports);
// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./cmpt/tab-bar-controller.vue?vue&type=script&lang=js&
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


/* harmony default export */ var tab_bar_controllervue_type_script_lang_js_ = ({
  name: "HistoryNavigationTabBarController",
  components: {
    Page: cmpt_page,
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
    }
  },
  data: function data() {
    return {
      tabStackMap: this.$navigator._h.tabStackMap,
      tabList: this.$navigator._h.tabList,
      globalPageStyle: this.$navigator._h._global.pageStyle,
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
// CONCATENATED MODULE: ./cmpt/tab-bar-controller.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_tab_bar_controllervue_type_script_lang_js_ = (tab_bar_controllervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./cmpt/tab-bar-controller.vue





/* normalize component */

var tab_bar_controller_component = normalizeComponent(
  cmpt_tab_bar_controllervue_type_script_lang_js_,
  tab_bar_controllervue_type_template_id_9fd1327e_render,
  tab_bar_controllervue_type_template_id_9fd1327e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab_bar_controller = (tab_bar_controller_component.exports);
// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./cmpt/navigation-controller.vue?vue&type=script&lang=js&
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


/* harmony default export */ var navigation_controllervue_type_script_lang_js_ = ({
  components: {
    Page: cmpt_page,
    TabCtrler: tab_bar_controller
  },
  name: 'HistoryNavigationController',
  props: {
    entryPagePath: {
      type: String
    }
  },
  data: function data() {
    return {
      isFirstLoad: true,
      stackMap: this.$navigator._h.stackMap,
      behavior: this.$navigator._h.behavior,
      currentPage: this.$navigator._h.currentPage,
      globalPageStyle: this.$navigator._h._global.pageStyle,
      transition: this.$navigator._h._tra
    };
  },
  created: function created() {
    var _this = this;

    this.$navigator._h._load(this.entryPagePath);

    this.$nextTick(function () {
      _this.isFirstLoad = false;
    });
  },
  destroyed: function destroyed() {
    this.$navigator._h.destroy();
  }
});
// CONCATENATED MODULE: ./cmpt/navigation-controller.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_navigation_controllervue_type_script_lang_js_ = (navigation_controllervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./cmpt/navigation-controller.vue





/* normalize component */

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
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./cmpt/default-not-found.vue?vue&type=template&id=225ffd74&
var default_not_foundvue_type_template_id_225ffd74_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding-top":"8%","text-align":"center"}},[_c('h1',[_vm._v("History Navigation Vue")]),_vm._v(" "),_c('h2',[_vm._v("Page Not Found")]),_vm._v(" "),_c('p',[_vm._v("\""+_vm._s(_vm.$page.route.fullPath)+"\"")])])}
var default_not_foundvue_type_template_id_225ffd74_staticRenderFns = []


// CONCATENATED MODULE: ./cmpt/default-not-found.vue?vue&type=template&id=225ffd74&

// CONCATENATED MODULE: ./cmpt/default-not-found.vue

var script = {}


/* normalize component */

var default_not_found_component = normalizeComponent(
  script,
  default_not_foundvue_type_template_id_225ffd74_render,
  default_not_foundvue_type_template_id_225ffd74_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var default_not_found = (default_not_found_component.exports);
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./cmpt/navigator.vue?vue&type=template&id=5a82c21a&
var navigatorvue_type_template_id_5a82c21a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:{'h-nav-active': _vm.isActive, 'h-nav-disabled': _vm.disabled},attrs:{"href":_vm.href}},[_vm._t("default")],2)}
var navigatorvue_type_template_id_5a82c21a_staticRenderFns = []


// CONCATENATED MODULE: ./cmpt/navigator.vue?vue&type=template&id=5a82c21a&

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./cmpt/navigator.vue?vue&type=script&lang=js&
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
      return this.url ? this.$navigator._h.URL.toLocationUrl(this.url) : undefined;
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
          this.$navigator._h.back(this.steps, this.transition);

          break;

        default:
          if (allowedMethodMap[this.type]) {
            this.$navigator._h[this.type]({
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
    var eventName = this.event || this.$navigator._h._global.navigatorTriggerEvent;
    this.$el.addEventListener(eventName, this.handleEvent);
  }
});
// CONCATENATED MODULE: ./cmpt/navigator.vue?vue&type=script&lang=js&
 /* harmony default export */ var cmpt_navigatorvue_type_script_lang_js_ = (navigatorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./cmpt/navigator.vue





/* normalize component */

var navigator_component = normalizeComponent(
  cmpt_navigatorvue_type_script_lang_js_,
  navigatorvue_type_template_id_5a82c21a_render,
  navigatorvue_type_template_id_5a82c21a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cmpt_navigator = (navigator_component.exports);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./navigator/native.js
var nativeWindow, nativeHistory, nativeLocation, nativeRAF;

if (typeof window !== 'undefined') {
  nativeWindow = window;
  nativeHistory = window.history;
  nativeLocation = window.location;
  nativeRAF = window.requestAnimationFrame || setTimeout;
} else {
  // nativeRAF = function(cb){cb()};
  nativeRAF = setTimeout;
}


// CONCATENATED MODULE: ./navigator/url.js


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
// CONCATENATED MODULE: ./navigator/state-key.js

var KEY_NAME = '_h_n_key';
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
}
// CONCATENATED MODULE: ./util.js
function def(dest, src, key, defValue) {
  var v = src[key];
  dest[key] = v === undefined ? defValue : v;
}
function throwErr(msg) {
  throw new Error("history-navigation-vue: ".concat(msg));
}
// CONCATENATED MODULE: ./navigator/history.js





var BACK_TRA_PROP_KEY = 'h_nav_b_tra';
var isCreated = false;

function History(opt) {
  var _this = this;

  if (isCreated) {
    throwErr('Only one instance can be generated.');
  }

  isCreated = true;
  this._global = opt.global;
  this._window = nativeWindow;
  this._history = nativeHistory;
  this._location = nativeLocation;
  this._tra = {
    className: this._global.transition
  };
  this._Vue = opt.Vue;

  if (!this._history || !this._history.pushState) {
    throwErr('required history.pushState API');
  }

  this.pageMap = opt.pageMap;
  this.notFoundPage = opt.notFoundPage;

  if (opt.tabBar) {
    this.tabMap = opt.tabBar.map;
    this.tabList = opt.tabBar.list;
    this.tabStackMap = Object.create(null);
  }

  this.stackMap = Object.create(null);
  this._whenPopInfo = null;
  this._whenPopTra = null;
  this._stackItemId = 1;
  this.tabCtrlerStackId = 1; // this.isPageDestroyWhenBack = true;

  this.onRouted = opt.onRouted;
  this.URL = new url({
    isHashMode: opt.urlIsHashMode,
    base: opt.urlBase
  });

  this._popstateHandle = function () {
    _this.handlePop();
  };

  this.behavior = {
    type: '',
    distance: 0,
    isPop: false
  };
  this.currentPage = {
    path: null,
    title: null,
    className: undefined,
    isTab: false,
    tabIndex: null,
    cmptKey: null,
    stackId: null,
    stateKey: null,
    modalList: [],
    isClean: false,
    route: {}
  };
}

History.prototype._onRouted = function () {
  if (!this.onRouted) {
    return;
  }

  var curr = this.currentPage;
  this.onRouted({
    title: curr.title,
    routeFullPath: curr.route.fullPath
  });
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
  this._window.addEventListener('popstate', this._popstateHandle);

  var _userUrl = userUrl === undefined ? this.URL.getUrlByLocation() : userUrl;

  var currRoute = fullUrlParse(_userUrl);
  var key = getCurrentStateKey();
  this.clearModalWhenLoad();

  if (key !== 1) {
    if (this._isTabRoute(currRoute.trimedPath)) {
      this._backToStartAndReplace(currRoute, 'loaded');

      return;
    }
  }

  this._replace(currRoute, 'loaded');
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

  this._replace(fullParse);
};

History.prototype.switchTab = function (userUrl) {
  // if(userUrl.indexOf('?') !== -1){
  //   console.error('switchTab not support queryString');
  // }
  var _this$_forMatInputArg3 = this._forMatInputArg(userUrl),
      fullParse = _this$_forMatInputArg3.fullParse,
      tra = _this$_forMatInputArg3.tra;

  if (!this._isTabRoute(fullParse.trimedPath)) {
    console.error(userUrl + ' is not tab url');
    return;
  }

  this._backToStartAndReplace(fullParse, 'switchtab', tra);
};

History.prototype.back = function (steps, tra) {
  var key = getCurrentStateKey();
  var state = this._history.state;
  var modalKey;

  if (state) {
    modalKey = state._h_nav_modal_i;
  }

  if (key === 1 && !modalKey) {
    console.error('Currnt page is first, Cannot back.');
    return -1;
  }

  if (typeof steps === 'number' && steps > 0) {
    if (key - steps < 1) {
      return -1;
    }
  }

  this._whenPopTra = tra;

  if (steps) {
    this._history.go(-steps);
  } else {
    this._history.back();
  }

  return 0;
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
    isTab: page.isTab,
    stateKey: key,
    className: page.className,
    style: page.style,
    modalList: [],
    isClean: false // when curr page leaveing, It doesn't work.

  };

  if (_page.isTab) {
    _page.stackId = 'tab_stack_' + this.tabCtrlerStackId;

    this._Vue.set(this.tabStackMap, page.tabIndex, _page);
  } else {
    _page.stackId = this._genStackItemId();
  } // Object.assign(this.currentPage, _page);


  this._Vue.set(this.stackMap, key, _page);

  Object.assign(this.currentPage, _page); // this._Vue.nextTick(() => {
  // })
};

History.prototype._getBackTra = function () {
  var H = this._history;

  if (H.state) {
    return H.state[BACK_TRA_PROP_KEY];
  }
};

History.prototype._push = function (fullParse, tra) {
  /* 
    from [vue-router]
    try...catch the pushState call to get around Safari
    DOM Exception 18 where it limits to 100 pushState calls
  */
  // this._clearAfter();
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

  this._history.pushState(defineProperty_default()({}, KEY_NAME, key), '', this.URL.toLocationUrl(fullParse.fullPath));

  setPreStateKey(key);
  var newBehavior = {
    type: 'push',
    distance: 1,
    isPop: false
  };
  Object.assign(this.behavior, newBehavior);

  this._setMapItem(key, fullParse);

  this._onRouted();
};

History.prototype._replace = function (fullParse, behavior, _distance) {
  var _this2 = this;

  var distance = _distance === undefined ? 0 : _distance;
  var newBehavior = {
    type: behavior || 'replace',
    distance: distance,
    isPop: false
  };
  Object.assign(this.behavior, newBehavior);
  var key = getCurrentStateKey();

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

  this._Vue.nextTick(function () {
    if (newBehavior.type === 'relaunch') {
      _this2._setAllCleaned();

      var oldKey = key - distance;
      _this2.stackMap[oldKey].isClean = false;

      _this2._Vue.nextTick(function () {
        _this2._clearAll();

        _this2._setMapItem(key, fullParse);
      });
    } else {
      _this2._clearAfter();

      _this2._setMapItem(key, fullParse);

      _this2._onRouted();
    }
  }); // if(behavior === 'loaded'){
  //   this._Vue.nextTick(_after);
  // } else {
  //   _after();
  // }

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
};

History.prototype._backToStartAndReplace = function (fullParse, behavior, tra) {
  var key = getCurrentStateKey();

  if (key > 1) {
    this._whenPopInfo = {
      fullParse: fullParse,
      behavior: behavior
    };
    this.back(key - 1, tra);
  } else {
    this._setTra(tra);

    this._replace(fullParse, behavior);
  }
};

History.prototype._clearAfter = function () {
  var _this3 = this;

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

    this._Vue.delete(map, last.stateKey);

    len = arr.length;

    if (len) {
      this._Vue.nextTick(function () {
        i = 0;

        for (; i < len; i++) {
          v = arr[i];

          _this3._Vue.delete(map, v.stateKey);
        }
      });
    }
  }
};

History.prototype._clearMap = function (map) {
  var i;

  for (i in map) {
    this._Vue.delete(map, i);
  }
};

History.prototype._clearAll = function () {
  if (this.tabStackMap) {
    this._clearMap(this.tabStackMap);
  }

  this._clearMap(this.stackMap);
};

History.prototype.handlePop = function () {
  var _this4 = this;

  var preKey = getPreStateKey();
  var currKey = getCurrentStateKey();

  if (preKey === currKey) {
    var modalKey = this._history.state._h_nav_modal_i;

    if (typeof modalKey === 'number') {
      var _page2 = this.stackMap[currKey];

      if (_page2) {
        var arr = _page2.modalList.splice(modalKey);

        arr.forEach(function (item) {
          item._isDestroy = true;

          if (item._cmpt) {
            item._cmpt.$destroy();
          }
        });
      }

      if (modalKey === 0) {
        this.removeModalKeyWhenBackPage();
      }
    }

    return;
  }

  setPreStateKey(currKey);
  var _info = this._whenPopInfo;
  var compare = currKey - preKey;
  var behavior = compare < 0 ? 'back' : 'forward';
  var backTra = this._whenPopTra;

  if (!backTra && behavior === 'back' && compare === -1) {
    backTra = this._getBackTra(); // console.log('--------------- backTra ---------------', backTra);
  }

  this._setTra(backTra);

  this._whenPopTra = null;

  if (_info !== null) {
    this._replace(_info.fullParse, _info.behavior, compare);

    this._whenPopInfo = null;
    return;
  } // this.isPageDestroyWhenBack && 


  var page = this.stackMap[currKey]; // console.log('compare', compare);
  // console.log('poped',  page, preKey, currKey, getCurrentStateKey())

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

  if (behavior === 'back') {
    this._Vue.nextTick(function () {
      _this4._clearAfter();

      _this4._onRouted();
    });
  } else {
    this._onRouted();
  }
};

History.prototype.modal = function (_ref) {
  var _this$_history$pushSt2;

  var component = _ref.component,
      propsData = _ref.propsData,
      parent = _ref.parent,
      success = _ref.success;
  var key = getCurrentStateKey();
  var page = this.stackMap[key];
  var state = this._history.state;
  var modalKey = state._h_nav_modal_i;

  if (!modalKey) {
    var _this$_history$replac;

    modalKey = 0;

    this._history.replaceState((_this$_history$replac = {}, defineProperty_default()(_this$_history$replac, KEY_NAME, key), defineProperty_default()(_this$_history$replac, "_h_nav_modal_i", modalKey), _this$_history$replac), '');
  }

  modalKey = modalKey + 1;

  this._history.pushState((_this$_history$pushSt2 = {}, defineProperty_default()(_this$_history$pushSt2, KEY_NAME, key), defineProperty_default()(_this$_history$pushSt2, "_h_nav_modal_i", modalKey), _this$_history$pushSt2), '');

  var item = {
    key: modalKey
  };
  page.modalList.push(item);

  var Cmpt = this._Vue.extend(component);

  this._Vue.nextTick(function () {
    if (!item._isDestroy) {
      var cmpt = new Cmpt({
        el: '#h_nav_modal_' + modalKey,
        parent: parent,
        propsData: propsData
      });
      item._cmpt = cmpt;
      success && success(cmpt);
    }
  });
};

History.prototype.clearModalWhenLoad = function () {
  var state = this._history.state;

  if (state) {
    var modalKey = state._h_nav_modal_i;

    if (modalKey !== undefined) {
      if (modalKey === 0) {
        this.removeModalKeyWhenBackPage();
      } else if (modalKey > 0) {
        this._history.go(-modalKey);
      }
    }
  }
};

History.prototype.removeModalKeyWhenBackPage = function () {
  var newState = Object.assign({}, this._history.state);
  delete newState._h_nav_modal_i;

  this._history.replaceState(newState, '');
};

History.prototype.destroy = function () {
  this._window.removeEventListener('popstate', this._popstateHandle);

  isCreated = false;
};

/* harmony default export */ var navigator_history = (History); // window.addEventListener('beforeunload', function(event){
//   console.log('beforeunload')
//   event.preventDefault();
//   event.returnValue = "Are you sure you want to exit?"
//   return 'beforeunload';
// })
// CONCATENATED MODULE: ./navigator/navigator.js

/* harmony default export */ var navigator_navigator = (function (opt) {
  var h = new navigator_history(opt);
  var obj = {
    _h: h
  };
  ['push', 'back', 'replace', 'relaunch', 'switchTab', 'modal'].forEach(function (k) {
    _bindToOther(obj, k, h);
  });
  return obj;
});

function _bindToOther(obj, attr, h) {
  obj[attr] = function () {
    h[attr].apply(h, arguments);
  };
}
// CONCATENATED MODULE: ./mixin/show-hide-mixin.js

/* harmony default export */ var show_hide_mixin = ({
  inject: {
    $page: {
      default: null
    }
  },
  created: function created() {
    if ((this.$options.onShow || this.$options.onHide) && this.$page) {
      _handleOnShow(this);
    }
  },
  destroyed: function destroyed() {
    if (this.$options.__tmp_h_nav_show_hide_has) {
      _handleOnHide(this);
    }
  }
});

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
// CONCATENATED MODULE: ./install.js








var defNotFoundPage = {
  title: 'Not Found',
  component: default_not_found
};
function install(Vue, config) {
  if (!Array.isArray(config.pages)) {
    throwErr('config.pages is not Array.');
  }

  var pageMap = _formatPages(config.pages);

  var tabBar;

  if (config.tabBar) {
    tabBar = _formatTabBar(config.tabBar, pageMap);
  }

  var notFoundPage = config.notFoundPage || defNotFoundPage;
  Vue.component(notFoundPageKey, notFoundPage.component);
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
    Vue.component(page.cmptKey, page.component);
  }

  Vue.component('NavigationController', navigation_controller);
  Vue.component('Navigator', cmpt_navigator);
  var globalOption = Object.create(null);
  def(globalOption, config, 'navigatorTriggerEvent', DEF_NAVIGATOR_TRIGGER_EVENT);
  def(globalOption, config, 'transition', DEF_TRANSITION);
  def(globalOption, config, 'pageStyle', undefined);
  var options = {
    global: globalOption,
    Vue: Vue,
    pageMap: pageMap,
    cmptPageSuffix: cmptPageSuffix,
    notFoundPage: notFoundPage,
    tabBar: tabBar,
    onRouted: config.onRouted
  };
  def(options, config, 'urlBase', DEF_URL_BASE);
  def(options, config, 'urlIsHashMode', DEF_URL_IS_HASH_MODE);
  Vue.prototype.$navigator = navigator_navigator(options);
  Vue.mixin(show_hide_mixin);
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
// CONCATENATED MODULE: ./bundle.js
 // import './css/transition.css';


var bundle_plugin = {
  install: install
};
var version = '1.0.0';

/***/ })
/******/ ]);
});