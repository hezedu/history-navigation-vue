
<template>
<div style="padding-top: 8%; text-align: center;">
  <h1>History Navigation Vue</h1>
  <h2>Page Not Found</h2>
  <!-- <p>"{{$page.route.fullPath}}"</p> -->
  <br />
  <navigator style="text-decoration: underline;" type="back" v-if="$page.stateKey > 1">Back</navigator>
  <br />
  <br />
  <navigator style="text-decoration: underline;" type="relaunch" :url="homePagePath">Take me home</navigator>
</div>
</template>
<script>
export default {
  data(){
    return {
      homePagePath: this.$navigator.GLOBAL_CONFIG.homePagePath
    }
  }
}
</script>
