<template>
<div class="index_page">
  <div class="wrap">
    <!-- <img class="big_img" src="/static/logo.png" /> -->
    <h1>Vue Multi</h1>
    <!-- <h1>VueNavigationController</h1>controller -->
    <h2>
      The <b>Multi-page navigation</b> for <b>Vue</b> single-page apps
      <!--
      vue-nav-ctrl
      vue-navigation-controller
      The <b>Multi-page navigation</b> for your <b>Vue</b> single-page apps<br> -->
      
      <!-- single-to-multi-page navigation apps.
      The navigation single-to-multi -->
     <!-- Generate multiple-pages in the single-page application.
      Routing and navigation for your single-page application. 
     Routing and navigation for your React Native apps
     The Multi-Page navigation for your Vue web apps on the single-page.
     
     The multi-page navigation in the Vue single-page apps.
     The multi-Page navigation on the Vue single-page apps.
     The multi-Page navigation for your Vue single-page apps.

     Generate multiple-pages in the single-page application.
     Generate multiple-pages for your Vule single-page apps.
     The Multi-Page navigation in the single-page application. -->
    </h2>
    <div class="index_diff">
     <div class="index_diff_item">
          <div class="index_diff_title">Use official Vue Router</div>
          <div class="index_diff_body">
            <DiffStart v-if="currAni === 'start'" @diffStart="handleDiffStart" />
            <DiffList v-if="currAni === 'list'" :isBack="isDetailBacked" @diffGoToDetail="handleDiffGoToDetail" @diffGotoStart="handleDiffGotoStart" />
            <DiffDetail v-if="currAni === 'detail'" @diffBackToList="handleDiffBackToList" />
          </div>
     </div>
      <div class="index_diff_item" :class="'multi_direction_' + direction">
          <div class="index_diff_title">Use Vue Multi</div> 

 
          <transition-group class="vue_multi_transition_group index_diff_body" name="multi-page" tag="div">
            <div class="index_diff_body_multi" v-show="currAni === 'start'" key="start">
              <transition name="multi-page-inner">
                <DiffStart v-if="currAni === 'start'" />
              </transition>
            </div>
            <div class="index_diff_body_multi" v-show="currAni === 'list'" key="list">
              <transition name="multi-page-inner">
                <keep-alive v-if="currAni !== 'start'">
                  <DiffList v-if="currAni === 'list'"
                    type="multi"
                    :isBack="isDetailBacked"  />
                  </keep-alive>
                </transition>
            </div>
            <div class="index_diff_body_multi" v-show="currAni === 'detail'" key="detail">
              <transition name="multi-page-inner">
                <DiffDetail v-if="currAni === 'detail'" />
              </transition>
            </div>
            
            
          </transition-group>
        </div>
    </div>
    <div class="index_table_wrap">
      <table class="index_table" border="1">
        <tr>
          <th>Feature</th>
          <th>vue-router</th>
          <th>vue-multi</th>
        </tr>
        <tr>
          <td class="index_table_f">Previous pages keep alive</td>
          <td><i>No</i></td>
          <td><b>Yes</b></td>
        </tr>
        <tr>
          <td class="index_table_f">Behavior recognition</td>
          <td><i>No</i></td>
          <td><b>Yes</b></td>
        </tr>
        <tr>
          <td class="index_table_f">Page transition animation</td>
          <td><i>No</i></td>
          <td><b>Yes</b></td>
        </tr>
      </table>
    </div>
    <h1>Simple API</h1>
    <h2>Just 5</h2>
    <div>
      <h3>config</h3>
      <h3>NavigationCtroler</h3>
      <h3>Navigator</h3>
      <h3>$navigator</h3>
      <h3>$getPage</h3>
    </div>
    <div style="height:2000px" />
    <navigator to="/list"> List </navigator>
  </div>
</div>
  
</template>
<script>
import DiffList from './diff/list.vue';
import DiffDetail from './diff/detail.vue';
import DiffStart from './diff/start.vue';
import TimeoutMixin from './diff/timeout-mixin';

export default {
  mixins: [TimeoutMixin],
  components: {
    DiffStart,
    DiffList,
    DiffDetail
  },
  data(){
    return {
      now: Date.now(),
      h: 100,
      step: 0,
      currAni: 'start',
      isDetailBacked: false,
      direction: 'right'
    }
  },
  methods: {
    handleDiffEnd(){
      this.step = this.step === 2 ? 0 : this.step + 1;
    },
    test(){
      this.h = this.h === 100 ? 200 : 100;
    },
    handleDiffStart(){
      this.direction = 'right';
      this.currAni = 'list';
    },
    handleDiffGoToDetail(){
      this.direction = 'right';
      this.currAni = 'detail';
    },
    handleDiffGotoStart(){
        this.direction = 'left';
        this.isDetailBacked = false;
        this.currAni = 'start';
    },
    handleDiffBackToList(){
      this.isDetailBacked = true;
      this.direction = 'left';
      this.currAni = 'list';
    },
    // loop(){
    //   let a = this.currAni;
    //   if(a === 'start'){

    //     this.timeout(() => {
    //       this.currAni = 'list';
    //     }, 1000);

    //   } else if(a === 'list'){
    //      if(this.isDetailBacked){
    //         this.isDetailBacked = false;
    //         this.timeout(() => {
    //           this.currAni = 'start';
    //           this.loop();
    //         }, 1000);
    //       } else {
    //         this.currAni = 'detail';
    //       }
    //   } else if(a === 'detail'){
    //       this.currAni = 'list';
    //       this.isDetailBacked = true;
    //   }
    // },
    // // loop(){
    // //   let i = this.currAniIndex;
    // //   let nextIndex = i + 1;
    // //   if(nextIndex === this.animation.length){
    // //     nextIndex = 0;
    // //   }
    // //   let currItem = this.animation[i];
    // //   this.currAni = currItem;
    // //   this.$options.__tmp_timer = this.timeout(() => {
    // //       this.currAniIndex = nextIndex;
    // //       this.loop();
    // //     }, currItem.interval);
    // // },
    // clearLoop(){
    //   clearTimeout(this.$options.__tmp_timer);
    // }
  },
  destroyed(){
    console.log('index destroyed');
  }
}
</script>