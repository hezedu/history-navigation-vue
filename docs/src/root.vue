<template>
<App @launch="handleLaunch">
  <h1>Launching...</h1>
</App>
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
