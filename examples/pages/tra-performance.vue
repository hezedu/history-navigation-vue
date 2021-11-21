<template>
<div>
  <button @click="displayNone">displayNone Toggle</button>
  <button @click="visHiddenToggle">visHiddenToggle</button>
  <button @click="handleItemClick(999)">To Detail 999</button>
  <ul v-if="isShow" :style='isVisHidden ? "visibility:hidden" : ""'>
    <li v-for="v in list" :key="v">
      {{v}}
      <button @click="handleItemClick(v)">To Detail</button>
    </li>
  </ul>
 </div> 
</template>
<script>
export default {
  // components: {
  //   Modal
  // },

  data(){

    return {
      isShow: true,
      isVisHidden: false,
      list: []
    }
  },
  methods: {
    displayNone(){
      this.isShow = !this.isShow;
    },
    visHiddenToggle(){
      this.isVisHidden = !this.isVisHidden;
    },
    initList(){
      const max = 100000;
      const list = [];
      let i = 0;
      for(; i < max; i++){
        list.push(i);
      }
      this.list = list;
    },
    handleItemClick(v){
      this.$navigator.push('/tra-per-detail?id=' + v);
    }
  },
  mounted(){
    setTimeout(() => {
      this.initList();
    }, 200)
  }
}
</script>