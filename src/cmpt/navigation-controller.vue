
<template>
  <transition-group 
    class="h-nav-nav-ctrler" 
    :class="'h-nav-behavior-' + currentRoute.behavior" 
    name="h-nav-page" tag="div">
    <Page v-for="v in stackList" 
    :key="v.key" 
    :route="v" 
    :isActive="v.key === currentRoute.key"
    :style="{left: (v.key - currentRoute.key) + '00%'}" />
  </transition-group>
</template>
<script>
import Page from './page.vue';
export default {
  name: 'HistoryNavigationController',
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
  computed: {
    stackList(){
      const map = this.stackMap;
      return Object.keys(map).map(function(k) {
        return map[k];
      })
    }
  },
  created(){
    this.$navigator._load(this.entry);
  }
}
</script>
