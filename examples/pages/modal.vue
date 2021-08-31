<template>
<div class="modal_wrap">
  <div class="modal_mask" @click="handleMaskClick"></div>
  <div class="modal_body">
    <h1 @click="handleH1Click">Modal</h1>
  </div>
</div>

</template>
<script>

export default {
  methods: {
    handleMaskClick(){
      this.$navigator.back();
    },
    handleH1Click(){
      this.$emit('hahah', 'hhhhhhhhhhhhh')
    }
  }
}
</script>
<style>
.modal_wrap {
  height: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal_mask {
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
}
.modal_body {
  position: relative;
  background-color: #fff;
  height: 300px;
  width: 300px;
  margin: 0 auto;
  color: #000;
}
</style>