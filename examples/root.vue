<template>
<NavigationController @launch="handleLaunch">
  <h1>Launching...</h1>
</NavigationController>
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
