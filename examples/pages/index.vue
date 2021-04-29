<template>
<div class="index_page">
  <div class="wrap">
  <div style="height: 1px"></div>
  <h1> Index {{now}}</h1>
  <navigator url="/api" type="switchTab">API</navigator>
  <br>
  <navigator url="/list">List</navigator>
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