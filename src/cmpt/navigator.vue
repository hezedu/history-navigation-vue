<template>
<a :class="{'h-nav-active': isActive, 'h-nav-disabled': disabled}" 
  :href="href">
  <slot />
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
    steps: {
      type: Number,
      default: 1
    },
    transition: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    event: {
      type: String
    }
  },
  computed: {
    href(){
      return this.url
        ? this.$navigator.URL.toLocationUrl(this.url)
        : undefined;
    }
  },
  methods: {
    handleEvent(e){
      e.preventDefault();
      if(this.isActive || this.disabled){
        return;
      }
      switch(this.type){
        case 'back':
          this.$navigator.back(this.steps, this.transition);
          break;
        default:
          if(allowedMethodMap[this.type]){
            this.$navigator[this.type]({
              url: this.url, 
              transition: this.transition
            });
          } else {
            console.error('history-navigation-vue navigator not support type: ' + this.type);
          }
          
      }
    }
  },
  mounted(){
    let eventName = this.event || this.$navigator.GLOBAL_CONFIG.navigatorTriggerEvent;
    this.$el.addEventListener(eventName, this.handleEvent);
  }
}
</script>