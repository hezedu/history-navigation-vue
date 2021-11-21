# 指南
## 介绍
<!-- a native-like **Navigation** for web apps. -->
<!-- **history-navigation-vue** is A native-like **Navigation** for Web apps. It base on HTML5 [History](https://developer.mozilla.org/en-US/docs/Web/API/History) and implemented by [Vue](https://vuejs.org/). It is a multi-page **architecture** in the single-page, which can be perfectly combined with the system/browser **back button**, you can happily use it to build modern web apps with a native experience. -->

**history-navigation-vue** 是一个原生体验的 web 端页面导航， 它基于 HTML5 [History](https://developer.mozilla.org/en-US/docs/Web/API/History)， 由 [Vue](https://vuejs.org/) 实现。
- 它是在单页面上的多页架构。
- 它支持 Tabbar 模式。
- 它支持 Modal 模式。
- 它支持 "再按一次退出程序"。
- 它可以随意设置过渡效果。
- 它和浏览器/系统的**回退键**完美结合。
- 它很小， 不到 8 KiB min+gzip(CSS + JS)


## 兼容性
### 浏览器 / Webview
history-navigation-vue 需要 HTML5 [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) 并且没有备用措施。


<!-- 一些很老的浏览器可能不支持。你最好给个提示：
```js
if(!history || !history.pushState){
  var error = "Sorry, You Your browser doesn't support history";
  document.write(error.message);
  throw error;
}
``` -->

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
<link rel="stylesheet" href="..somedir/history-navigation-vue.min.css" />
<!-- js -->
<script src="..somedir/history-navigation-vue.min.js"></script>
```

## 教程
### Hello World
- 首先你需要设置一下全局配置，它是以 Vue 插件形式引入的。
- 你将会得到一个全局组件：`<NavigationController>`, 它是根容器。
- 你还会得到一个全局组件： `<Navigator>`, 有了它，你可以在不同页面跳转了。
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
[预览](https://hezedu.github.io/history-navigation-vue/examples/tabbar.html)



### Modal
你想要轻松获得一个按后退键能关闭的模态框么？
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
[预览](https://hezedu.github.io/history-navigation-vue/examples/modal.html)

### 再按一次退出程序
你想在 PWA 上也能 “再按一次退出程序” 么？
```js{10,13-27}
var config = {
  pages: [
    {
      path: '/',
      component: {
        template: '<h1>Press Back Again to Exit</h1>'
      }
    }
  ],
  onExit: againToExit(2000, 'Press Back Again to Exit')
}

function againToExit(interval, tips){
  let isAgain = false;
  return function handleExit(e){
    if(e.isTabPage() || e.isHomePage()){
      if(!isAgain){
        e.preventDefault();
        isAgain = true;
        window.$simpleTips.tips(tips);
        setTimeout(() => {
          isAgain = false;
        }, interval);
      }
    }
  }
}
// ...
```
[预览](https://hezedu.github.io/history-navigation-vue/examples/graceful-exit.html)

### 过渡
默认，本项目提供一些简单过渡效果。 你可以改变它, 只需修改 CSS.
::: warning
请注意性能问题，尤其是在移动端。
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
[预览](https://hezedu.github.io/history-navigation-vue/examples/transition-simple.html)
