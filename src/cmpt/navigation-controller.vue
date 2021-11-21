
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
        :tabStackMap="tabStackMap"
        :tabList="tabList"
        :traClassName="transition.className"
        :currTabPage="v"
        :style="[{zIndex: v.stateKey}]"
        :isActive="v.stackId === currentPage.stackId"
        :isFirstLoad="isFirstLoad"
        :globalPageStyle="globalPageStyle"
      />
    
      <Page v-else
        transitionName="h-nav-page"
        :key="v.stackId"
        :v="v"
        :isActive="v.stackId === currentPage.stackId"
        :isFirstLoad="isFirstLoad"
        :globalPageStyle="globalPageStyle"
        ></Page>
        
    </div>

    <div class="h-nav-not-support" key="not_support" v-if="isErr">
      <slot><h1>history-navigation-vue</h1>
      <p>Sorry, Your browser doesn't support HTML history API.</p></slot>
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
    const _h = this.$navigator._h;
    return {
      isErr: false,
      isFirstLoad: true,
      stackMap: _h.stackMap,
      behavior: _h.behavior,
      currentPage: _h.currentPage,
      globalPageStyle: this.$navigator.GLOBAL_CONFIG.pageStyle,
      transition: _h._tra,

      tabStackMap: _h.tabStackMap,
      tabList: _h.tabList
    }
  },
  methods: {
    _uniteDestroy(){
      this.$navigator._h.destroy();
    }
  },
  created(){
    const _h = this.$navigator._h;
    if(!_h.checkCompatibility()){
      this.isErr = true;
      return;
    }
    _h._load(this.entryPagePath);
    this.$nextTick(() => {
      this.isFirstLoad = false;
    });
  },

  destroyed(){
    this._uniteDestroy();
  },
  unmounted(){
    this._uniteDestroy();
  }
}
</script>
