<style>
.h-nav-tabbar{
  box-sizing: border-box;
  border-top: 1px solid #c7c7c7;
  display: flex;
  justify-content: space-around;
  background-color: #eee;
}
.h-nav-tabbar {
  height: 48px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
}

.h-nav-tab-page  {
  height: calc(100% - 48px);
}

.h-nav-tab-page > .h-nav-modal {
  height: calc(100% + 48px);
}

.h-nav-tab{
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #333;
  flex-direction: column;
}

.h-nav-tab.h-nav-active{
  color: #3eaf7c;
}
.h-nav-tab-icon{
  font-size: 26px;
  width: 26px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  margin-bottom: 4px;
}
.h-nav-tab-text{
  font-size: 16px;
  line-height: 1;
}
.h-nav-tab-icon + .h-nav-tab-text{
  font-size: 12px;
}
</style>

<template>
<div class="h-nav-tabbar">
  <Navigator v-for="(v, index) in list" 
    :key="v.pagePath" 
    class="h-nav-tab"
    :isActive="currentIndex === index"
    :url="v.pagePath" 
    type="switchTab">
    <div class="h-nav-tab-icon" :class="v.icon" v-if="v.icon" />
    <div class="h-nav-tab-text">{{v.text}}</div>
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