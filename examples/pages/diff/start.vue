<template>
<div class="index_diff_page index_diff_start_wrap">
  Start
</div>
</template>
<script>
// const TIME = 100;
// const TIME2 = 1500;
const STAY_TIME = 1500;
import TimeoutMixin from './timeout-mixin';
export default {
  mixins: [ TimeoutMixin ],
  // data(){
  //   return {
  //     opacity: 1
  //   }
  // },
  mounted(){
    this.timeout(() => {
      this.$emit('diffStart');
    }, STAY_TIME)
    // setTimeout(() => {
    //   this.opacity = 1;
    //   setTimeout(() => {
    //     this.$emit('diffStart');
    //   }, TIME2);
    // }, TIME)



  }
}
</script>