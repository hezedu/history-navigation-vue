<template>
  <div class="h-nav-page" :class="info.className">
    <template v-if="isLoad">
      <transition name="h-nav-page-container" :appear="true">
        <div ref="container" class="h-nav-page-container" v-show="isActive">
          <component :is="cmptKey" />
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
    stateKey: {
      type: Number,
      required: true
    },
    cmptKey: {
      type: String,
      required: true
    },
    info: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    },
    isFirstLoaded: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return {
      isLoad: this.isFirstLoaded,
      currentPage: this.$navigator.currentPage
    }
  },
  watch: {
    isActive(){
      this._handleShowHide();
    }
  },
  methods: {
    _handleShowHide(){
      if(this.isActive){
        this.$emit(PAGE_E_SHOW_NAME);
      } else {
        this.$emit(PAGE_E_HIDE_NAME);
      }
    }
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