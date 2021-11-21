<template>
<div style="height: 100%">
  <NavigationController>hahaah</NavigationController>
  <Tips ref="tips" />
</div>
</template>
<script>
import Tips from './tip.vue';
export default {
  components: {
    Tips
  },
  methods: {
    handleLaunch(next){
      next();
    }
  },
  mounted(){
    window.$simpleTips = this.$refs.tips;
  }
}
</script>
