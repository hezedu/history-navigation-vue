<template>
<a :class="{'h-nav-actived': actived, 'h-nav-disabled': disabled}" 
  :href="href" 
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
    steps: {
      type: Number,
      default: 1
    },
    actived: {
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
      e.preventDefault();
      if(this.actived || this.disabled){
        return;
      }
      switch(this.type){
        case 'back':
          this.$navigator._h.back(this.steps);
          break;
        default:
          if(allowedMethodMap[this.type]){
            this.$navigator._h[this.type](this.url);
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