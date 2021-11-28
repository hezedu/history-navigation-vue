# Guide
## Introduction
<!-- a native-like **Navigation** for web apps. -->
<!-- **history-navigation-vue** is A native-like **Navigation** for Web apps. It base on HTML5 [History](https://developer.mozilla.org/en-US/docs/Web/API/History) and implemented by [Vue](https://vuejs.org/). It is a multi-page **architecture** in the single-page, which can be perfectly combined with the system/browser **back button**, you can happily use it to build modern web apps with a native experience. -->

**history-navigation-vue** is a native-like Navigation for Web apps. It base on HTML5 [History](https://developer.mozilla.org/en-US/docs/Web/API/History) and implemented by [Vue](https://vuejs.org/).
- It is a multi-page architecture in the single-page apps.
- It supports Tabbar mode.
- It supports Modal mode.
- It supports "Press Back Again to Exit".
- It can set various transition effects at will.
- It can be perfectly combined with the system/browser **back button**. 
- It is small, less than 9 KiB min+gzip(CSS + JS).
<!-- You can use it happily to build modern web apps with a **native experience**.  -->

## Compatibility Note
### Browser / Webview
history-navigation-vue required HTML5 [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) and not has fallback.


 <!-- Some very old browsers may not supported. You’d better check first and provide hints:
```js
if(!history || !history.pushState){
  var error = new Error("Sorry, You Your browser doesn't support history");
  document.write(error.message);
  throw error;
}
``` -->


### Vue
Required Vue version is **2.1.8+**. 

Vue **3**: Not currently supported.

<!-- Due to some differences outside the documentation, it is currently **not supported**. -->

## Installation
### NPM
```shell
npm install history-navigation-vue
```
#### Load by Webpack
```js
import 'history-navigation-vue/dist/history-navigation-vue.css';
import * as historyNavigationVue from 'history-navigation-vue';
```
### HTML Direct include
Simply download and include with a script tag. `historyNavigationVue` will be registered as a global variable.

The built file is in the `dist` directory of the project
```html
<!-- css -->
<link rel="stylesheet" href="..somedir/history-navigation-vue.min.css" />
<!-- js -->
<script src="..somedir/history-navigation-vue.min.js"></script>
```

## Tutorials


### Hello World
- First you need set up the global config and Install as a Vue plugin.
- You will get a global component `<NavigationController>`, It's Root container.
- You will also get another global component:  `<Navigator>`, With it, You can use it to jump between different pages.
```js
window.Vue.use(window.historyNavigationVue.plugin, 
{
  pages: [
    {
      path: '/',
      component: {
        template: `<div>
          <h1>Hello</h1>
          <Navigator url="/detail">To Detail</Navigator>
        </div>`
      }
    },
    {
      path: '/detail',
      component: {
        template: `<div>
          <h1>World!</h1>
          <Navigator type="back">Back</Navigator>
        </div>`
      }
    }
  ]
});
new window.Vue({
  el: '#app',
  template: '<NavigationController class="root" />'
});
```
[Preview](https://hezedu.github.io/history-navigation-vue/examples/two-pages.html)


### Tabbar
If there is a tab bar at the bottom of your project design. But it's a web project. How to do?

With this project, Just Add an `tabBar` option:
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

<!-- simple single HTML Example -->
<!-- [Source](https://github.com/hezedu/history-navigation-vue/tree/main/docshttps://hezedu.github.io/history-navigation-vue/examples/tabbar.html) -->
[Preview](https://hezedu.github.io/history-navigation-vue/examples/tabbar.html)

### Modal
Do you want a modal box that can be closed when the back button is clicked?
```html{11-19,24-29}
<script type="text/x-template" id="modal">
  <div class="modal">
    <div class="modal-mask" @click="closeModal" />
    <div class="modal-main">
      <h1>{{text}}</h1>
      <button style="font-size: 20px;" @click="close">Close</button>
    </div>
  </div>
</script>
<script>
var Modal = {
  props: ['text'],
  template: '#modal',
  methods: {
    close(){
      this.$navigator.back();
    }
  }
};
var Index = {
  template : '<button @click="showModal">showModal</button>',
  methods: {
    showModal(){
        this.$navigator.modal({
            component: Modal
            propsData: {
              text: 'Hello Modal!'
            }
      });
    }
  }
}
// ...
</script>
```
[Preview](https://hezedu.github.io/history-navigation-vue/examples/modal.html)

### Press Back Again to Exit
<!-- ::: dange2r
Deprecated: Because JS cannot close the window by itself, import to [bug#1](https://github.com/hezedu/history-navigation-vue/issues/1), do not use it. It will be redesigned in the next release. Soon.
::: -->

Do you want to be able to "Press Back Again to Exit" on PWA?
```js{10-15}
var config = {
  pages: [
    {
      path: '/',
      component: {
        template: '<h1>Press Back Again to Exit</h1>'
      }
    }
  ],
  backAgainToExit: {
    maxInterval: 1500,
    onFirstTrigger() {
      window.$simpleTips.tips('Press Back Again to Exit');
    }
  }
}
// ...
```
[Preview](https://hezedu.github.io/history-navigation-vue/examples/press-back-again-to-exit.html)
### Transition
By default, this project provides some simple transitions. You can change it, Just modify the CSS.
::: warning
Please pay attention to performance, especially on mobile.
:::

#### Example
```css{3,11}
.h-nav-behavior-push > .h-nav-transition,
.h-nav-behavior-back > .h-nav-transition{
  transition: all 1s ease;
}
.h-nav-behavior-push > .h-nav-transition > .h-nav-page-enter,
.h-nav-behavior-back > .h-nav-transition > .h-nav-page-leave-to{
  transform: translateX(100%);
}
.h-nav-behavior-push > .h-nav-transition > .h-nav-page-leave-to,
.h-nav-behavior-back > .h-nav-transition > .h-nav-page-enter {
  transform: translateX(-33%);
}
```
[Preview](https://hezedu.github.io/history-navigation-vue/examples/transition-simple.html)




