<template>
<div style="height: 100%; padding: 10px;">
  
  <div style="height: 100%; overflow: auto;">
    <h1>List</h1>
<iframe height="368" style="width: 100%;" scrolling="no" title="MWJQORO" src="https://codepen.io/hezedu/embed/MWJQORO?height=368&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/hezedu/pen/MWJQORO'>MWJQORO</a> by Du Wei
  (<a href='https://codepen.io/hezedu'>@hezedu</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<iframe src="https://codesandbox.io/embed/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-list-move-transitions?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-20-list-move-transitions"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
    <!-- <div style="height: 150vh">
        <div style="height: 300px; width: 300px; overflow: auto;">
          <div style="width: 200%; height: 200%"></div>
        </div>

    </div> -->
          <h1 @click="handleClick">Date.now: {{Date.now()}}</h1>
      <h1>now: {{now}}</h1>
      <input @focus="handleFocus" @blur="handleBlur" v-if="isShowInput" />
    <navigator to="/detail"> Detail </navigator>

  </div>


</div>

</template>


<script>
export default {
  data(){
    return {
      now: Date.now(),
      isShowInput: true
    }
  },
  watch: {
    '$page.isShow'(val){
      console.log('list watch $page: ' + (val ? 'show' : 'hide'))
    }
  },
  methods: {
    handleFocus(){
      this.isShowInput = false;
    },
    handleBlur(){
      console.log('handleBlur')
    },
    handleClick(){
      console.log('$page show', this.$page)
    },

    handleDocumentClick(){
      console.log('document click', this.now);
    }
  },
  onShow(){
    console.log('list onShow', this.now);
  },
  onHide(){
    console.log('list onHide', this.now);
  },
  created(){
    
    console.log('$page', this.$page);
    console.log('list created')
  }, 
  mounted(){
    document.addEventListener('click', this.handleDocumentClick)
  },
  destroyed(){
    document.removeEventListener('click', this.handleDocumentClick)
  }
}
</script>
