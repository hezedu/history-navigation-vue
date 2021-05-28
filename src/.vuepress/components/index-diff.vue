<template>
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
            :style="{left: ((currAniMap.start - currAniMap[currAni]) * 100) + '%', zIndex: 1}">

              <transition name="index_diff_inner_trf_wrap">
                <DiffStart v-if="currAni === 'start'"  />
              </transition>

            </div>

            <div 
            class="index_diff_body_h_nav" 
            :style="{left: ((currAniMap.list - currAniMap[currAni]) * 100) + '%', zIndex: 2}">

                <transition name="index_diff_inner_trf_wrap">
                  <keep-alive v-if="currAni !== 'start'">
                    <DiffList v-if="currAni === 'list'"
                      :isBack="isDetailBacked"  />
                    </keep-alive>
                  </transition>
            </div>
            <div class="index_diff_body_h_nav" 
            :style="{left: ((currAniMap.detail - currAniMap[currAni]) * 100) + '%', zIndex: 3}">
              <transition name="index_diff_inner_trf_wrap">
                <DiffDetail v-if="currAni === 'detail'" />
              </transition>
            </div>

          </div>
        </div>
    </div>
  
</template>
<script>
import DiffList from './index-diff/list.vue';
import DiffDetail from './index-diff/detail.vue';
import DiffStart from './index-diff/start.vue';

export default {
  components: {
    DiffStart,
    DiffList,
    DiffDetail
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
      currAni: 'start',
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
  },
  // mounted(){
  // },
  // destroyed(){
  //   console.log('index destroyed');
  // }
}
</script>
<style>

.index_diff{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1px;
}
.index_diff,
.index_diff_after{
  width: 100%;
  max-width: 532px;
  margin: 0 auto;
}
.index_diff_after{
  box-sizing: border-box;
  padding-right: 1.5em;
}
.index_diff , .index_diff * {
  box-sizing: border-box;
}

.index_diff_item{
  height: 100%;
  width: 230px;
  flex-shrink: 0;
  padding-top: 35px;
  height: 430px;
  background: #eee;
  position: relative;
  margin-bottom: 10px;
  margin: 0 18px 10px;
}




.index_diff_title{
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  line-height: 35px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  height: 35px;
  font-size: 16px;
}

.index_diff_item .loader{
  color: #000;
  font-size: 30px;
}

.index_diff_body{
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}

.index_diff_page{
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  overflow: auto;
}



.index_diff_loading_wrap{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
}

.index_diff_start_wrap{
  text-align: center;

}
.index_diff_start_top{
  padding-top: 20%;
}
.index_diff_start_use{
  color: #666;
  margin-bottom: .5em;
}
.index_diff_start_bottom{
  /* height: 200px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  position: absolute;
  width: 100%;
  left: 0; 
  bottom: 15%;
}

.index_diff_list_item {
  height: 100px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  border-radius: 3px;

}

@media (max-width: 532px){
  .index_diff {
    max-width: 100%;
    justify-content: space-around;
  }
  .index_diff_item{
    width: 48%;
    height: 89.7vw;
  }
  .index_diff_title {
    font-size: 12px;
  }

  .index_diff_after{
    padding-right: 0;
  }
}


.index_diff_page_wrap{
  padding-top: 30px;
}

.index_diff_page_inner{
  height: 100%;
  position: relative;
}
.index_diff_page_block {
  width: 100%;
   position: absolute;
   background-color: rgba(0, 0, 0, .7);
   color: red;
   line-height: 1.5;
   font-size: 13px;
   height: 3em;
   margin: auto;
   left: 0;
   top: 0;

   text-align: center;

}

.index_diff_page_titlebar{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ddd;
  color: #333;
}

.index_diff_page_back{
  position: absolute;
  top: 5px;
  left: 0;
  font-size: 12px;
  padding-left: 5px;
  padding-right: 5px;
  line-height: 20px;
  color: #000;
  border-radius: 2px;
}

.index_diff_list{
  padding: 10px;
  overflow: auto;
  pointer-events: none;
  scrollbar-color: #ddd transparent;
  scrollbar-width: thin;
}

.index_diff_list::-webkit-scrollbar{
  width: 5px;
  height: 100%;
}

::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 2px;
}

.index_diff_loading_more{
  height: 30px;
  font-size: 14px;
  color: #666;
  position: relative;
}


.index_diff_page_detail{
  padding: 1px;
  text-align: center;
  font-size: 50px;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.index_diff_body_h_nav{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
}

.index_diff_loading{
  cursor: auto;
}

.index_diff_loading::before {
  padding:0;
  margin:0;
  position: absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
  margin:auto;
  height: 13px;
  width: 13px;
  animation: rotate 0.8s infinite linear;
  border: 3px solid #999;
  border-right-color: #fff;
  border-radius: 50%;
}

.index_diff_loading::before{
  content: '';
}

@keyframes rotate { 
  0%    { transform: rotate(0deg); }
  100%  { transform: rotate(360deg); }
}

.index_diff_loading_more .index_diff_loading::before{
  width: 9px;
  height: 9px;
  border-width: 2px;
}
.index_diff_start_link{
  text-decoration: underline;
  padding: 3px 10px;
  border-radius: 5px;
  color: #333;
}

.index_diff_list_item_active, 
.index_diff_page_back_active, 
.index_diff_start_active{
  transition: all .15s;
  background-color: #bbb;
  color: #fff;
}
.index_diff_start_active{
  text-decoration: none;
}
.index_diff_page, .index_diff_body_h_nav{

  transition: all .5s;
}
/* .index_diff_body_h_nav_first_load .index_diff_page, 
.index_diff_body_h_nav_first_load .index_diff_body_h_nav{
  transition: none;
} */
</style>