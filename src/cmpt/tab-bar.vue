<style>
.h-nav-tabs-wrap{
  padding-bottom: 48px; /* tabbar height */
  box-sizing: border-box;
}

.h-nav-tabbar{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px; /* tabbar height */
  box-sizing: border-box;
  border-top: 1px solid #c7c7c7;
  display: flex;
  justify-content: space-around;
  background-color: #eee;
}

.h-nav-tab{
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #333;
}

.h-nav-tab.h-nav-actived{
  color: #3eaf7c;
}
</style>

<template>
<div class="h-nav-tabbar">
  <Navigator v-for="(v, index) in list" 
    :key="v.pagePath" 
    class="h-nav-tab"
    :actived="currentIndex === index"
    :url="v.pagePath" 
    type="switchTab">
    {{v.text}}
  </Navigator>
  </div>
</template>
<script>
export default {
  props: {
    list: { // Global config tabBar.list
      type: Array, 
      required: true
    },
    currentIndex: { // Current tab page's index
      type: Number,
      required: true
    }
  },
  name: "HistoryNavigationTabBar"
}
</script>