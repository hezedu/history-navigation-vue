
<template>
<transition-group class="h-nav-ctrler"
  :class="'h-nav-behavior-' + behavior.type"
  :style="{'--h-nav-distance': behavior.distance}"
  tag="div"
  enter-class=""
  leave-class=""
  enter-to-class=""
  leave-to-class=""
  enter-active-class="h-nav--page_load" 
  leave-active-class="h-nav--page_unload">


    <div 
      class="h-nav-page-handle" 
      v-for="v in stackMap" 
      :key="v.stackId" 
      :class="transition.className"
      :style="v.isClean ? 'transition: none!important; animation: none!important;' : ''">
   
      <TabCtrler v-if="v.isTab"
        :key="v.stackId"
        :traClassName="transition.className"
        :currTabPage="v"
        :style="[{zIndex: v.stateKey}]"
        :isActive="v.stackId === currentPage.stackId"
        :isFirstLoad="isFirstLoad"
      />
    
      <Page v-else
        transitionName="h-nav-page"
        :key="v.stackId"
        :v="v"
        :isActive="v.stackId === currentPage.stackId"
        :isFirstLoad="isFirstLoad"
        ></Page>
        
    </div>
</transition-group>

</template>
<script>
import Page from './page.vue';
import TabCtrler from './tab-bar-controller.vue';

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
      isFirstLoad: true,
      stackMap: this.$navigator._h.stackMap,
      behavior: this.$navigator._h.behavior,
      currentPage: this.$navigator._h.currentPage,
      globalPageStyle: this.$navigator._h._global.pageStyle,
      transition: this.$navigator._h._tra
    }
  },

  created(){
    this.$navigator._h._load(this.entryPagePath);
    this.$nextTick(() => {
      this.isFirstLoad = false;
    })
    
  },
  destroyed(){
    this.$navigator._h.destroy();
  }
}
</script>
