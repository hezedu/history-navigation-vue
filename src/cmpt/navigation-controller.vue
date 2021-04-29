
<template>
  <transition-group
    class="h-nav-ctrler" 
    :class="'h-nav-behavior-' + behavior.type"
    @before-leave="handleBeforeLeave"
    name="h-nav-page" tag="div">
    <component v-for="v in stackMap" 
    :is="v.isTab ? 'TabWrap' : 'Page'"
    :key="v.stateKey" 
    :cmptKey="v.cmptKey"
    :info="v.info" 
    :route="v.route"
    :isActive="v.stateKey === currentPage.stateKey"
    :isFirstLoaded="behavior.type === 'loaded'"
    :style="{left: (v.stateKey - currentPage.stateKey) + '00%', zIndex: v.stateKey}" />
  </transition-group>
</template>
<script>
import Page from './page.vue';
import TabWrap from './tab-bar-wrap.vue';
export default {
  components: {
    Page,
    TabWrap
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
      currentPage: this.$navigator.currentPage
    }
  },
  methods: {
    handleBeforeLeave(el){
      console.log('handleBeforeLeave', el)
    }
  },
  created(){
    this.$navigator._load(this.entryPagePath);
  }
}
</script>
