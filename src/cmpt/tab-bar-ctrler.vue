<template>
<div class="h-nav-tabs-ctrler h-nav-tabbar-wrap">
  <transition-group class="h-nav-tabs-container" :class="tabBehavior" name="h-nav-page" tag="div">
    <div class="h-nav-page" 
         v-for="v in tabStackMap"
        :key="v.cmptKey"
        :style="{left: (v.tabIndex - tabIndex) + '00%', zIndex: v.tabIndex}">
        <Page
          v-bind="v"
          :isActive="isActive && (route.trimedPath === v.route.trimedPath)"
          :isFirstLoad="isFirstLoad"
        />
    </div>
  </transition-group>
  <transition name="h-nav-tabbar">
    <TabBar :list="tabList" :currentIndex="tabIndex" :style="{zIndex: tabList.length}" v-show="isActive" />
  </transition>
</div>
</template>
<script>
import Page from './page.vue';
import TabBar from './tab-bar.vue';
import { genPageProps } from './common';

export default {
  name: "HistoryNavigationTabBarController",
  components: {
    Page,
    TabBar
  },

  props: genPageProps(),
  
  data(){
    return {
      tabStackMap: this.$navigator._h.tabStackMap,
      tabList: this.$navigator._h.tabList,
      tabBehavior: ''
    }
  },
  watch: {
    'tabIndex'(newVal, oldVal){
      let type = newVal > oldVal ? 'greater' : 'smaller';

      this.tabBehavior = 'h-nav-tab-switch-' + type;
    }
  }
}
</script>