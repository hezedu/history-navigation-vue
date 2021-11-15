<template>
<transition name="h-nav-page" :appear="true">
  <div class="h-nav-tabs-ctrler h-nav-tabs-wrap" v-show="isActive">
    <transition-group 
      class="h-nav-tab-pages-wrap"
      tag="div" 
      :class="'h-nav-tab-behavior-' + tabBehavior" 
      :style="{'--h-nav-tab-distance': tabBehaviorDistance}"
      enter-class=""
      leave-class=""
      enter-to-class=""
      leave-to-class=""
      enter-active-class="h-nav-tab_page_load"
      leave-active-class="h-nav-tab_page_unload">

      <div class="h-nav-tab-page-handle" 
          v-for="v in tabStackMap"
          :class="traClassName"
          :style="v.isClean ? 'transition: none!important; animation: none!important;' : ''"
          :key="v.tabIndex">
          <Page
            transitionName="h-nav-tab-page"
            :v="v"
            :isActive="isActive && (currTabPage.tabIndex === v.tabIndex)"
            :isFirstLoad="isFirstLoad"
            :globalPageStyle="globalPageStyle"></Page>
      </div>
    </transition-group>

    <TabBar :list="tabList" :currentIndex="currTabPage.tabIndex" />
  </div>
</transition>
</template>
<script>
import Page from './page.vue';
import TabBar from './tab-bar.vue';

export default {
  name: "HistoryNavigationTabBarController",
  components: {
    Page,
    TabBar
  },
  props: {
    currTabPage: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    },
    isFirstLoad: {
      type: Boolean,
      required: true
    },
    traClassName: {
      type: String
    },
    globalPageStyle: undefined,

    tabList: Array,
    tabStackMap: Object
  },
  
  data(){
    return {
      tabBehavior: '_inherit',
      tabBehaviorDistance: 0
    }
  },
  watch: {
    'currTabPage.tabIndex'(newVal, oldVal){
      const distance = newVal - oldVal;
      let type = distance > 0 ? 'increase' : 'reduce';
      this.tabBehaviorDistance = distance;
      this.tabBehavior = type;
    },
    isActive(){
      this.tabBehavior = '_inherit';
      // if(newVal){
      //   this.tabBehavior = 'enter';
      // } else {
      //   this.tabBehavior = 'leave';
      // }
    }
  },
  created(){
    console.log('tab ctrler created')
  }
}
</script>