<template>
<div class="index_page">
  <div class="wrap">
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
<div style="height: 300vh" />
</div>
  
</template>
<script>

export default {

  data(){
    return {
      now: Date.now()
    }
  },
  methods: {
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
  },
  destoryed(){
    this.$page.$el.removeEventListener('scroll', this.handlePageScroll);
  }
}
</script>