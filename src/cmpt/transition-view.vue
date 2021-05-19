<style>
.hh-nav-page-wrap{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.hh-nav-handle{
  width: 0!important;
  height: 0!important;
  border: 0!important;
  margin: 0!important;
  padding: 0!important;
  box-shadow: none!important;
  outline: none!important;
  position: static!important;
  transition-property: none!important;
  animation-name: none!important;
}
.hh_nav_will_cleared{
  transition: none!important;
  animation:  none!important;
}

</style>
<template>
<transition 
  :appear="true"
  :duration="v.transition.duration"
  :type="v.transition.type"
  :enter-active-class="v.transition.enterActiveClass" 
  :leave-active-class="v.transition.leaverActiveClass" 
  enter-class=""
  leave-to-class=""
  leave-class=""
  enter-to-class=""
  >
  <div class="hh-nav-handle" :class="{hh_nav_will_cleared: v.willCleared}" :key="v.id" v-if="v.isLoad">
    
    <transition  
      :appear="true"
      :duration="v.transition.duration"
      :type="v.transition.type"
      :mode="v.transition.mode"

      :enter-active-class="v.transition.enterActiveClass" 
      :leave-active-class="v.transition.leaverActiveClass" 
      :enter-class="v.transition.enterClass"
      :leave-to-class="v.transition.leaveToClass"
      leave-class=""
      enter-to-class=""

      @before-enter="handleBeforeEnter"
      @before-leave="handleBeforeLeave">
        <div class="hh-nav-page-wrap" :key="v.id" v-show="v.isActive">
          <slot />
        </div>
    </transition>
  </div>
</transition>

</template>
<script>
import { nativeRAF } from '../navigator/native';
export default {
  name: 'HistoryNavigationPageWrap',
  props: {
    v: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleBeforeEnter(el, v){
      el.removeAttribute('style');
      if(v.activeStyle){
        _setStyle(el, v.activeStyle);
      }
      if(v.actionStyle){
        _setStyle(el, v.actionStyle);
        nativeRAF(() => {
          _removeStyle(el, v.actionStyle);
        })
      }
    },
    handleBeforeLeave(el, v){
      el.removeAttribute('style');
      if(v.activeStyle){
        _setStyle(el, v.activeStyle);
      }
      if(v.actionStyle){
        nativeRAF(() => {
          _setStyle(el, v.actionStyle);
        })
      }
    },

    // henaldEnterCancelled(el){
    //   _removeStyle(el);
    // },
    // henaldAfterEnter(el){
    //   _removeStyle(el);
    // },

    // handleLeaveCancelled(el){
    //   _removeStyle(el);
    // },
    // handleAfterLeave(el){
    //   _removeStyle(el);
    // }
  }
}
// function _removeStyle(el){
//   el.removeAttribute('style');
// }
// function _setActionStyle(el, v){
//     el.removeAttribute('style');
//     if(v.activeStyle){
//       _setStyle(el, v.activeStyle);
//     }
//     if(v.actionStyle){
//       nativeRAF(() => {
//         _setStyle(el, v.actionStyle);
//       })
//     }
// }

function _setStyle(el, value){
  let i = 0, list = Object.keys(value), k,  len = list.length;
    for(; i < len; i++){
      k = list[i];
      el.style[k] = value[k];
    }
}

function _removeStyle(el, value){
  let i = 0, list = Object.keys(value), k,  len = list.length;
  for(; i < len; i++){
    k = list[i];
    delete(el.style[k]);
  }
}
</script>