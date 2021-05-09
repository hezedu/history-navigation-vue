<template>
<div style="height: 3000px; padding: 10px;">
  <h1>Detail</h1>
  <button @click="back">back to start {{$page.stateKey}}</button>
  <br>
  <navigator url="/list" type="replace">replace to list</navigator>
  <br>
  <navigator url="/" type="relaunch">Relaunch to Index</navigator>
</div>

</template>
<script>
export default {
  methods: {
    back(){
      this.$navigator.back(this.$page.stateKey - 1);
    }
  },
  onShow(){
    console.log('detail onShow')
  },
  onHide(){
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