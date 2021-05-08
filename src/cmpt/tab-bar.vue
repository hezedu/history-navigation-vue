<template>
<div class="h-nav-tabbar">
  <navigator v-for="(v, i) in list" 
    :key="v.pagePath" 
    class="h-nav-tab"
    :class="{'h-nav-tab-active': currentIndex === i}" 
    :url="v.pagePath" 
    type="switchTab">
    {{v.text}}
  </navigator>
  </div>
</template>
<script>
import navigator from './navigator.vue'
export default {
  components: { navigator },
  props: ['list', 'currentIndex'],
  name: "HistoryNavigationTabBar"
}
</script>