<template>
  <div class="h-nav-page" :class="route.className">
    <template v-if="isLoad">
      <transition name="h-nav-page-container" :appear="true">
        <div ref="container" class="h-nav-page-container" v-show="isActive">
          <component :is="route.pageKey" />
        </div>
      </transition>
    </template>
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
    }
  },
  data(){
    const isLoad = this.$navigator.currentRoute.behavior === 'loaded';
    return {
      currentRoute: this.$navigator.currentRoute,
      isLoad
    }
  },
  computed: {
    isActive(){
      return this.currentRoute.key === this.route.key;
    }
  },
  watch: {
    isActive(){
      this._handleShowHide();
    }
  },
  methods: {
    _handleShowHide(){
      if(this.isShow){
        this.$emit(PAGE_E_SHOW_NAME);
      } else {
        this.$emit(PAGE_E_HIDE_NAME);
      }
    }
  },
  created(){
    console.log('isActive', this.isActive, this.isShow)
  },
  mounted(){
    if(this.isLoad){ // For pre rendering or server rendering
      this.$emit(PAGE_E_SHOW_NAME);
      return;
    }
    setTimeout(() => {
      console.log('mounted setTimeout')
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

    // // Unlike window app. 
    // // It's like wehn input dom removed the blur event also trigger. 
    // // It's will trigger hide event before destroy.
    // if(this.isActive){
    //   this.$emit(PAGE_E_HIDE_NAME);
    // }
    this.isLoad = false;
  }
}

</script>