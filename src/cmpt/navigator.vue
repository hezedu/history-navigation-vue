<template>
<a :href="href"  @click.prevent="handleClick">
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
    relaunch: {

    },
    back: {

    },
    activeClass: {
      type: String,
      default: ''
    },
    throughClass: {
      type: String,
      default: ''
    },
    step: {
      type: Number
    }
  },
  computed: { // ThroughClass , activeClass
    href(){
      return (this.$navigator.isSetNavigatorHref && this.to) ? this.$navigator.URL.toLocationUrl(this.to) : undefined;
    }
  },
  methods: {
    handleClick(){
      if(this.back !== undefined){
        // const step = this.step === undefined ? 1 : this.step;
        this.$navigator.back(this.step);
        return;
      }
      if(this.relaunch !== undefined){
        this.$navigator.relaunch(this.to);
        return;
      }
      let method = this.replace === undefined ? 'push' : 'replace';
      this.$navigator[method](this.to);
    }
  }
}
</script>