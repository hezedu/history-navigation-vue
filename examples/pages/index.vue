<template>
<div class="index_page">
  <div class="wrap">
  <div style="height: 1px"></div>
  <h1> Index {{now}}</h1>
  <navigator url="/api" type="switchTab">switchTab API</navigator>
  <br>
  <navigator url="/api" type="relaunch">relaunch API</navigator>
  <br>
  <navigator url="/" type="relaunch">relaunch /</navigator>
  <br>
  <navigator url="/list">List</navigator>
  <br>
  <navigator url="/list" type="replace">replace to List</navigator>
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