<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="splice">splice</button>
  <button @click="remove">remove</button>
  <button @click="proxyTest">push</button>
  <button @click="add">add</button>
  <button @click="change">change</button>
  <h1 v-for="(v, k) in map" :key="k" >
    
    {{v}} - 

    <button @click="change(v)">change</button>
    -
    <button @click="del(k)">del</button>
  </h1>
  <HelloWorld msg="Welcome to Your Vue.js App"/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      title: 'hahaha',
      map: Object.create(null),
      list: []
      // text: undefined
    }
  },
  methods: {
    remove(){
      this.list.splice(1, 1);
    },
    splice(){
      this.list.splice(1, 0, Date.now());
    },
    add(){
      const obj = {
        name: 'haha'
      };
      const i = Date.now();
      this.map[i] = obj;
    },
    change(v){
      v.name = 'change' + Date.now();
    },
    del(k){
      
      delete this.map[k];
      console.log(this.map, k);
    },
    proxyTest(){
      // const text = ref('========== hello world ==========')
      
      this.list.push(Date.now())
      // this.$data.set('text', '========== hello world ==========');
    },
    handleItem(i){
      this.list[i] = Date.now();
    }
  },
  mounted(){
    console.log(this.$nav)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
