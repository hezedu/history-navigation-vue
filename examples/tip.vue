<template>
<transition name="fade" mode="out-in">
  <div class="tips" v-show="isShow">
    <span>{{text}}</span>
  </div>
  </transition>

</template>
<script>
export default {
  props: {
    interval: {
      type: Number,
      default: 1500
    }
  },
  data(){
    return {
      text: '',
      isShow: false
    }
  },
  methods: {
    tips(text){
      let $opt = this.$options;
      if($opt._tmp_t){
        clearTimeout($opt._tmp_t);
        $opt._tmp_t = null;
        this.isShow = false;
      }
      this.text = text;
      this.$nextTick(() => {
        
        this.isShow = true;
        $opt._tmp_t = setTimeout(() => {
            this.isShow = false;
            $opt._tmp_t = null;
        }, this.interval);
      })
    }
  }
}
</script>
<style>
.tips {
  position: fixed;
  width: 100%;
  text-align: center;
  bottom: 20%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 9999;
  text-align: center;
  transition: all .3s;
}
.tips > span{
  border-radius: 1em;
  padding: .8em;
  line-height: 1;
  background-color: rgba(185, 185, 185, .7);
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>