<template>
<div class="api_wrap">
  <div class="wrap">
    <h1>API {{now}}</h1>
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
  }
}
</script>