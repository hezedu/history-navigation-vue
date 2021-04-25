<template>
<div class="index_page">
  <div class="wrap">

    <TopNav />
  <header>

    
    <h1>history-navigation-vue</h1>

    <!-- <navigator to="/list"> List </navigator>
    <br>
    <navigator to="/list" replace> replace List </navigator>
    <br>
    <navigator back> Back </navigator>
    <br>
    <navigator to="/" replace>Replace to Index</navigator>
    <br>
    <navigator to="/" relaunch>Relaunch to Index</navigator> -->
    <h2 class="index_desc">
      The native-like <b>Navigation</b> for web apps<br> Base on HTML5 <b>History</b><br>implemented by <b>Vue</b>
  
    </h2>
    </header>
    <div class="index_diff">
     <div class="index_diff_item">
          <div class="index_diff_title">Normal single-page app</div>
          <div class="index_diff_body">
            <DiffStart v-if="currAni === 'start'" @diffStart="handleDiffStart" type="normal" />
            <DiffList v-if="currAni === 'list'" type="normal" :isBack="isDetailBacked" @diffGoToDetail="handleDiffGoToDetail" @diffGotoStart="handleDiffGotoStart" />
            <DiffDetail v-if="currAni === 'detail'" type="normal" @diffBackToList="handleDiffBackToList" />
          </div>
     </div>
      <div class="index_diff_item">
          <div class="index_diff_title">Use history-navigation-vue</div>

          <div class="index_diff_body">
            <div class="index_diff_body_h_nav"
            :class="{index_diff_body_h_nav_first_load: firstLoad}"
            :style="{left: (currAniMap.start - currAniMap[currAni]) + '00%'}">

              <transition name="index_diff_fade">
                <DiffStart v-if="currAni === 'start'"  />
              </transition>

            </div>

            <div 
            class="index_diff_body_h_nav" 
            :style="{left: (currAniMap.list - currAniMap[currAni]) + '00%'}">

                <transition name="index_diff_fade">
                  <keep-alive v-if="currAni !== 'start'">
                    <DiffList v-if="currAni === 'list'"
                      :isBack="isDetailBacked"  />
                    </keep-alive>
                  </transition>
            </div>
            <div class="index_diff_body_h_nav" 
            :style="{left: (currAniMap.detail - currAniMap[currAni]) + '00%'}">
              <transition name="index_diff_fade">
                <DiffDetail v-if="currAni === 'detail'" />
              </transition>
            </div>

          </div>
        </div>
    </div>
    <div class="index_table_wrap">
      <h2>Compared with the Vue official Router</h2>
      <table class="index_table" border="1">
        <tr>
          <th style="font-weight: normal; color: #666;">Feature</th>
          <th>vue-router</th>
          <th>history-navigation-vue</th>
        </tr>
        <tr>
          <td class="index_table_f">Previous pages keep alive</td>
          <td><i>No</i></td>
          <td>
            <b>Yes</b>
          </td>
        </tr>
        <tr>
          <td class="index_table_f">Routing behavior recognition</td>
          <td><i>No</i></td>
          <!-- <td><b>push, back, replace, forward</b></td> -->
          <td><b>Yes</b></td>
          <!--  push, repalce, back, forwrd</td> -->
        </tr>
        <tr>
          <td class="index_table_f">Page transition animation</td>
          <td><i>No</i></td>
          <td><b>Yes</b></td>
        </tr>
        <tr>
          <td class="index_table_f">Back to the initial state of history</td>
          <td><i>No</i></td>
          <td><b>Yes</b></td>
        </tr>
      </table>
    </div>
    <!-- <h2>Quick example</h2> -->
    <!-- <h2>Simple to Use</h2> -->
    <h2>Quick example</h2>
    <div class="index_codepen_wrap">
      <iframe style="width: 100%; height: 100%" scrolling="no" title="MWJQORO" src="https://codepen.io/hezedu/embed/MWJQORO?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href='https://codepen.io/hezedu/pen/MWJQORO'>MWJQORO</a> by Du Wei
        (<a href='https://codepen.io/hezedu'>@hezedu</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
</div>
  <h2>The API is Simple</h2>
  <div class="index_get_start">
    <navigator to="/api">Get Started</navigator>
  </div>
  
    <!-- <h2>APIs is also simple</h2>
    Get a native experience quickly
    <div>
      <h3>config</h3>
      <h3>NavigationController</h3>
      <h3>Navigator</h3>
      <h3>$navigator</h3>
      <h3>$page</h3>
      <h3>onShow / onHide</h3>
    </div> -->
  </div>
  <footer>
    <div>
      Released under the <a href="https://opensource.org/licenses/MIT">MIT</a> License
    </div>
    Copyright © 2014-__NOW_YEAR__ hezedu
  </footer>
</div>
  
</template>
<script>
import DiffList from './diff/list.vue';
import DiffDetail from './diff/detail.vue';
import DiffStart from './diff/start.vue';
import TopNav from '../nav.vue';
import TimeoutMixin from './diff/timeout-mixin';


export default {
  mixins: [ TimeoutMixin ],
  components: {
    DiffStart,
    DiffList,
    DiffDetail,
    TopNav
  },
  data(){
    // let arr = [];
    // let i = 0;
    // for(;i < 99999; i++){
    //   arr.push(i);
    // }
    return {
      now: Date.now(),
      h: 100,
      step: 0,
      currAni: '',
      // perfList: arr,
      currAniMap: {
        'start': 1,
        'list': 2,
        'detail': 3
      },
      isDetailBacked: false,
      behavior: 'loaded',
      firstLoad: true
    }
  },
  methods: {
    handleDiffEnd(){
      this.step = this.step === 2 ? 0 : this.step + 1;
    },
    test(){
      this.h = this.h === 100 ? 200 : 100;
    },
    goToList(){
      this.$navigator.push('/list');
    },
    handleDiffStart(){
      this.behavior = 'push';
      this.currAni = 'list';
    },
    handleDiffGoToDetail(){
      this.behavior = 'push';
      this.currAni = 'detail';
    },
    handleDiffGotoStart(){
        this.behavior = 'back';
        this.isDetailBacked = false;
        this.currAni = 'start';
    },
    handleDiffBackToList(){
      this.isDetailBacked = true;
      this.behavior = 'back';
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
  mounted(){
    setTimeout(() => {
      this.currAni = 'start';
        this.firstLoad = false;
    }, 300)
  },
  destroyed(){
    console.log('index destroyed');
  }
}
</script>