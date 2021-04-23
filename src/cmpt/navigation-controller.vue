
<template>
  <transition-group ref="group"
    class="h-nav-nav-ctrler" 
    :class="'h-nav-behavior-' + behavior.type"
    @before-leave="handleBeforeLeave"
    name="h-nav-page" tag="div">
    <Page v-for="v in stackMap" 
    :key="v.stateKey" 
    :stateKey="v.stateKey"
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
  methods: {
    handleBeforeLeave(el){
      console.log('handleBeforeLeave', el)
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
