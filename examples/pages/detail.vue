<template>
<div style="height: 3000px; padding: 10px;">
  <h1>Detail {{Date.now()}}</h1>
  <button @click="back">back to start</button>
  <br>
  <navigator url="/list" type="replace">replace to list</navigator>
  <br>
  <navigator url="/list" style="font-size: 2em" type="relaunch">Relaunch to list</navigator>
  <br>
  <navigator url="/" type="relaunch">Relaunch to Index</navigator>
</div>

</template>
<script>
export default {
  methods: {
    back(){
      this.$navigator.back(this.$page.stateKey - 1);
    },
    handleDocClick(){
      console.log('------------------------------ document Click ------------------------------')
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