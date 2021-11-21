<template>
<h1>Hello ! {{id}}</h1>
</template>
<script>
export default {

  data(){
    return {
      id: this.$page.route.query.id
    }
  }
}
</script>