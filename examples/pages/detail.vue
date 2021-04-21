<template>
<div style="height: 3000px; padding: 10px;">
  <h1>Detail</h1>
  <button @click="back">back3</button>
  <br>
  <navigator to="/" relaunch>Relaunch to Index</navigator>
</div>

</template>
<script>
export default {
  methods: {
    back(){
      this.$navigator.back(this.$page.route.key - 1);
    }
  },
  mounted(){
    console.log(this.$page.$refs.container)
  }
}
</script>