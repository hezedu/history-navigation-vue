<template>
<div class="index_diff_page index_diff_list">
  <div class="index_diff_list_item" v-for="item in list" :key="item"></div>
</div>
  
</template>
<script>

export default {
  data(){
    return {
      list: []
    }
  },
  mounted(){
    setTimeout(() => {
      this.$emit('end');
    }, 500);
  }
}
</script>