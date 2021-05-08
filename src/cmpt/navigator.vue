<template>
<a :class="{'h-nav-disabled': disabled}" 
  :href="href" 
  @click.prevent="handleClick" 
  v-bind="$attrs">
  <slot></slot>
</a>
</template>
<script>
const allowedMethodMap = Object.assign(Object.create(null), {
  push: true,
  replace: true,
  relaunch: true,
  switchTab: true
});
export default {
  name: "HistoryNavigator",
  props: {
    url: {
      type: String
    },
    type: {
      type: String,
      default: 'push'
    },
    delta: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: { // ThroughClass , activeClass
    href(){
      // return this.$navigator._h.URL.toLocationUrl(this.url);
      return (this.$navigator._h._global.isSetAHref && this.url) 
        ? this.$navigator._h.URL.toLocationUrl(this.url)
        : undefined;
    }
  },
  methods: {
    handleClick(){
      if(this.disabled){
        return;
      }
      switch(this.type){
        case 'back':
          this.$navigator._h.back(this.delta);
          break;
        default:
          if(allowedMethodMap[this.type]){
            this.$navigator._h[this.type](this.url);
          } else {
            console.error('navigator not support type: ' + this.type);
          }
          
      }
    }
  }
}
</script>