<template>
<a :href="href" @click.prevent="handleClick">
  <slot></slot>
</a>
</template>
<script>

export default {
  name: "HistoryNavigator",
  props: {
    to: {
      type: String
    },
    replace: {
    },
    back: {

    },
    step: {
      type: Number
    }
  },
  computed: {
    href(){
      return this.to ? this.$navigator.URL.toLocationUrl(this.to) : undefined;
    }
  },
  methods: {
    handleClick(){
      if(this.back !== undefined){
        console.log('back', this.back)
        // const step = this.step === undefined ? 1 : this.step;
        this.$navigator.back(this.step);
        return;
      }
      let method = this.replace === undefined ? 'push' : 'replace';
      this.$navigator[method](this.to);
    }
  }
}
</script>