<template>
<div class="h-nav-page h-nav-tabs-ctrler">
  <div class="h-nav-tabs-container">
    <Page v-for="v in tabStackMap"
      :key="v.cmptKey" 
      :cmptKey="v.cmptKey"
      :info="v.info" 
      :route="v.route"
      :isActive="isActive && (route.trimedPath === v.route.trimedPath)"
      :isFirstLoaded="isFirstLoaded"
      :style="{left: (v.info.tabIndex - info.tabIndex) + '00%', zIndex: v.info.tabIndex}"
    >
    </Page>
  </div>
  <TabBar :list="tabList" :currentId="info.id" :style="{zIndex: tabList.length}" />
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
  props: ['isFirstLoaded', 'info', 'route', 'isActive'],
  name: "HistoryNavigationTabBarWrap",
  data(){
    return {
      tabStackMap: this.$navigator.tabStackMap,
      tabList: this.$navigator.tabList
    }
  }
}
</script>