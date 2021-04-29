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
      return this.$navigator.URL.toLocationUrl(this.url);
      // return (this.$navigator.isSetAHref && this.url) 
      //   ? this.$navigator.URL.toLocationUrl(this.url)
      //   : undefined;
    }
  },
  methods: {
    handleClick(){
      if(this.disabled){
        return;
      }
      switch(this.type){
        case 'back':
          this.$navigator.back(this.delta);
          break;
        default:
          this.$navigator[this.type](this.url);
      }
    }
  }
}
</script>