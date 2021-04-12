<template>
<div class="vue_multi_page">
  <component :is="route.pageKey" v-if="isLoad" />
</div>
</template>
<script>

export default {
  name: 'MultiPage',
  __IS_MULTI_PAGE__: true,
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
        this.$emit('show');
      } else {
        this.$emit('hide');
      }
    }
  },
  // created(){
  //   this.$nextTick(() => {
  //     this.isLoad = true;
  //     this.$emit('show');
  //   })
  // },
  mounted(){

    setTimeout(() => {
      this.isLoad = true;
      this.$emit('show');
    });

  },
  beforeDestroy(){
    if(this.isShow){
      this.$emit('hide');
    }
    this.isLoad = false;
  },
  // destroyed(){
  //   console.log('page destroyed');
  // }
}
</script>