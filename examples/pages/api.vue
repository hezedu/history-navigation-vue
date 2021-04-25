<template>
<div class="api_wrap">
  <div class="wrap">
    <TopNav />
    <h1>API</h1>
    <h2>Required</h2>
    <ul>
      <li>history-navigation-vue requires the <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History" target="_blank">HTML5 history</a> API, and there is no fallback.</li>
      <li><a href="https://vuejs.org/" target="_blank">Vue</a> version >= <b>2.1.8</b> and not currently supported <b>3</b>.</li>
    </ul>
   
      <h2>Config</h2>

      <h2>Components</h2>
      <h3>NavigationController</h3>
      <h3>Navigator</h3>
      <h2>Prototype</h2>
      <h3>$navigator</h3>
      <h2>Mixins</h2>
      <h3>$page</h3>
      <h3>onShow / onHide</h3>
  </div>
  
</div>
</template>
<script>
import TopNav from './nav.vue';
export default {
  components: {
    TopNav
  }
}
</script>