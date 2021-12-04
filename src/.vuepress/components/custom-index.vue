<template>
<div class="index_f_wrap">
  <div class="index_f_item">
    <div class="index_f_img">
      <div class="index_f_m">
        <div class="index_f_m_i"></div>
        <div class="index_f_m_i"></div>
        <div class="index_f_m_i index_f_m_i_curr"></div>
      </div>
    </div>
    <div class="index_f_i_info">{{TEXT[1]}}</div>
  </div>

  <div class="index_f_item">
    <div class="index_f_img">
      <div class=" index_f_t">
        <div class="index_f_t_t">
          <div class="index_f_t_t_i index_f_t_t_i_active" />
          <div class="index_f_t_t_i" />
          <div class="index_f_t_t_i" />
        </div>
      </div>
    </div>
    <div class="index_f_i_info">{{TEXT[2]}}</div>
  </div>

  <div class="index_f_item">
    <div class="index_f_img">
      <div class=" index_f_mo">
        <div class="index_f_mo_m" />
      </div>
    </div>
    <div class="index_f_i_info">{{TEXT[3]}}</div>
  </div>

  <div class="index_f_item">
    <div class="index_f_img">
      <div class="index_f_g">
        <div class="index_f_g_i">{{TEXT[4]}}</div>
      </div>
    </div>
    <div class="index_f_i_info">{{TEXT._4_2}}</div>
  </div>

  <div class="index_f_b">
    
    <div class="index_f_img">
      <div class="index_f_b_a"></div>
    </div>
    <div class="index_f_b_info">{{TEXT[5]}}</div>
  </div>

</div>
</template>
<script>


export default {
  props: {
    TEXT: {
      type: Object
    }
  },
  // mounted(){
  //   console.log(this)
  // }
}
</script>
<style>
.index_f_wrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
}
.index_f_b, .index_f_item  {
    border: 1px solid #eee;
  box-sizing: border-box;
}

.index_f_item {
  width: 50%;
  padding-top: 30px;
  padding-bottom: 30px;
}
.index_f_i_info {
  text-align: center;
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 18px;
}
.index_f_img{
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.index_f_m {
  position: relative;
  width: 95px;
  height: 120px;
}
.index_f_m_i {
  width: 37px;
  height: 67px;
  background-color: #F5F5F5;
  box-shadow: 2px 2px 5px 1px rgb(0 0 0 / 20%);
  border-radius: 5px;
  position: absolute;
  border-width: 1px;
  border-color: #ccc;
}
.index_f_m_i:nth-child(1) {
  top: 0;
  left: 0;
}
.index_f_m_i:nth-child(2){
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 2;
}
.index_f_m_i:nth-child(3){
  bottom: 0;
  right: 0;
  z-index: 3;
}
.index_f_m_i_curr {
  background-color: #fff;
}
.index_f_t, .index_f_mo {
  height: 134px;
  width: 74px;
  background-color: #eee;
  padding-top: 110px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ddd;
}
.index_f_t_t {
  background-color: #fff;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  border-top: #c7c7c7;
  justify-content: space-around;
  align-items: center;
}
.index_f_t_t_i {
  width: 9px;
  height: 9px;
  border-radius: 2px;
  background-color: #eee;
}
.index_f_t_t_i_active {
  background-color: #888;
}

.index_f_mo {
  background-color: rgba(0, 0, 0, .4);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.index_f_mo_m {
  width: 75%;
  height: 48%;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
}
.index_f_g {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 184px;
  max-width: 100%;
  /* border-left: 2px solid #333;
  border-right: 2px solid #333; */
  /* border-left: 2px solid #333;
  border-right: 2px solid #333; */
  background-color: #eee;
}
.index_f_g_i {
  font-size: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .8);
  border-radius: 1em;
  padding: .8em;
  line-height: 1;
}
.index_f_b {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  
  width: 160px;
  height: 160px;
  overflow: hidden;
  /* box-shadow: 2px 2px 5px 1px rgb(0 0 0 / 20%); */
  background-color: #fff;
  border-radius: 50%;
  /* border: 0; */
}
.index_f_b  > .index_f_img{
   height: 50px;
   width: 100%;
    margin-bottom: 10px;
}
.index_f_b_a {
  height: 3px;
  width: 50%;
  background-color: #888;
  position: relative;
}
.index_f_b_a::after, .index_f_b_a::before {
  content: '';
  position: absolute;
  display: block;
  width: 3px;
  height: 30px;
  left: 11px;
  background-color: inherit;
}
.index_f_b_a::before {
  top: -2px;
  transform: rotate(-45deg);
}
.index_f_b_a::after {
  bottom: -2px;
  transform: rotate(45deg);
  /* background-color: red; */
}

.index_f_b {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  
}
.index_f_b_info {
  font-size: 13px;
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 1.5;
}

.index_f_b_info, .index_f_i_info {
  text-align: center;
  font-weight: 500;
  color: #3a5169;
  /* color: #333; */
}
/* .index_f_mo_m::after {
  content: '✖';
  position: absolute;
  right: 1px;
  top: 1px;
  line-height: 1;
  font-size: 10px;
  color: #ccc;
} */

@media (max-width: 532px) {
  .index_f_wrap {
    margin-left: -2rem;
    margin-right: -2rem;
  }
  .index_f_i_info {
    margin-bottom: 50px;
  }
  .index_f_b {
    width: 148px;
    height: 148px;
  }
  .index_f_b_info {
    font-size: 10px;
  }
}
</style>