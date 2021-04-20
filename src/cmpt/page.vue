<template>
  <div class="h-nav-page" 
    :class="'h-nav-page-' + (isActive ? 'active' : 'unactive')" 
    :style="{zIndex: route.key}" 
    @transitionend="handleTransitionEnd" 
    @transitionstart="handleTransitionStart">
    <div class="h-nav-page-container" v-show="isShow" v-if="isLoad">
      <component :is="route.pageKey"   />
    </div>
  </div>
</template>
<script>
import { PAGE_E_SHOW_NAME, PAGE_E_HIDE_NAME } from '../constant';
export default {
  name: 'HistoryNavigationPage',
  provide(){
    return {
      $page: this
    }
  },
  props: {
    route: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return {
      isLoad: false,
      isShow: this.isActive
    }
  },
  watch: {
    isActive(){
      this.handleShowHide();
    }
  },
  methods: {
    handleTransitionStart(){
      if(this.isActive && !this.isShow){
        this.isShow = true;
      }
    },
    handleTransitionEnd(){
      if(!this.isActive && this.isShow){
        this.isShow = false;
      }
    },
    handleShowHide(){
      if(this.isActive){
        this.$emit(PAGE_E_SHOW_NAME);
      } else {
        this.$emit(PAGE_E_HIDE_NAME);
      }
    }
  },
  mounted(){
    
    setTimeout(() => {
      if(this.$options._tmp_is_before_destroy){
        return;
      }
      // If don't use setTimeout, 
      // the next page's document addEventListener click will trigger in current page.
      this.isLoad = true;
      this.$emit(PAGE_E_SHOW_NAME);
    });

  },
  beforeDestroy(){
    if(!this.isLoad){
      return;
    }
    this.$options._tmp_is_before_destroy = true;
    // Unlike window app. 
    // It's like wehn input dom removed the blur event also trigger. 
    // It's will trigger hide event before destroy.
    if(this.isActive){
      this.$emit(PAGE_E_HIDE_NAME);
    }
    this.isLoad = false;
  },
  // destroyed(){
  //   console.log('page destroyed');
  // }
}
</script>