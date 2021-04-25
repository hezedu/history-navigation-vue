<template>
<a class="h-nav-navigator" :class="isDisabled ? 'h-nav-navigator-disabled' : '' " :href="href" @click.prevent="handleClick">
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
    replace: {},
    relaunch: {},
    back: {},
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number
    }
  },
  computed: { // ThroughClass , activeClass
    href(){
      return (this.$navigator.isSetAHref && this.to) 
        ? this.$navigator.URL.toLocationUrl(this.to)
        : undefined;
    },
    isBackDisabled(){
      return this.back !== undefined && this.$page.stateKey === 1;
    },
    isDisabled(){
      return this.disabled || this.isBackDisabled;
    }
  },
  methods: {
    handleClick(){
      if(this.isDisabled){
        return;
      }
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
  },
  created(){
    console.log('this.$page.route', this.$page.route)
  }
}
</script>