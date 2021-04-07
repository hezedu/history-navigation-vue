
<template>
<div class="vue_multi_app" :class="'multi_direction_' + (currentRoute.behavior === 'back' ? 'left' : 'right')">
  <transition-group v-if="isReady" class="vue_multi_transition_group" name="multi-page" tag="div">
    <Page v-for="v in stackMap" :key="v.key" :route="v" :isShow="v.key === currentRoute.key" v-show="v.key === currentRoute.key" />
  </transition-group>
  <template v-else>
    <slot />
  </template>
</div>
</template>
<script>
import Page from './page.vue';
export default {
  name: 'MultiApp',
  components: {
    Page
  },
  data(){
    return {
      stack: [],
      isReady: false,
      stackMap: this.$navigator.map,
      currentRoute: this.$navigator.currentRoute
    }
  },
  created(){
    this.$emit('launch', (path) => {
      this.$navigator.start(path);
      this.isReady = true;
    });
  }
}
</script>
