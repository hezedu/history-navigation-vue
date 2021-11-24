# API(v1.x)

## Global API

<!-- - type `HistoryNavigationVueObject`
  ```ts
  interface HistoryNavigationVueObject {
    plugin: VuePluginObject,
    version: string
  }
  ``` -->

### plugin
Provides a plugin for Vue, and global config is set by plugin options:
```js
Vue.use(historyNavigationVue.plugin, globalConfig)
```
[globalConfig](#global-config) See below.
### version

Provides the installed version as a `string`.

## Global Config
- type: `ConfigObject`

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
    navigatorTriggerEvent?: string,
    
  }
  ```
Global config of `historyNavigationVue`.

### pages

- type: `Array<PageConfig>`
  ```ts
  interface PageConfig {
    path: string,
    component: VueComponent,
    title?: string,
    className?: string,
    style?: object
  }
  ```
- required

The page list.

**Example:**
```js
{
  pages: [
    {
      path: '/',
      title: 'Home',
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
  - type: `NotFoundPageConfig`
    ```ts
    interface NotFoundPageConfig {
      component: VueComponent,
      title?: string
    }
    ```
  - default: Simple built in not found page.

If the URL does not match any page in `pages`, that page will be displayed.

### tabBar
- type: `TabBarConfig`
  ```ts
  interface TabBarConfig {
    list: Array<TabBarItem>,
    custom?: VueComponent
  }
  ```
  
The tab bar mode of the application.

<h4 id="tab_bar_list">list</h4>

- type: `Array<TabBarItem>`
  ```ts
  interface TabBarItem {
      pagePath: string,
      text?: string,
      icon?: string,
      [propName: string]: any
  }
  ```
The tab list. length must big than 2. 

You can set any property and it will be passed to the custom component.

**Example:**
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
[Preview](https://hezedu.github.io/history-navigation-vue/examples/tabbar.html)

You can change the selected style by modifying the CSS:
```css
.h-nav-tab.h-nav-active{
  color: #3eaf7c;
}
```
Example: [TabBar With Icon](https://hezedu.github.io/history-navigation-vue/examples/tabbar-with-icon.html)

You can change its position by modifying the CSS:
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
Example: [TabBar Position Top](https://hezedu.github.io/history-navigation-vue/examples/tabbar-position-top.html)
#### custom
- type: `VueComponent`

If the default components cannot meet your needs, you can customize your own components. See the built in component: [ tab-bar.vue](https://github.com/hezedu/history-navigation-vue/blob/main/src/cmpt/tab-bar.vue)


### urlIsHashMode
  - type: `boolean`
  - default: `true`

    Is uses the URL hash for routing. If `true` the URL like `/#/`, else the URL like `/`.
### urlBase
  - type: `string`
  - default: `""`

    The base URL of the app. Used when `urlIsHashMode` is `false`. For example, if the entire single page application is served under `"/app"`, then base should use the value `"/app"`

### onRouted
type: `Function`

**onRouted(routedEvent)**
- routedEvent

  - type `RoutedEvent`
    ```ts
    interface RoutedEvent {
      title: string, // current page' title.
      routeFullPath: string // current page route' fullPath. (route not eq location)
    }
    ```
Callback after page routing, also triggered on the first load.

Use to synchronize document title or do some traffic statistics.

*Example:*
```js
{
  onRouted(e){
    document.title = e.title;
  }
}
```
[Preview](https://hezedu.github.io/history-navigation-vue/examples/synchronize-document-title.html)


### navigatorTriggerEvent
  - type: `string`
  
  - default: `"click"`
  
    Specify the event that can trigger the link navigation. 
    
    This is global option of component `<Navigator>`'s prop: [event](#event).

### transition
  - type: `string`
  - default: `h-nav-transition`

This is global option of [transitionClass](#transitionclass).


If you don't want any transition effect, Set it to `""`
### homePagePath
  - type: `string`
  - default: First page's path.
### onExit(Deprecated)
::: danger
Deprecated: Because JS cannot close the window by itself, import to [bug#1](https://github.com/hezedu/history-navigation-vue/issues/1), do not use it. It will be redesigned in the next release. Soon.
:::
  - type: `function`

**onExit(exitEvent)**
- exitEvent

  - type `ExitEvent`
    ```ts
    interface ExitEvent {
      preventDefault: function, // Calling it will prevent exit.
      isTabPage: function, 
      isHomePage: function
    }
    ```
Triggered when clicking back button to exit.
::: warning
In Chrome (and maybe safari too),User needs to interact(for example: mousedown, touchstart) with the document once to work.
:::
*Example:* 

[Press Back Again to Exit](https://hezedu.github.io/history-navigation-vue/examples/graceful-exit.html)

## `<NavigationController>`
The root container view controller for management all pages.

**Note**:Default: It will fill the parent element, make sure that the height of the parent element is not `0`.
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
  - type: `string`

  - default: Get from the `window.location`

Which page will appear first. 

Example: [Entry Page](https://hezedu.github.io/history-navigation-vue/examples/entry-page.html)

__Slot:__
When Browser cannot support HTML5 history API, will show. There will be some built-in tips by default.
You can customize it.
```html
<NavigationController>
  Error, not has HTML5 history API.
</NavigationController>
```
## $page
  - type: `Vue instance`

The page where the current component is located. 

All operations should be based on `$page`, as you did based on the `$root` before.

This is a global mixin of Vue, all components in the page are available.



### $el
The root DOM element of `$page`.

All DOM events should be based on `$page.$el`, as you did based on the `document` before.

Example:[Page Event Handing](https://hezedu.github.io/history-navigation-vue/examples/page-event-handing.html)
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

### Scrolling Performance
$page uses DIV to scroll. In Chrome, If the DIV background is not set or RGBA Alpha is less than 1, it will cause **performance problems**.see [BUG](https://bugs.chromium.org/p/chromium/issues/detail?id=823751). So the default $page background is opaque white. If you want to change the background, please do not set the transparency.

<i>References: [chrome下div滚动卡顿该怎么处理？](https://www.zhihu.com/question/268016229)</i>

### props

#### title
  - type: `string` Page config's title.


#### Route
Parsed object of current page route.
  - type: <code id="type_route">Route</code>
  ```ts
  interface Route {
    path: string;
    fullPath: string;
    trimedPath: string;
    query: Object;    // Parsed object of route's search string.
                      // `"?id=1&type=2"` => `{id: "1", type: "2"}`
  }
  ```
Example: [Page Get Query](/https://hezedu.github.io/history-navigation-vue/examples/page-get-query.html)

#### path
  - type: `string` Page config's path, notFoundPage is ignored.
#### isTab
  - type: `boolean` Is the tab page.
#### tabIndex
  - type: `number` If is the tab page, It's relative to the index of the config's tabBar [list](#tab_bar_list). otherwise ignored.
## onShow / onHide
Page's Lifecycle Hooks.
- `onShow`: When the page mounted, or backed(E.g. Use the $navigator.back method back to this page), It will trigger.
  
  - The style of `$page.$el` will be `display: block`.
- `onHide`: When the page leave(E.g. Use the $navigator.push method to jump to other page) or beforedestroy, It will trigger.

  
  - After the transition effect is over, The style of `$page.$el` will be `display: none`.

  - If not has a transition effect, The style of `$page.$el` will be `display: none` immediately.





### Life cycle sequence
#### When the page first create:

  `mounted` -> `onShow` 

#### When back to this page:
`onShow`
#### When jump to other page:
`onHide`

#### When the page beforeDestroy:

  `onHide`(if not yet hidden) -> `beforeDestroy`

**Notice:** `onHide` Always triggers before page destroy, like focused DOM input blur event triggers before It's remove.


::: warning
If you must bind global events, please bind with `onShow` and unbind with `onHide`.
:::
Example:[Global Event Handing](https://hezedu.github.io/history-navigation-vue/examples/global-event-handing.html)

### Performance
When `onHide`, the `$el` will removes from the layout flow. It will not affect other pages, even if it has 10,000 DOMs.

Usually only one page is displayed.

During the page transition, two pages will be displayed at the same time.

<!-- Only one page is displayed at the same time -->
## $navigator
The navigator for page routing, bound to the Vue.prototype. 

___Methods:___
### push


**$navigator.push(url)**
  - url
      - type: `string | NavigatorUrlObject`


      - required

  Keep the current page and jump one page. But you cannot jump to the tabbar page.

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
transition see: [transitionClass](#transitionclass)
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
      - type: `number`

      - default: `1`

  - `transition`
      - type: `string`

<!-- 关闭当前页面, 返回上一页面或多级页面. 可通过 getCurrentPages 获取当前的页面栈, 决定需要返回几层. 

参数 -->
Close the current page and return to the previous page or multi-level pages.

transition see: [transitionClass](#transitionclass)
```js
this.$navigator.back();
this.$navigator.back(2);
```
### replace
**$navigator.replace(url)**
  - url
      - type: `string | NavigatorUrlObject`
      - required

<!-- 关闭当前页面, 跳转到应用内的某个页面. 但是不允许跳转到 tabbar 页面.  -->
Close the current page and jump one page. But it is not allowed to jump to the tabbar page.
```js
this.$navigator.push('/replace');
```

### relaunch
**$navigator.relaunch(url)**
  - url
      - type: `string | NavigatorUrlObject`
      - required


Close all pages and open one page.

```js
this.$navigator.relaunch(url);
```
### switchTab
**$navigator.switchTab(tabPageUrl)**
  - tabPageUrl
      - type: `string | NavigatorUrlObject`
      - required


Jump to the tabBar page and close all other non-tabBar pages
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
Convenient component of `$navigator`.

___Props:___
### type
- type: `string`

- default: `"push"`

- available values: `"push" | "back" | "replace" | "relaunch" | "switchTab"`


### url
- type: `string`

- required: When the type is not "back": `true`

```html
<Navigator url="/foo">Push to foo</Navigator>
<Navigator type="back">Back</Navigator>  <!-- back ignore url -->
<Navigator url="/foo" type="replace">Replace to foo</Navigator>
<Navigator url="/foo" type="relaunch">Relaunch to foo</Navigator>
<Navigator url="/foo" type="switchTab">switchTab to foo</Navigator>
```

### steps
- type: `number`

- default: `1`
```html
<Navigator type="back" :steps="2">back2</Navigator>
```
### event
  - type: `string`

  - default: Inherit global config's [navigatorTriggerEvent](#navigatortriggerevent)

  Specify the event that can trigger the link navigation.
### isActive
- type: `boolean`

- default: `false`

If `true` event will be **prevented** and a class `"h-nav-active"` Will be added.
### disabled
- type: `boolean`

- default: `false`

If `true` event will be **prevented** and a class `"h-nav-disabled"` Will be added.
### transition
- type: `string`

Set different transition effects.  [See below](#transitionclass) for details.

## Transition CSS
Page transition effect based on CSS. 

Using these three base classNames: [behaviorClass](#behaviorclass), [behaviorClass](#behaviorclass), [pageClass](#pageclass), You can set up countless transition effects.
### Usage
- **With CSS transition**

  First: Set the transition of CSS.

  **behaviorClass** > **transitionClass**
  ```css
  .h-nav-behavior-push > .h-nav-transition,
  .h-nav-behavior-back > .h-nav-transition{
    transition: all .3s ease;
  }
  ```
  Then Set the action CSS with suffix `-enter`, `-leave-to`:

  **behaviorClass** > **transitionClass** > **pageClass**-enter *or*<br>
  **behaviorClass** > **transitionClass** > **pageClass**-leave-to


  ```css
  .h-nav-behavior-push > .h-nav-transition > .h-nav-page-enter,
  .h-nav-behavior-back > .h-nav-transition > .h-nav-page-leave-to {
    transform: translateX(100%);
  }
  ```

- **With CSS animation**

  First: set `animation` propertys(without animation-name) CSS:

  `behaviorClass > transitionClass`
  ```css
  .h-nav-behavior-replace > .my-ani{
    animation-duration: 1s;
  }
  ```
  Then set animation-name CSS with suffix `-enter-active`, `-leave-active`:

  **behaviorClass** > **transitionClass** > **pageClass**-enter-active *or*<br>
  **behaviorClass** > **transitionClass** > **pageClass**-leave-active

  ```css
  .h-nav-behavior-replace > .my-ani > .h-nav-page-enter-active{
    animation-name: rotateInUpLeft;
  }
  .h-nav-behavior-replace > .my-ani > .h-nav-page-leave-active{
    animation-name: rotateOutUpLeft;
  }
  ```
  <!-- Example: [Transition With Amimate](https://hezedu.github.io/history-navigation-vue/examples/transition-with-amimate.html) -->
### behaviorClass
#### Page Behavior
class prefix: `h-nav-behavior-`
- **loaded**

  When `<NavigationController>` loaded for the first time. 
  
  *Default No transition*.
- **push**

  When used navigator push method.

- **back**

  When history back.
- **replace**

  When used navigator replace method.

- **relunch**

  When used navigator relunch method.
- **switchtab**

  When used navigator switchTab(Pay attention to letter case) method.

  *Default No transition*.
- **forward**

  When history forward. **Please ignore**.

  *Default No transition*.
#### Tab Behavior
class prefix: `h-nav-tab-behavior-`

Behavior of [Tab Page](#tab-page), It only happens when tabbar switches.

*All default No transition*.
- **reduce**

  From large tab index to small tab index. For example When click tab **2** to tab **1**

- **increase**

  From small tab index to large tab index. For example When click tab **1** to tab **2**

### transitionClass
CSS class name. Set by global config transition or navigator transition option. 

Default is: `h-nav-transition`.

::: warning
If you use navigator.push set the  transition option, You also need to provide the same class with back behavior. Because when you back, It will follow the previous effect(If not set back transition option and steps is 1, eq click the browser Back button)
:::
### pageClass
#### Page
class prefix: `h-nav-page-`
#### Tab Page
class prefix: `h-nav-tab-page-`

Only affected by [Tab Behavior](#tab-behavior).

<!--
 ```css
.h-nav-tab-behavior-reduce > .h-nav-transition,
.h-nav-tab-behavior-increase > .h-nav-transition{
  transition: all .3s ease;
}
``` 
-->

<!-- Example: [Tab Pages Slide](https://hezedu.github.io/history-navigation-vue/examples/transition-of-tab-pages-slide.html) -->
### CSS Var
Provides some CSS variables for transition acceleration effect.

- `--h-nav-distance`

  Distance between pages. For example when used `this.$navigator.back(2)`, the var will be `-2`.
  ```css
  .h-nav-behavior-back > .h-nav-transition > .h-nav-page-enter{
    transform: translateX(calc(100% * var(--h-nav-distance)));
  }
  ```

- `--h-nav-tab-distance`

  Distance between tab pages. For example When click tabBar **third** tab to **first** tab, the var will be `2`.



**Notice:** About [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var()), some older browsers may not supported(Android Webview 5+), But it doesn't matter.

 <!-- Example: [Tab Pages Slide Using Css Var](https://hezedu.github.io/history-navigation-vue/examples/transition-of-tab-pages-slide-css-var.html) -->
