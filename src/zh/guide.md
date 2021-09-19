# 指南
## 介绍
<!-- a native-like **Navigation** for web apps. -->
<!-- **history-navigation-vue** is A native-like **Navigation** for Web apps. It base on HTML5 [History](https://developer.mozilla.org/en-US/docs/Web/API/History) and implemented by [Vue](https://vuejs.org/). It is a multi-page **architecture** in the single-page, which can be perfectly combined with the system/browser **back button**, you can happily use it to build modern web apps with a native experience. -->

**history-navigation-vue** 是一个原生体验的 web 端页面导航， 它基于 HTML5 [History](https://developer.mozilla.org/en-US/docs/Web/API/History)， 由 [Vue](https://vuejs.org/) 实现。
- 它是在单页面上的多页架构。
- 它旨在解决单页面应用的痛点(详见 [和普通单页面应用对比](/zh/#index-compared))。
- 它支持 Tabbar 模式。
- 它支持 Modal 模式。
- 它可以随意设置过渡效果。
- 它和浏览器/系统的**回退键**完美结合。
- 它很小， 6.83 KiB min+gzip(CSS + JS)

<!-- 你可以开心的用它来构建原生体验的现代 web apps。 -->

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


### 过渡
默认，本项目不提供任何过渡效果。但我们提供强大的基于 CSS 的 API。你可以全局配置，也可以在跳转时设置。
::: 注意
请确保性能安全，如果你不精通 CSS 过渡/过画，很容易造成卡顿。那么还不如不设。
:::

#### 示例
性能安全的过渡:
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