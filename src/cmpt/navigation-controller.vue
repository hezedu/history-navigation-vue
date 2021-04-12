
<template>
  <transition-group  class="vue-multi-nav-ctrler" :class="'vue-multi-direction-' + (currentRoute.behavior === 'back' ? 'left' : 'right')" name="vue-multi-page" tag="div">
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
      // stack: [],
      // isReady: false,
      stackMap: this.$navigator.stackMap,
      currentRoute: this.$navigator.currentRoute
    }
  },
  created(){
    this.$navigator.start(this.entry);
    // this.$emit('launch', (path) => {
    //   this.$navigator.start(path); 
    //   this.isReady = true;
    // });
  }
}
</script>
