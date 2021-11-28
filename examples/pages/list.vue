<template>
<div>
  
  <div>
    <h1>List {{Date.now()}}</h1>
    <button  @click="switchInner">switchInner</button>
    <transition :appear="true" name="list_inner">
      <InnerShow class="list_inner_show" v-show="isShowInner" />
    </transition>
    
    <h1>now: {{now}}</h1>
    <br>
    <navigator url="/detail"> To Detail </navigator>
    <br>
    <navigator url="/detail" transition="h-nav-transition custom"> custom To Detail </navigator>
    <br>
    <button @click="showModal">showModal</button>
    <br>
    <navigator url="/list" type="replace">replace to List</navigator>
    <br>
    <navigator url="/detail" type="replace">replace to Detail</navigator>
      <br>
    <navigator url="/detail" style="font-size: 3em" type="relaunch">Relaunch to Detail</navigator>
    <br>
    <navigator url="/api" style="font-size: 3em" type="switchTab">switchTab to api</navigator>
    <br>
    <navigator url="/me" style="font-size: 3em" type="switchTab">switchTab to Me</navigator>
    <br>
    <navigator type="back">Back</navigator>
        <br>
    <navigator url="/list" type="replace">Replace to List</navigator>
    <br>
    <navigator url="/" type="replace">Replace to Index</navigator>
    <br>
    <navigator url="/" type="relaunch">Relaunch to Index</navigator>
    <br>
    <button @click="traPushToDetail">Tra push to Detail</button>
  <h1 style="width: 100%; text-align: right;">right</h1>
    <div style="height: 300vh; border-bottom: 10px solid #555;"></div>
    <navigator url="/detail">Detail</navigator>
  </div>

  
</div>

</template>


<script>
import InnerShow from './_inner-show.vue';
import Modal from './list_modal.vue';
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
    handlePageScroll(){
      console.log('Page Scroll');
    },
     showModal(){
      this.$navigator.modal({
        component: Modal,
        parent: this,
        propsData: {
          text: 'Hello'
        },
        success: (modalVM) => {
          modalVM.$on('textClick', () => {
            console.log('modalVM clicked text');
          })
        }
      });
    },
    switchInner(){
      console.log('switchInner')
      this.isShowInner = !this.isShowInner;
    },
    handleFocus(){
      this.isShowInput = false;
    },
    traPushToDetail(){
      this.$navigator.push({
        url: '/detail',
        query: {
          hello: 'wrold'
        },
        transition: 'customTra'
      })
    },
    handleBlur(){
      console.log('handleBlur');
    },
    handleClick(){
      console.log('$page show', this.$page)
    }
  },
  mounted(){
    this.$page.$el.addEventListener('scroll', this.handlePageScroll);
  },
 destroyed(){
   console.log('destroyed')
    this.$page.$el.removeEventListener('scroll', this.handlePageScroll);
  },
  onShow(){
    console.log('list onShow', Date.now());
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