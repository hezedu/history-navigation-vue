<template>
<div class="index_diff_page index_diff_page_wrap">
  <div class="index_diff_page_titlebar">
    <span class="index_diff_page_back" :class="{index_diff_page_back_active: isBackActive}">Back</span>
    Detail</div>
  <div class="index_diff_page_inner">
    <div class="index_diff_page_detail">15</div>
  </div>
</div>

  
</template>
<script>
const BACK_ACTIVE_TIME = 300;
const STAY_TIME = 1000;
import TimeoutMixin from './timeout-mixin';
export default {
  mixins: [TimeoutMixin],
  data(){
    return {
      isBackActive: false
    }
  },
  mounted(){
    this.timeout(() => {
      this.isBackActive = true;
      this.timeout(() => {
        this.$emit('diffBackToList');
      }, BACK_ACTIVE_TIME)
    }, STAY_TIME);

  }
}
</script>