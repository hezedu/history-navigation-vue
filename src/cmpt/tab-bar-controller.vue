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
          :style="v.isClean ? 'transition: none!important; animation: none!important;' : ''"
          :key="v.tabIndex">
          <Page
            transitionName="h-nav-tab-page"
            :path="v.path"
            :title="v.title"
            
            :isTab="v.isTab"
            :tabIndex="v.tabIndex"
            :stateKey="v.stateKey"
            :route="v.route"
            :style="{zIndex: v.tabIndex}"
            :isActive="isActive && (currTabPage.tabIndex === v.tabIndex)"
            :isFirstLoad="isFirstLoad"
            :class="v.className">
            <component :is="v.cmptKey" />
          </Page>
      </div>
    </transition-group>

    <TabBar :list="tabList" :currentIndex="currTabPage.tabIndex" :style="{zIndex: tabList.length}" />
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
    }
  },
  
  data(){
    return {
      tabStackMap: this.$navigator._h.tabStackMap,
      tabList: this.$navigator._h.tabList,
      tabBehavior: 'enter',
      tabBehaviorDistance: 0
    }
  },
  watch: {
    'currTabPage.tabIndex'(newVal, oldVal){
      const distance = newVal - oldVal;
      let type = distance > 0 ? 'greater' : 'smaller';
      this.tabBehaviorDistance = distance;
      this.tabBehavior = 'to-' + type;
    },
    isActive(newVal){
      if(newVal){
        this.tabBehavior = 'enter';
      } else {
        this.tabBehavior = 'leave'
      }
    }
  },
  created(){
    console.log('tab ctrler created')
  }
}
</script>