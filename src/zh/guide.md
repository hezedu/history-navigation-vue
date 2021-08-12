# 指南
## 介绍
<!-- a native-like **Navigation** for web apps. -->
<!-- **history-navigation-vue** is A native-like **Navigation** for Web apps. It base on HTML5 [History](https://developer.mozilla.org/en-US/docs/Web/API/History) and implemented by [Vue](https://vuejs.org/). It is a multi-page **architecture** in the single-page, which can be perfectly combined with the system/browser **back button**, you can happily use it to build modern web apps with a native experience. -->

**history-navigation-vue** 是一个原生体验的 web 端页面导航， 它基于 HTML5 [History](https://developer.mozilla.org/en-US/docs/Web/API/History)， 由 [Vue](https://vuejs.org/) 实现。
- 它是在单页面上的多页架构。
- 它旨在解决单页面应用的痛点(详见 [和普通单页面应用对比](/zh/#index-compared))。
- 它支持 tabBar 模式。
- 它可以随意设置过渡效果。
- 它和浏览器/系统的**回退键**完美结合. 

你可以开心的用它来构建原生体验的现代 web apps。

## 兼容性
### 浏览器 / Webview
history-navigation-vue 需要 HTML5 [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) 并且没有备用措施。一些很老的浏览器可能不支持。你最好给个提示：
```js
if(!history || !history.pushState){
  var error = "Sorry, You Your browser doesn't support history";
  document.write(error.message);
  throw error;
}
```
### Vue
需要 **2.1.8+**. 

Vue **3** 暂不支持。
## 安装
### NPM
```shell
npm install history-navigation-vue
```
#### 由 Webpack 加载
```js
import 'history-navigation-vue/dist/history-navigation-vue.css';
import * as historyNavigationVue from 'history-navigation-vue';
```
### HTML 直接用 `<script>` 引用
直接下载并用 `<script>` 标签引入，`historyNavigationVue` 会被注册为一个全局变量。

编译好的文件在包含在 npm 包的 `dist` 目录下：
```html
<!-- css -->
<link rel="stylesheet" href="..somedir/dist/history-navigation-vue.min.css" />
<!-- js -->
<script src="..somedir/dist/history-navigation-vue.min.js"></script>
```

## 教程
### Hello Wrold
- 首先你需要设置一下全局配置，它是以 Vue 插件形式引入的，配置的 pages 选项必须:
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
- 你将会得到一个全局组件： `<NavigationController>`. 它就是根容器，把它放到模版里:
```js
new window.Vue({
  el: '#app',
  template: '<NavigationController />'
});
```
完成了! 

<!-- Example: [Source](https://github.com/hezedu/history-navigation-vue/tree/main/docs/examples/hello-world.html)  -->
[预览](https://hezedu.github.io/history-navigation-vue/examples/hello-world.html) 
<!-- [Go here to see Simple Single HTML Example](/examples.html#hello-world) -->

### 不同的页面跳转
你还会得到一个全局组件： `<Navigator>`, 有了它，你可以在不同页面跳转了。

添加一个新页面 **/detail** 然后修改 `config.pages`:

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
完成了! 

[预览](https://hezedu.github.io/history-navigation-vue/examples/two-pages.html)


### Tabbar
如果设计稿上有 tabbar 在底部， 但这是一个 web 项目，该怎么办？

不要慌，有了这个项目，只需要添加 `tabBar` 选项：
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
完成了! 

<!-- simple single HTML Example -->
<!-- [Source](https://github.com/hezedu/history-navigation-vue/tree/main/docs/examples/tabbar.html) -->
[预览](https://hezedu.github.io/history-navigation-vue/examples/tabbar.html)

<!-- ### 过渡
这个项目默认带了一些过渡，能够根据不同行为做出不同的效果。如果你不喜欢，你可以自定义。本项目拥有强大的基于 CSS 的 API，你可以全局配置，也可以在跳转时设置：
```html
<Navigator url="/foo" transition="some-custom">Foo</Navigator>
```
拜基于 CSS 的API 所赐，你可以轻松的结合一些第三方库使用，比如 [animate.css](https://animate.style/):
```css
.h-nav-behavior-replace> .my-ani {
  animation-duration: 1s;
}
.h-nav-behavior-replace > .my-ani > .h-nav-page-enter-active{
  animation-name: backInUp;
}
.h-nav-behavior-replace > .my-ani > .h-nav-page-leave-active{
  animation-name: backOutUp;
}
```
[预览](https://hezedu.github.io/history-navigation-vue/examples/transition-with-amimate.html) -->

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



