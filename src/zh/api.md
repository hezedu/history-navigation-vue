# API(v.1.x)

## 全局 API

<!-- - 类型 `HistoryNavigationVueObject`
  ```ts
  interface HistoryNavigationVueObject {
    plugin: VuePluginObject,
    version: string
  }
  ``` -->

### plugin
提拱一个插件供 Vue 安装， 全局配置将作为插件参数传入：
```js
Vue.use(historyNavigationVue.plugin, globalConfig)
```
[globalConfig](#全局配置) 见下面.
### version
提供字符串形式的安装版本号。

## 全局配置
- 类型: `ConfigObject`

  ```ts
  interface ConfigObject {
    pages: Array<PageConfig>,
    notFoundPage?: NotFoundPageConfig,
    tabBar?: Object,
    onRouted?: Function,
    
    // url options
    urlIsHashMode?: boolean,
    urlBase?: string,
    // global options
    pageStyle?: Object,
    navigatorTriggerEvent?: string
  }
  ```
`historyNavigationVue` 的全局配置。

### pages

- 类型: `Array<PageConfig>`
  ```ts
  interface PageConfig {
    path: string,
    component: VueComponent,
    title?: string,
    className?: string,
    style?: object
  }
  ```
- 必填

页面列表。

**示例:**
```js
{
  pages: [
    {
      path: '/',
      title: '首页',
      className: 'index',
      style: { backgroundColor: '#eee' },
      component: {
        template: '<h1>Hello World!</h1>'
      }
    }
  ]
}
```
### notFoundPage
  - 类型: `NotFoundPageConfig`
    ```ts
    interface NotFoundPageConfig {
      component: VueComponent,
      title?: string
    }
    ```
  - 默认:  简单的404页面。

如果 URL 没有匹配到任何页面，这个页面将会呈现。

### tabBar
- 类型: `TabBarConfig`
  ```ts
  interface TabBarConfig {
    list: Array<TabBarItem>,
    custom?: VueComponent
  }
  ```

tabBar 模式。

<h4 id="tab_bar_list">list</h4>

- 类型: `Array<TabBarItem>`
  ```ts
  interface TabBarItem {
      pagePath: string,
      text?: string,
      icon?: string,
      [propName: string]: any
  }
  ```
tab 列表. 长度必须大于 2。

你可以设置任何属性，它将被传入自定义组件中。

**示例:**
```js{16-21}
{
  pages: [
    {
      path: '/',
      component: {
        template: '<h1>Home</h1>'
      }
    },
    {
      path: '/me',
      component: {
        template: '<h1>Me</h1>'
      }
    }
  ],
  tabBar: {
    list: [
      { pagePath: "/", text: "Home" },
      { pagePath: "/me", text: "Me" }
    ]
  }
}
```
[预览](https://hezedu.github.io/history-navigation-vue/examples/tabbar.html)

你可以通过修改 CSS 来改变选中样式：
```css
.h-nav-tab.h-nav-active{
  color: #3eaf7c;
}
```
示例: [TabBar 带图标](https://hezedu.github.io/history-navigation-vue/examples/tabbar-with-icon.html)

你可以通过修改 CSS 来改变它的定位：
```css
.h-nav-tabs-wrap{
  padding-bottom: 0;
  padding-top: 48px;
}
.h-nav-tabbar{
  top: 0;
  bottom: initial;
}
```
示例: [TabBar 在顶部](https://hezedu.github.io/history-navigation-vue/examples/tabbar-position-top.html)
#### custom
- 类型: `VueComponent`

如果默认的组件无法满足你的要求，你可以自定义，具体参考内置的组件：[ tab-bar.vue](https://github.com/hezedu/history-navigation-vue/blob/main/src/cmpt/tab-bar.vue)


### urlIsHashMode
  - 类型: `boolean`
  - 默认:  `true`

    是否使用 URL hash 值来作路由。 如果为 `true` URL 像 `/#/`, 否则 URL 就像 `/`.
### urlBase
  - 类型: `string`
  - 默认:  `""`
    应用的基路径，在 `urlIsHashMode` 时生效。例如，如果整个单页应用服务在 /app 下，然后 base 就应该设为 "/app"。

### onRouted
type: `Function`

**onRouted(routedEvent)**
- routedEvent

  - 类型 `RoutedEvent`
    ```ts
    interface RoutedEvent {
      title: string, // current page' title.
      routeFullPath: string // current page route' fullPath. (route not eq location)
    }
    ```
页面跳转后回调，在第一次加载时也会触发。

可用来同步 document title 或一些流量统计。

*示例:*
```js
{
  onRouted(e){
    document.title = e.title;
  }
}
```
[预览](https://hezedu.github.io/history-navigation-vue/examples/synchronize-document-title.html)

### pageStyle
  - 类型: `object`

  全局的页面样式。

### navigatorTriggerEvent
  - 类型: `string`
  
  - 默认:  `"click"`

    声明可以用来触发导航的事件。
    
    这是 `<Navigator>` 组件一个全局参数: [event](#event).

### transition
  - 类型: `string`
  - 默认:  `h-nav-transition`

这是 [transitionClass](#transitionclass) 的全局配置。

如果你不想要任何过渡效果，那把它设成 `""`。


### homePagePath
  - type: `string`
  - default: 第一个页面的路径。
### onExit
  - type: `function`

**onExit(exitEvent)**
- exitEvent

  - type `ExitEvent`
    ```ts
    interface ExitEvent {
      preventDefault: function, // 调用它将会阻止退出.
      isTabPage: function, 
      isHomePage: function
    }
    ```
当按后退键将要退出时触发。
*示例:* 

[再按一次退出程序](https://hezedu.github.io/history-navigation-vue/examples/graceful-exit.html)

## `<NavigationController>`
根容器， 负理包含并管理所有页面。

**注意**:默认它将会撑满父元素， 请确保父元素高度不为 `0`。
<!-- Default `width`width height is equal to parent element. -->
```html
<!-- Make sure that the height of the parent element is not 0 -->
<NavigationController />

<!-- Set parent height -->
<div style="height: 100vh">
  <NavigationController />
</div>

<!-- Or directly set the style -->
<NavigationController style="height: 100vh" />
```
___Props:___
### entryPagePath
  - 类型: `string`

  - 默认:  Get from the `window.location`

哪一个页面将会首先显示。

示例: [入口页面](https://hezedu.github.io/history-navigation-vue/examples/entry-page.html)

__Slot:__
当浏览器不支持 HTML5 history API 时显示。默认会有一些内置的提示。你可以自定义。
```html
<NavigationController>
  错误，没有找到 HTML5 history API.
</NavigationController>
```

## $page
  - 类型: `Vue instance`

当前组件所在的页面。

所有操作都应基于 `$page`, 就像你之前基于 `$root` 一样。

这是一个全局混合，所有页面下的组件都可获得。

### $el
`$page` 的根 DOM 元素.

所有 DOM 事件都应基于 `$page.$el`, 就像你之前基于 `document` 一样。

示例: [页面事件处理](https://hezedu.github.io/history-navigation-vue/examples/page-event-handing.html)
```vue
<template>
  <div style="height: 300vh" />
</template>
<script>
export default {
  methods: {
    handlePageScroll(){
      console.log('Page Scroll');
    }
  },
  mounted(){
    this.$page.$el.addEventListener('scroll', this.handlePageScroll);
  },
  destroyed(){
    this.$page.$el.removeEventListener('scroll', this.handlePageScroll);
  }
}
</script>
```
### 滚动性能
$page 使用 DIV 滚动。在 Chrome 中，如果 DIV 背景没有设或有透明，将会引发**性能问题**。详见 [BUG](https://bugs.chromium.org/p/chromium/issues/detail?id=823751)。所以默认的 $page 背景为不透明的白色。如果你要改变背景，请不要设透明度。

<i>引用:[chrome下div滚动卡顿该怎么处理？](https://www.zhihu.com/question/268016229)</i>
### props

#### title
  - 类型: `string` 页面全局设置中的 title.


#### route
解析好的路由信息。
  - 类型: <code id="type_route">Route</code>
  ```ts
  interface Route {
    path: string;
    fullPath: string;
    trimedPath: string;
    query: Object;    // Parsed object of route's search string.
                      // `"?id=1&type=2"` => `{id: "1", type: "2"}`
  }
  ```
示例: [页面获取参数](/https://hezedu.github.io/history-navigation-vue/examples/page-get-query.html)

#### path
  - 类型: `string` 页面全局设置中的 path, notFoundPage 忽略.
#### isTab
  - 类型: `boolean` 是否是 tab 页面。
#### tabIndex
  - 类型: `number` 如果是 tab 页面, 它对应的页面在全局配置 tabBar 的 [list](#tab_bar_list)中的数组索引。否则忽略。
## onShow / onHide
页面新的生命周期钩子。
- `onShow`: 当页面已挂载(mounted), 或者已返回(比如点浏览器后退按钮), 它将会触发。
  
  - `$page.$el` 的样式将会是： `display: block`.
- `onHide`: 当页面离开(比如：使用 $navigator.push 方法跳转到一个新页面) 或销毁之前(beforedestroy), 它将会触发。

  
  - 在过渡完成后, `$page.$el` 的样式将会变成 `display: none`.

  - 如果没有过渡, `$page.$el` 的样式将会立即 `display: none`。





### 生命周期顺序
#### 当页面第一次生成时：

  `mounted` -> `onShow` 

#### 当页面返回时：
`onShow`
#### 当页面离开时：
`onHide`

#### 当页面即将销毁：

  `onHide`(if not yet hidden) -> `beforeDestroy`

**注意:** `onHide` 会始终在页面销毁之前触发, 就像一个已聚焦的 DOM input blur 事件会在它 remove 之前触发。

::: 警告
如果你必须绑定一个全局事件，请在 `onShow` 时绑定，然后在 `onHide` 时解绑。
:::
示例:[全局事件处理](https://hezedu.github.io/history-navigation-vue/examples/global-event-handing.html)

### 性能
当 `onHide` 时, the `$el` 将会从布局流中删除. 它不会影响其它页面，即使它有 10,000 个 DOM.

通常只显示一页。只在页面过渡时，才会有两个页面同时显示。

<!-- Only one page is displayed at the same time -->
## $navigator
路由导航器，绑定在 Vue 原型上。

___Methods:___
### push


**$navigator.push(url)**
  - url
      - 类型: `string | NavigatorUrlObject`


      - 必填
  
  保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。

```js
this.$navigator.push('/foo');
```

#### With More options:
Type declaration for <code id="typeNavigatorUrlObject">NavigatorUrlObject</code>:
  ```ts
interface NavigatorUrlObject {
  url: string,
  query?: Object,
  transition?: string // See the Transition CSS API.
}
```
transition 见: [transitionClass](#transitionclass)
```js
this.$navigator.push({
  url: '/foo',
  query: { id: 1 },
  transition: 'some-special-class'
});
```
### back

**$navigator.back([steps], [transition])**
  - `steps`
      - 类型: `number`

      - 默认:  `1`

  - `transition`
      - 类型: `string`

<!-- 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层。

参数 -->
关闭当前页面，返回上一页面或多级页面。

transition see: [transitionClass](#transitionclass)
```js
this.$navigator.back();
this.$navigator.back(2);
```
### replace
**$navigator.replace(url)**
  - url
      - 类型: `string | NavigatorUrlObject`
      - 必填

<!-- 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。 -->
关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
```js
this.$navigator.push('/replace');
```

### relaunch
**$navigator.relaunch(url)**
  - url
      - 类型: `string | NavigatorUrlObject`
      - 必填


关闭所有页面，打开到应用内的某个页面。

```js
this.$navigator.relaunch(url);
```
### switchTab
**$navigator.switchTab(tabPageUrl)**
  - tabPageUrl
      - 类型: `string | NavigatorUrlObject`
      - 必填


跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
```js
this.$navigator.switchTab('/');
```
### modal
**$navigator.modal(modalObj)**
  - modalObj
    - type: `ModalObject`
      ```ts
      interface ModalObject {
        component: VueComponent,
        propsData?: Object,
        parent?: VueVM,
        success?: Function
      }
      ```
    - required
#### Example
`modal.vue`
```vue
<template>
<div class="modal">
  <div class="modal-mask" @click="closeModal" />
  <div class="modal-main">
    <h1 @click="handleTextClick">{{text}}</h1>
    <button style="font-size: 20px;" @click="closeModal">Close</button>
  </div>
</div>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    closeModal(){
      this.$navigator.back();
    },
    handleTextClick(){
      this.$emit('textClick');
    }
  }
}
</script>

<style>
.modal {
  width: 100%; 
  height: 100%; 
  position: relative;
}
.modal-mask {
  width: 100%; 
  height: 100%; 
  position: absolute; 
  top: 0; 
  left: 0;
  background-color: rgba(0, 0, 0 , .5);
}
.modal-main {
  color: #000;
  height: 200px;
  width: 200px;
  position: absolute; 
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  text-align: center;
  padding: 1;
}
</style>
```
`index.vue`
```vue
<template>
<button @click="showModal">showModal</button>
</template>

<script>
import Modal from './modal.vue';
export default {
  methods: {
    showModal(){
      this.$navigator.modal({
        component: Modal,
        parent: this,
        propsData: {
          text: 'Hello'
        },
        success: (modalVM) => {
          modalVM.$on('textClick', () => {
            console.log('modalVM clicked text');
          })
        }
      });
    }
}
</script>
```
## `<Navigator>`
`$navigator` 的便利组件。

___Props:___
### type
- 类型: `string`

- 默认:  `"push"`

- 可选值: `"push" | "back" | "replace" | "relaunch" | "switchTab"`


### url
- 类型: `string`

- 必填: 当 type 不为 back 时: `true`

```html
<Navigator url="/foo">Push to foo</Navigator>
<Navigator type="back">Back</Navigator>  <!-- back ignore url -->
<Navigator url="/foo" type="replace">Replace to foo</Navigator>
<Navigator url="/foo" type="relaunch">Relaunch to foo</Navigator>
<Navigator url="/foo" type="switchTab">switchTab to foo</Navigator>
```

### steps
- 类型: `number`

- 默认:  `1`

返回的页面数。type 为 "back" 时有效。
```html
<Navigator type="back" :steps="2">back2</Navigator>
```
### event
  - 类型: `string`

  - 默认:  Inherit global config's [navigatorTriggerEvent](#navigatortriggerevent)

  声明可以用来触发导航的事件。
### isActive
- 类型: `boolean`

- 默认:  `false`

如果为 `true` 事件将不会触发，一个 class `"h-nav-active"` 将会被添加。
### disabled
- 类型: `boolean`

- 默认:  `false`

如果为 `true` 事件将不会触发，一个 class `"h-nav-disabled"` 将会被添加。
### transition
- 类型: `string`

设置不同的过渡效果。详情[见下面](#transitionclass).

## Transition CSS
基于 CSS 的页面过渡效果。

使用三大基类: [behaviorClass](#behaviorclass), [behaviorClass](#behaviorclass), [pageClass](#pageclass), 你可以设置成千上万的过渡效果。
### 使用方法
- **基于 CSS transition 属性**

  首先：设置 transition 属性。

  **behaviorClass** > **transitionClass**
  ```css
  .h-nav-behavior-replace > .h-nav-transition{
    transition: all 1s ease;
  }
  ```
  然后设置触发样式, 两种方向后缀可选 `-enter`, `-leave-to`:

  **behaviorClass** > **transitionClass** > **pageClass**-enter *或*<br>
  **behaviorClass** > **transitionClass** > **pageClass**-leave-to


  ```css
  .h-nav-behavior-replace > .h-nav-transition > .h-nav-page-enter {
    transform: translateX(100%);
  }
  ```
<!-- 示例: [扩展和自定义默认过渡](https://hezedu.github.io/history-navigation-vue/examples/transition-extend-and-custom-default.html)

- **基于 CSS animation 属性**

  首先：设置 `animation` 属性(不要有 animation-name):

  `behaviorClass > transitionClass`
  ```css
  .h-nav-behavior-replace > .my-ani{
    animation-duration: 1s;
  }
  ```
  然后设置 animation-name, 两种方向后缀可选 `-enter-active`, `-leave-active`:

  **behaviorClass** > **transitionClass** > **pageClass**-enter-active *或*<br>
  **behaviorClass** > **transitionClass** > **pageClass**-leave-active

  ```css
  .h-nav-behavior-replace > .my-ani > .h-nav-page-enter-active{
    animation-name: rotateInUpL2eft;
  }
  .h-nav-behavior-replace > .my-ani > .h-nav-page-leave-active{
    animation-name: rotateOutUpL2eft;
  }
  ``` -->
  <!-- 示例: [结合 amimate.css 过渡](https://hezedu.github.io/history-navigation-vue/examples/transition-with-amimate.html) -->
### behaviorClass
#### Page Behavior
class 前缀: `h-nav-behavior-`
- **loaded**

  当 `<NavigationController>` 首次加载。
  
  *默认无过渡*.
- **push**

  当使用导航器 push 方法。

- **back**

  当 HTML5 历史后退(history.back).
- **replace**

  当使用导航器 replace 方法。

- **relunch**

  当使用导航器 relunch 方法。
- **switchtab**

  当使用导航器 switchTab(注意字母大小写) 方法。

  *默认无过渡*.
- **forward**

  当 HTML5 历史前进(history.forward).  **请忽略它**.

  *默认无过渡*.
#### Tab Behavior
class 前缀: `h-nav-tab-behavior-`

[Tab 页](#tab-page) 才有的行为, 当 tab page 相互切换时发生。

*All 默认无过渡*.
- **reduce**

  从大索引切换到小索引。比如当前 tab **2**，点击 tab **1**。

- **increase**

  从小索引切换到大索引。比如当前 tab **1**，点击 tab **2**。

### transitionClass
CSS 类名，由全局配置或导航器的 transition 选项设置。

默认: `h-nav-transition`. 

::: 警告
如果你用导航器 push 方法并设置了过渡，你也得设置 back 行为的过渡。应为当你无参数回退时(相当于手动点击浏览器后退键)，它将跟随之前进入的效果类名。
:::
### pageClass
#### Page
class 前缀: `h-nav-page-`
#### Tab Page
class 前缀: `h-nav-tab-page-`

只作用于 [Tab Behavior](#tab-behavior).

<!--
 ```css
.h-nav-tab-behavior-reduce > .h-nav-transition,
.h-nav-tab-behavior-increase > .h-nav-transition{
  transition: all .3s ease;
}
``` 
-->

<!-- 示例: [tab 的滑动过渡](https://hezedu.github.io/history-navigation-vue/examples/transition-of-tab-pages-slide.html) -->
### CSS Var
本项目还提供了一些 CSS 变量还用于过渡的加速度效果。

- `--h-nav-distance`

  两个页面间的距离。比如当使用 `this.$navigator.back(2)`, 该变量将会是 `-2`.
  ```css
  .h-nav-behavior-back > .h-nav-transition > .h-nav-page-enter{
    transform: translateX(calc(100% * var(--h-nav-distance)));
  }
  ```

- `--h-nav-tab-distance`

  两个 tab 页面间的距离。比如当前 tab 是 `3`, 点击 tab `1`, 该变量将会是 `2`.



**注意:** 关于 [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var()), 一些老旧浏览器可能不支持(安卓 Webview 要 版本 5 以上), 但是并不重要，本来就是锦上添花的事。

 <!-- 示例: [tab 的滑动过渡(使用了CSS Var)](https://hezedu.github.io/history-navigation-vue/examples/transition-of-tab-pages-slide-css-var.html) -->
