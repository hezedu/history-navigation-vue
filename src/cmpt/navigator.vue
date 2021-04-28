<template>
<a class="h-nav-navigator"
  :class="{'h-nav-disabled': disabled}" 
  :href="href" 
  @click.prevent="handleClick" 
  v-bind="$attrs">
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
    // isCannotBack(){
    //   return this.back !== undefined && this.$page.stateKey === 1;
    // }
  },
  methods: {
    handleClick(){
      if(this.disabled){
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
  }
}
</script>