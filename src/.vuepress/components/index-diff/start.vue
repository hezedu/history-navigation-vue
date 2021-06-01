<template>
<div class="index_diff_page index_diff_page_wrap index_diff_start_wrap">
    <div class="index_diff_page_titlebar">
      Index
    </div>
    <div class="index_diff_start_top">
    <!-- <div class="index_diff_start_use"> Use </div> -->
     <b>Single-Page Apps</b>
      
  </div>
  <div class="index_diff_start_bottom">
    <div class="index_diff_start_link" :class="{index_diff_start_active: isActive}">Go to list page
    </div>
  </div>
</div>
</template>
<script>
import {STAY_TIME, ITEM_ACTIVE_TIME, AFTER_LOADING_STAY_TIME} from './common';
import TimeoutMixin from './timeout-mixin';
export default {
  mixins: [ TimeoutMixin ],
  props: {
    type: {
      type: String
    }
  },
  data(){
    return {
      text: this.type === 'normal' ? 'Vue Official Router' : 'History Navigation Vue',
      isLoading: true,
      isActive: false
    }
  },
  methods: {
    ani(){
    this.timeout(() => {
      
      // this.timeout(() => {
      //   this.isLoading = false;
        this.timeout(() => {
          this.isActive = true;
          this.timeout(() => {
            this.$emit('diffStart');
          }, ITEM_ACTIVE_TIME);
        }, AFTER_LOADING_STAY_TIME)
        
      // }, LOADING_STAY_TIME)
    }, STAY_TIME)
    }
  },
  mounted(){
    this.ani();



  }
}
</script>