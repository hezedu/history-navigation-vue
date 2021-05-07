<template>
<div class="h-nav-page h-nav-tabs-ctrler">
  <transition-group class="h-nav-tabs-container" :class="tabBehavior" name="h-nav-page" tag="div">
    <Page v-for="v in tabStackMap"
      :key="v.stackId" 
      :cmptKey="v.cmptKey"
      :stateKey="stateKey"
      :info="v.info" 
      :route="v.route"
      :isActive="isActive && (route.trimedPath === v.route.trimedPath)"
      :isFirstLoaded="isFirstLoaded"
      :style="{left: (v.info.tabIndex - info.tabIndex) + '00%', zIndex: v.info.tabIndex}"
    >
    </Page>
  </transition-group>
  <transition name="h-nav-tabbar">
    <TabBar :list="tabList" :currentId="info.id" :style="{zIndex: tabList.length}" v-show="isActive" />
  </transition>
</div>
</template>
<script>
import Page from './page.vue';
import TabBar from './tab-bar.vue';
export default {
  components: {
    Page,
    TabBar
  },
  props: ['isFirstLoaded', 'info', 'route', 'isActive', 'cmptKey', 'stateKey'],
  name: "HistoryNavigationTabBarWrap",
  data(){
    return {
      tabStackMap: this.$navigator.tabStackMap,
      tabList: this.$navigator.tabList,
      tabBehavior: ''
    }
  },
  watch: {
    'info.tabIndex'(newVal, oldVal){
      let type = newVal > oldVal ? 'greater' : 'smaller';

      this.tabBehavior = 'h-nav-tab-switch-' + type;
    }
  }
}
</script>