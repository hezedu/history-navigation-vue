<template>
<div class="index_page">
  <div class="wrap">
    <button @click="showModal">showModal</button>
  <div style="height: 1px"></div>
  <h1> Index {{now}}</h1>
  <button @click="closeWin">Close</button>
  <navigator url="/api" type="switchTab">switchTab to API</navigator>
  <br>
  <navigator url="/api" type="relaunch">relaunch API</navigator>
  <br>
  <navigator url="/" type="relaunch">relaunch /</navigator>
  <br>
    <br>
  <br>
  <navigator url="/list">List</navigator>
  <br>
  <br>
  <br>
  <br>
  <!-- <navigator url="/tra-per">过渡性能测试</navigator> -->
  <br>
  <navigator url="/list" type="replace">replace to List</navigator>
</div>
 <div style="height: 100vh" />
  <button @click="showModal">showModal</button>
<button @click="isHomePage">isHomePage</button>
  isHomePage
</div>
  
</template>
<script>
import Modal from './index_modal.vue';
export default {
  // components: {
  //   Modal
  // },

  data(){
    return {
      now: Date.now()
    }
  },
  methods: {
    closeWin(){
      window.close();
    },
    isHomePage(){
      console.log(this.$page.isHomePage())
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
    handlePageScroll(){
      console.log('Page Scroll');
    },
    handleDocumentClick(){
      console.log('Document clicked');
    }
  },
  onShow(){
    console.log('index onShow', this.now);
    document.addEventListener('click', this.handleDocumentClick);
  },
  onHide(){
    console.log('index onHide', this.now);
    document.removeEventListener('click', this.handleDocumentClick);
  },
  mounted(){
    this.$page.$el.addEventListener('scroll', this.handlePageScroll);
    console.log(this.$page)
  },
  destoryed(){
    this.$page.$el.removeEventListener('scroll', this.handlePageScroll);
  }
}
</script>