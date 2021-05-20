<template>
<div>
  
  <div>
    <h1>List {{Date.now()}}</h1>
    <button  @click="switchInner">switchInner</button>
    <transition :appear="true" name="list_inner">
      <InnerShow class="list_inner_show" v-show="isShowInner" />
    </transition>
    

    <!-- <div style="height: 150vh">
        <div style="height: 300px; width: 300px; overflow: auto;">
          <div style="width: 200%; height: 200%"></div>
        </div>

    </div> -->
    <h1 @click="handleClick">Date.now: {{Date.now()}}</h1>
    <h1>now: {{now}}</h1>
    <input @focus="handleFocus" @blur="handleBlur" v-if="isShowInput" />
    <br>
    <navigator url="/detail"> To Detail </navigator>
    <br>
    <navigator url="/list" type="replace">replace to List</navigator>
    <br>
    <navigator url="/detail" type="replace">replace to Detail</navigator>
      <br>
    <navigator url="/detail" style="font-size: 3em" type="relaunch">Relaunch to Detail</navigator>
    <br>
    <navigator url="/api" style="font-size: 3em" type="switchTab">switchTab to api</navigator>
    <br>
    <navigator type="back">Back</navigator>
        <br>
    <navigator url="/list" type="replace">Replace to List</navigator>
    <br>
    <navigator url="/" type="replace">Replace to Index</navigator>
    <br>
    <navigator url="/" type="relaunch">Relaunch to Index</navigator>

  <h1 style="width: 100%; text-align: right;">right</h1>
    <div style="height: 300vh; border-bottom: 10px solid #555;"></div>
    <navigator url="/detail">Detail</navigator>
  </div>

  
</div>

</template>


<script>
import InnerShow from './_inner-show.vue';
export default {
  components: {
    InnerShow
  },
  data(){
    return {
      isShowInner: true,
      now: Date.now(),
      isShowInput: true
    }
  },
  // watch: {
  //   '$page.isShow'(val){
  //     console.log('list watch $page: ' + (val ? 'show' : 'hide'))
  //   }
  // },
  methods: {
    switchInner(){
      console.log('switchInner')
      this.isShowInner = !this.isShowInner;
    },
    handleFocus(){
      this.isShowInput = false;
    },

    handleBlur(){
      console.log('handleBlur');
    },
    handleClick(){
      console.log('$page show', this.$page)
    }
  },
  onShow(){
    console.log('list onShow', this.now);
  },
  onHide(){
    console.log('list onHide', this.now);
  },
  created(){
    console.log('list created')
  }
}
</script>
<style>
.list_inner-leave-to{
  opacity: 0;
}
.list_inner_show{
  transition: all 3s ease;
}
</style>