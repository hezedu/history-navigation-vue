<template>
<div class="h-nav-tabbar">
  <navigator v-for="v in list" 
    :key="v.id" 
    class="h-nav-tab"
    :class="{'h-nav-tab-active': currentId === v.id}" 
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
  props: ['list', 'currentId'],
  name: "HistoryNavigationTabBar"
}
</script>