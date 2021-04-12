<template>
<div style="height: 3000px; padding: 10px;">
  <h1>Detail</h1>
  <button @click="back">back2</button>
</div>

</template>
<script>
export default {
  methods: {
    back(){
      this.$navigator.back(2);
    },
    backToFirstAndReplace(){
      
    }
  }
}
</script>