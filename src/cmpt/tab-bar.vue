<template>
<div class="h-nav-tabbar">
  <Navigator v-for="(v, index) in list" 
    :key="v.pagePath" 
    class="h-nav-tab"
    :class="{'h-nav-tab-active': currentIndex === index}" 
    :url="v.pagePath" 
    type="switchTab">
    {{v.text}}
  </Navigator>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    currentIndex: {
      type: Number,
      required: true
    }
  },
  name: "HistoryNavigationDefTabBar"
}
</script>