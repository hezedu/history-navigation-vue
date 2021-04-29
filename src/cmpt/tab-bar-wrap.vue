<template>
<div class="h-nav-page h-nav-tabbar-wrap">
  <Page v-for="v in tabStackMap"
    :key="v.cmptKey" 
    :cmptKey="v.cmptKey"
    :info="v.info" 
    :route="v.route"
    :isActive="isActive && (currentPage.route.trimedPath === v.route.trimedPath)"
    :isFirstLoaded="isFirstLoaded"
    :style="{left: (v.tabIndex - currentPage.tabIndex) + '00%', zIndex: v.tabIndex}"
  >
  </Page>
  <TabBar :list="tabList" :currentId="currentPage.id" :style="{zIndex: tabList.length}" />
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
      tabList: this.$navigator.tabList,
      currentPage: this.$navigator.currentPage
    }
  },
  computed: {
  },
  methods: {

  }
}
</script>