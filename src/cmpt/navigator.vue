<template>
<a :href="href" @click.prevent="handleClick">
  <slot></slot>
</a>
</template>
<script>

export default {
  props: {
    to: {
      type: String,
      required: true
    },
    replace: {
    }
  },
  computed: {
    href(){
      return this.$navigator.URL.toLocationUrl(this.to);
    }
  },
  methods: {
    handleClick(){
      let method = this.replace === undefined ? 'push' : 'replace';
      this.$navigator[method](this.to);
    }
  }
}
</script>