<template>
<div class="modal">
  <div class="modal-mask" @click="closeModal" />
  <div class="modal-main">
    <h1 @click="handleTextClick">{{text}}</h1>
    <button style="font-size: 20px;" @click="pushDetail">pushDetail</button><br />
    <button style="font-size: 20px;" @click="closeModal">Close</button>
  </div>
</div>
</template>
<script>
export default {
  props: ['text'],
  methods: {
    replaceList(){
      this.$navigator.replace('/list');
    },
    pushDetail(){
      this.$navigator.push('/detail');
    },
    closeModal(){
      this.$navigator.back();
    },
    handleTextClick(){
      this.$emit('textClick');
    }
  }
}
</script>

<style>
.modal {
  width: 100%; 
  height: 100%; 
  position: relative;
}
.modal-mask {
  width: 100%; 
  height: 100%; 
  position: absolute; 
  top: 0; 
  left: 0;
  background-color: rgba(0, 0, 0 , .5);
}
.modal-main {
  color: #000;
  height: 200px;
  width: 200px;
  position: absolute; 
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  text-align: center;
  padding: 1;
}
</style>