<template>
<a :class="{'h-nav-active': isActive, 'h-nav-disabled': disabled}" 
  :href="href" 
  v-bind="$attrs">
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
        ? this.$navigator._h.URL.toLocationUrl(this.url)
        : undefined;
    }
  },
  methods: {
    handleEvent(e){
      console.log('transition', this.transition)
      e.preventDefault();
      if(this.isActive || this.disabled){
        return;
      }
      switch(this.type){
        case 'back':
          this.$navigator._h.back(this.steps, this.transition);
          break;
        default:
          if(allowedMethodMap[this.type]){
            this.$navigator._h[this.type]({
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
    let eventName = this.event || this.$navigator._h._global.navigatorTriggerEvent;
    this.$el.addEventListener(eventName, this.handleEvent);
  }
}
</script>