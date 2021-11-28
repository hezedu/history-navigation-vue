<template>
<div>
  <h1>Detail {{Date.now()}}</h1>

  
  <button @click="back">back to start</button>
  <br>
  <button @click="back2">back2</button>
  <br>
  <button @click="backToPage2">backToPage2</button>
  <br>
  <navigator url="/list" type="replace">replace to list</navigator>
  <br>
  <navigator url="/list" style="font-size: 2em" type="relaunch">Relaunch to list</navigator>
  <br>
  <navigator url="/" type="relaunch">Relaunch to Index</navigator>
  <button @click="back999">back999</button>
  <hr />
  <!-- <div style="height: 100vh" />
  <button @click="showModal">showModal</button> -->
</div>

</template>
<script>
export default {
  methods: {
    back999(){
      this.$navigator.back(9999);
    },
    back(){
      this.$navigator.back(this.$page.stateKey - 1);
    },
    back2(){
      this.$navigator.back(2);
    },
    backToPage2(){
      this.$navigator.backToPage(2);
    },
    handleDocClick(){
      console.log('------------------------------ document Click ------------------------------')
    },
    showModal(){
      this.$page.showModal();
    }
  },
  onShow(){
    document.addEventListener('click', this.handleDocClick);
    console.log('detail onShow')
  },
  onHide(){
    document.removeEventListener('click', this.handleDocClick);
    console.log('detail onHide')
  },
  mounted(){
    console.log('detail mounted')
  },
  beforeDestroy(){
    console.log('detail beforeDestroy')
  },
  destroyed(){
    console.log('detail destroyed')
  }
}
</script>