export default {
  methods: {
    timeout(cb, time){
      this.$options.__tmp_timer = setTimeout(() => {
        this.$options.__tmp_timer = null;
        cb();
      }, time);
    },
    clearTimeout(){
      let t = this.$options.__tmp_timer;
      if(t){
        clearTimeout(t);
        this.$options.__tmp_timer = null;
      }
    },
  },
  destroyed(){
    this.clearTimeout();
  }
}