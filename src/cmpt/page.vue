<template>
<div class="vue_multi_page">
  <transition name="multi-page-inner">
    <keep-alive>
      <component :is="route.pageKey" v-if="isShow" />
    </keep-alive>
  </transition>
</div>
</template>
<script>

export default {
  name: 'MultiPage',
  __IS_MULTI_PAGE__: true,
  props: {
    route: {
      type: Object,
      required: true
    },
    isShow: {
      type: Boolean,
      required: true
    }
  }
}
</script>