
<template>
  <transition-group ref="group"
    class="h-nav-nav-ctrler" 
    :class="'h-nav-behavior-' + currentRoute.behavior"
    name="h-nav-page" tag="div">
    <Page v-for="v in stackMap" 
    :key="v.key" 
    :route="v" 
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
  created(){
    this.$navigator._load(this.entry);
  },
  mounted(){
    console.log('this.$refs.group', this.$refs.group)
  }
}
</script>
