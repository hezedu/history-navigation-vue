
<template>
  <transition-group
    class="h-nav-ctrler" 
    :class="'h-nav-behavior-' + behavior.type"
    name="h-nav-page" tag="div">
    <component v-for="v in stackMap" 
    :is="v.isTab ? 'TabCtrler' : 'Page'"
    :key="v.stackId"
    :stateKey="v.stateKey" 
    :cmptKey="v.cmptKey"
    :info="v.info" 
    :route="v.route"
    :isActive="v.stateKey === currentPage.stateKey"
    :isFirstLoaded="behavior.type === 'loaded'"
    :style="{left: ((v.stateKey - currentPage.stateKey) * pageIntervalOffsetX) + '%', zIndex: v.stateKey}" />
  </transition-group>
</template>
<script>
import Page from './page.vue';
import TabCtrler from './tab-bar-ctrler.vue';
export default {
  components: {
    Page,
    TabCtrler
  },
  name: 'HistoryNavigationController',
  props: {
    entryPagePath: {
      type: String
    }
  },

  data(){
    return {
      stackMap: this.$navigator.stackMap,
      behavior: this.$navigator.behavior,
      currentPage: this.$navigator.currentPage,
      pageIntervalOffsetX: this.$navigator._global.pageIntervalOffsetX
    }
  },
  created(){
    this.$navigator._load(this.entryPagePath);
  }
}
</script>
