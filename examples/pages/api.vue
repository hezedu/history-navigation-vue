<template>
<div class="api_wrap">
  <div class="wrap">
    <h1>API {{now}}</h1>
    <button @click="showModal">showModal</button>
    <navigator url="/" type="switchTab">switchTab to Index</navigator>

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
    showModal(){
      this.$navigator.modal();
    }
  }
}
</script>