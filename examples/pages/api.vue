<template>
<div class="api_wrap">
  <div class="wrap">
    <h1>API {{now}}</h1>
    <navigator url="/" type="switchTab">首页 </navigator>
    <button @click="close">close</button>
  </div>
  
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
    close(){
      window.close()
    }
  }
}
</script>