(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{314:function(t,i,n){"use strict";var e=n(11),r=n(5),o=n(1),s=n(166),u=RegExp.prototype,a=u.toString,c=o((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),f="toString"!=a.name;(c||f)&&e(RegExp.prototype,"toString",(function(){var t=r(this),i=String(t.source),n=t.flags;return"/"+i+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in u)?s.call(t):n)}),{unsafe:!0})},315:function(t,i,n){"use strict";n.d(i,"i",(function(){return e})),n.d(i,"b",(function(){return r})),n.d(i,"h",(function(){return o})),n.d(i,"f",(function(){return s})),n.d(i,"g",(function(){return u})),n.d(i,"e",(function(){return a})),n.d(i,"d",(function(){return c})),n.d(i,"c",(function(){return f})),n.d(i,"a",(function(){return d}));var e=1500,r=300,o=1500,s=1e3,u=300,a=500,c=300,f=3e3,d=1e3},316:function(t,i,n){"use strict";n(318),n(167),n(9),n(314);i.a={methods:{timeout:function(t,i){var n=this;this.$options.__tmp_timer=setTimeout((function(){n.$options.__tmp_timer=null,t()}),i)},clearTimeout:function(t){function i(){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}((function(){var t=this.$options.__tmp_timer;t&&(clearTimeout(t),this.$options.__tmp_timer=null)}))},destroyed:function(){this.clearTimeout()}}},318:function(t,i,n){var e=n(0),r=n(2),o=n(69),s=[].slice,u=function(t){return function(i,n){var e=arguments.length>2,r=e?s.call(arguments,2):void 0;return t(e?function(){("function"==typeof i?i:Function(i)).apply(this,r)}:i,n)}};e({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:u(r.setTimeout),setInterval:u(r.setInterval)})},345:function(t,i,n){"use strict";n.r(i);var e=n(315),r={mixins:[n(316).a],props:{type:{type:String}},data:function(){return{text:"normal"===this.type?"Vue Official Router":"History Navigation Vue",isLoading:!0,isActive:!1}},methods:{ani:function(){var t=this;this.timeout((function(){t.timeout((function(){t.isActive=!0,t.timeout((function(){t.$emit("diffStart")}),e.d)}),e.a)}),e.i)}},mounted:function(){this.ani()}},o=n(26),s=Object(o.a)(r,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"index_diff_page index_diff_page_wrap index_diff_start_wrap"},[i("div",{staticClass:"index_diff_page_titlebar"},[this._v("\n      Index\n    ")]),this._v(" "),this._m(0),this._v(" "),i("div",{staticClass:"index_diff_start_bottom"},[i("div",{staticClass:"index_diff_start_link",class:{index_diff_start_active:this.isActive}},[this._v("Go to list page\n    ")])])])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"index_diff_start_top"},[i("b",[this._v("Single-Page Apps")])])}],!1,null,null,null);i.default=s.exports}}]);