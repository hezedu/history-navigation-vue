<template>
<div class="index_page">
  <div class="wrap">
    <button @click="showModal">showModal</button>
  <div style="height: 1px"></div>
  <h1> Index {{now}}</h1>
  <navigator url="/api" type="switchTab">switchTab to API</navigator>
  <br>
  <navigator url="/api" type="relaunch">relaunch API</navigator>
  <br>
  <navigator url="/" type="relaunch">relaunch /</navigator>
  <br>
  <navigator url="/list">List</navigator>
  <br>
  <navigator url="/list" type="replace">replace to List</navigator>
</div>
 <div style="height: 100vh" />
  <button @click="showModal">showModal</button>
</div>
  
</template>
<script>
import Modal from './modal.vue';
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
    showModal(){
      this.$navigator.modal({component: Modal});
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