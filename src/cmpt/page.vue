<template>
<div class="vue_multi_page">
  <component :is="route.pageKey" v-if="isLoad" />
</div>
</template>
<script>
import { _PAGE_E_SHOW_NAME, _PAGE_E_HIDE_NAME } from '../constant';
export default {
  name: 'MultiPage',
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
    isShow: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return {
      isLoad: false
    }
  },
  watch: {
    isShow(){
      this.handleShowHide();
    }
  },
  methods: {
    handleShowHide(){
      if(this.isShow){
        this.$emit(_PAGE_E_SHOW_NAME);
      } else {
        this.$emit(_PAGE_E_HIDE_NAME);
      }
    }
  },
  mounted(){
    
    setTimeout(() => {
      if(this.$options._tmp_is_before_destroy){
        return;
      }
      // If don't use setTimeout, the next page's document addEventListener click will trigger in current page.
      this.isLoad = true;
      this.$emit(_PAGE_E_SHOW_NAME);
    });

  },
  beforeDestroy(){
    if(!this.isLoad){
      return;
    }
    this.$options._tmp_is_before_destroy = true;
    // Unlike window app. like input focus. It's will trigger hide event before destroy.
    if(this.isShow){
      this.$emit(_PAGE_E_HIDE_NAME);
    }
    this.isLoad = false;
  },
  // destroyed(){
  //   console.log('page destroyed');
  // }
}
</script>