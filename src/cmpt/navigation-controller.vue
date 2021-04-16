
<template>
  <transition-group  class="h-nav-nav-ctrler" :class="'h-nav-trf-dir-' + (currentRoute.behavior === 'back' ? 'left' : 'right')" name="h-nav-page" tag="div">
    <Page v-for="v in stackMap" 
    :key="v.key" 
    :route="v" 
    :isShow="v.key === currentRoute.key"
    v-show="v.key === currentRoute.key" />
  </transition-group>
</template>
<script>
import Page from './page.vue';
export default {
  name: 'MultiNavigationController',
  props: {
    entry: {
      type: String
    }
  },
  components: {
    Page
  },
  data(){
    return {
      stackMap: this.$navigator.stackMap,
      currentRoute: this.$navigator.currentRoute
    }
  },
  created(){
    this.$navigator.start(this.entry);
  }
}
</script>
