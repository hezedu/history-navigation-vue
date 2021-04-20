<template>
<div class="index_diff_page index_diff_page_wrap">
  <div class="index_diff_page_titlebar">
        <span class="index_diff_page_back" :class="{index_diff_page_back_active: isBackActive}">Back</span>
    List</div>
  <div ref="list" class="index_diff_page_inner index_diff_list">
    <div class="index_diff_loading_wrap" v-if="isLoading">
      <div class="index_diff_loading" /></div>
    <template v-else>
    <div class="index_diff_list_item" :class="{index_diff_list_item_active: activeIndex === v}" v-for="v in list" :key="v">{{v}}</div>

    <div class="index_diff_list_item index_diff_loading_more">
      <div class="index_diff_loading" />
    </div>

    </template>
  </div>
</div>

  
</template>
<script>
import { LOADING_STAY_TIME, 
  LIST_STAY_TIME, 
  LOADING_MORE_STAY_TIME, 
  ITEM_BEFORE_ACTIVE_STAY_TIME,
  ITEM_ACTIVE_TIME,
  BACK_ACTIVE_TIME,
  BEFORE_BACK_STAY_TIME } from './common';



import TimeoutMixin from './timeout-mixin';
export default {
  mixins: [TimeoutMixin],
  props: {
    isBack: {
      type: Boolean
    },
    aniName: {
      type: String
    },
    type: {
      type: String
    }
  },
  data(){
    return {
      list: [],
      isLoading: true,
      isBackActive: false,
      activeIndex: null,
      index: 0,
      activedCount: 0
    }
  },
  methods: {
    getData(callback){
      
      let i = this.index;
      let max = i + 10;
      let oldIndex = i;
      for(; i < max; i++){
        this.list.push(i);
      }
      this.index = i;
      const dom = this.$refs.list;
      this.$nextTick(() => {
      const h = dom.clientHeight;
      const interval = 1000 / 60;
      const scrollInterval = 800 / interval;
      const stMax = dom.scrollHeight - h;
      const stDist = stMax - dom.scrollTop;
      const stepDist = stDist / scrollInterval;
      let count = 0;
      let distr = 0;
      if(oldIndex > 1){
        distr = 400;
      }
      if(this.isBack){
        callback && callback();
        return;
      }
      const loopScroll = () => {
        this.timeout(() => {
            let stMax = dom.scrollHeight - h - distr;
            // count = count + 1;
            if(dom.scrollTop < stMax){
              dom.scrollTop = count + dom.scrollTop + stepDist;
              // console.log('stepDist', stMax, dom.scrollTop, stDist, scrollInterval, stepDist, dom.scrollTop, stMax)
              loopScroll();
            } else {
              callback && callback();
            }
        }, interval)
 
      }
      if(oldIndex == 0){
        this.timeout(() => {
          loopScroll();
        }, LIST_STAY_TIME);
      } else {
        this.timeout(() => {
          loopScroll();
        }, LOADING_MORE_STAY_TIME);
        
      }
      
      })


    },
    backToStart(){
          this.timeout(() => {
            this.isBackActive = true;
            this.timeout(() => {
              this.$emit('diffGotoStart');
            }, BACK_ACTIVE_TIME);
      }, BEFORE_BACK_STAY_TIME);
    }
  },
  activated(){
    if(this.activedCount === 0){
      this.activedCount = 1;
      return;
    }
    this.$refs.list.scrollTop = this.$options.__tmp_bak_list_scrolltop;

    this.timeout(() => {
      this.activeIndex = null;
    }, ITEM_ACTIVE_TIME);

    this.timeout(() => {
      this.backToStart();
    }, LOADING_STAY_TIME);
    
  },
  deactivated(){
    this.$options.__tmp_bak_list_scrolltop = this.$refs.list.scrollTop;
  },
  mounted(){
    this.timeout(() => {
      this.isLoading = false;

        this.getData(() => {
          if(this.isBack){
            // un multi
            this.backToStart();
            // this.$emit('diffGotoStart');
            return;
          }
          this.timeout(() => {
            this.getData(() => {
              
              this.timeout(() => {
                this.activeIndex = 15;
                this.timeout(() => {
                  this.$emit('diffGoToDetail');
                }, ITEM_ACTIVE_TIME);
              }, ITEM_BEFORE_ACTIVE_STAY_TIME);

            });
          }, 800)
    
      });
    }, LOADING_STAY_TIME)

  }
}
</script>