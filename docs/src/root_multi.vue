<template>
<NavController @launch="handleLaunch">
  <h1>Launching...</h1>
</NavController>
</template>
<script>
export default {
  methods: {
    handleLaunch(next){
      next();
    }
  }
}
</script>
