
<template>
  <transition-group ref="group"
    class="h-nav-nav-ctrler" 
    :class="'h-nav-behavior-' + behavior.type"
    name="h-nav-page" tag="div">
    <Page v-for="v in stackMap" 
    :key="v.key" 
    :cmptKey="v.cmptKey"
    :info="v.info" 
    :route="v.route"
    :isActive="v.key === currentPage.key"
    :isFirstLoaded="behavior.type === 'loaded'"
    :style="{left: (v.key - currentPage.key) + '00%'}" />
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
      behavior: this.$navigator.behavior,

      currentPage: this.$navigator.currentPage
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
