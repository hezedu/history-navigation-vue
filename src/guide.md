# Guide
## Introduction
<!-- a native-like **Navigation** for web apps. -->
<!-- **history-navigation-vue** is A native-like **Navigation** for Web apps. It base on HTML5 [History](https://developer.mozilla.org/en-US/docs/Web/API/History) and implemented by [Vue](https://vuejs.org/). It is a multi-page **architecture** in the single-page, which can be perfectly combined with the system/browser **back button**, you can happily use it to build modern web apps with a native experience. -->

**history-navigation-vue** is a multi-page **navigation** on single-page apps. It base on HTML5 [History](https://developer.mozilla.org/en-US/docs/Web/API/History) and implemented by [Vue](https://vuejs.org/).
<!-- - It is a multi-page **architecture** on the single-page. -->
- It solved the pain points of single-page apps(See [Compared with the normal single-page apps](/#index-compared)).
- It supports tabBar mode.
- It can set various transition effects at will.
- It can be perfectly combined with the system/browser **back button**. 

You can use it happily to build modern web apps with a **native experience**. 

## Compatibility Note
### Browser / Webview
history-navigation-vue required HTML5 [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) and not has fallback. Some very old browsers may not supported. You’d better check first and provide hints:
```js
if(!history || !history.pushState){
  var error = "Sorry, You Your browser doesn't support history";
  document.write(error.message);
  throw error;
}
```
### Vue
Required Vue version is **2.1.8+**. 

Vue **3** is not currently supported.
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
<link rel="stylesheet" href="..somedir/dist/history-navigation-vue.min.css" />
<!-- js -->
<script src="..somedir/dist/history-navigation-vue.min.js"></script>
```

## Tutorials
### Hello Wrold
- First you need set up the global config and Install as a Vue plugin, config must have pages option:
  ```js
  Vue.use(historyNavigationVue.plugin, {
    pages: [
      {
        path: '/',
        component: {
          template: '<h1>Hello Wrold!</h1>'
        }
      }
    ]
  });
  ```
- You will get a global component `<NavigationController>`. It's the **root container**. Put it in the template:
```js
new window.Vue({
  el: '#app',
  template: '<NavigationController />'
});
```
Finished! 

<!-- Example: [Source](https://github.com/hezedu/history-navigation-vue/tree/main/docs/examples/hello-world.html)  -->
[Preview](https://hezedu.github.io/history-navigation-vue/examples/hello-world.html) 
<!-- [Go here to see Simple Single HTML Example](/examples.html#hello-world) -->

### Jumping between pages
You will also get another global component: `<Navigator>`, With it, You can use it to jump between different pages.

Add a new page **/detail** and modify the `config.pages`:

```js{7,16}
[
  {
    path: '/',
    component: {
      template: `<div>
        <h1>Hello Wrold!</h1>
        <Navigator url="/detail">To Detail</Navigator>
      </div>`
    }
  },
  {
    path: '/detail',
    component: {
      template: `<div>
        <h1>Detail</h1>
        <Navigator type="back">Back</Navigator>
      </div>`
    }
  }
]
```
Finished! 

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
Finished! 

<!-- simple single HTML Example -->
<!-- [Source](https://github.com/hezedu/history-navigation-vue/tree/main/docs/examples/tabbar.html) -->
[Preview](https://hezedu.github.io/history-navigation-vue/examples/tabbar.html)

### Transition
For performance, this project does not provide any transition effect. We a provide powerful CSS-based API. You can configure it globally, or you can set it every routing.

```css
.h-nav-behavior-push > .h-nav-transition,
.h-nav-behavior-back > .h-nav-transition,
.h-nav-behavior-replace > .h-nav-transition{
  transition: all .3s ease;
}

.h-nav-behavior-push > .h-nav-transition > .h-nav-page-enter,
.h-nav-behavior-back > .h-nav-transition > .h-nav-page-leave-to,
.h-nav-behavior-replace > .h-nav-transition > .h-nav-page-enter {
  transform: translateX(100%);
}
```
[Preview](https://hezedu.github.io/history-navigation-vue/examples/transition-simple.html)

<!-- It can recognize `back` / `push` / `replace` behavior, and make corresponding effects. In addition, we also have some extended behaviors, Some of them have no transition by default(such as tab switching). You can enable it by writing CSS. We have a strong [CSS API](/api.html#transition-css). You can modify the default like this:
```css
.h-nav-behavior-push  > .h-nav-transition > .h-nav-page-leave-to,
.h-nav-behavior-back > .h-nav-transition > .h-nav-page-enter{
  left: -100%;
}
```
You can also set different transitions at will through the navigator:
```html
<Navigator url="/foo" transition="some-custom">Foo</Navigator>
```
It can also easily cooperate with third-party libraries such as [animate.css](https://animate.style/): -->

<!-- Example: -->
<!-- [Source](https://github.com/hezedu/history-navigation-vue/tree/main/docs/examples/transition-with-amimate.html) -->



