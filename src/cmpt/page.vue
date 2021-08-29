<template>
  <transition :name="transitionName" :appear="true">
    <div :class="transitionName" v-show="isActive">
      <div class="h-nav-page-main">
        <slot />
      </div>
      
      <div class="h-nav-modal"  v-for="v in modalList" :key="v.key" :style="{zIndex: v.key}"
      >
        <div :id="'h_nav_modal_' + v.key" />
      </div>

    </div>
  </transition>
</template>
<script>
import { PAGE_E_SHOW_NAME, PAGE_E_HIDE_NAME } from '../constant';

export default {
  name: 'HistoryNavigationPage',
  // components: {
  //   Modal
  // },
  provide(){
    return {
      $page: this
    }
  },
  props: {
    path: {
      type: String
    },
    modalList: Array,
    transitionName: {
      type: String,
      default: 'h-nav-page'
    },
    title: String,

    isTab: {
      type: Boolean,
      required: true
    },

    tabIndex: Number,

    stateKey: Number,
    
    route: {
      type: Object,
      required: true
    },

    isActive: {
      type: Boolean,
      required: true
    },
    
    isFirstLoad: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return {
      isLoad: this.isFirstLoad,
      modalCount: false,
      modalTop: 0
    }
  },
  watch: {
    isActive(){
      this._handleShowHide();
    }
  },
  methods: {
    showModal(){
      this.$navigator.modal();
      this.modalCount = this.modalCount + 1;
    },
    hideModal(){
      this.modalCount = this.modalCount - 1;
    },
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
      if(this.$options._tmp_is_before_destroy){
        return;
      }
      // If don't use setTimeout, 
      // the next page's document addEventListener click will trigger in current page.
      this.isLoad = true;
      this.$nextTick(() => {
        this.$emit(PAGE_E_SHOW_NAME);
      })
      
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
    if(this.isActive){
      this.$emit(PAGE_E_HIDE_NAME);
    }
    this.isLoad = false;
  }
}

</script>