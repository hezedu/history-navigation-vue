<template>
<a :href="href"  @click.prevent="handleClick">
  <slot></slot>
</a>
</template>
<script>
import { trimSlash } from '../navigator/url';
export default {
  name: "HistoryNavigator",
  props: {
    to: {
      type: String
    },
    replace: {
    },
    relaunch: {

    },
    back: {

    },
    activeClass: {
      type: String,
      default: ''
    },
    throughClass: {
      type: String,
      default: ''
    },
    step: {
      type: Number
    }
  },
  computed: { // ThroughClass , activeClass
    href(){
      return this.to ? this.$navigator.URL.toLocationUrl(this.to) : undefined;
    },
    trimedPath(){
      if(this.to === undefined || !this.activeClass || !this.throughClass){
        return;
      }
      return trimSlash(this.to);
    },
    isActive(){
      if(this.to === undefined || !this.activeClass){
        return;
      }
      return this.$page.route.trimedPath === this.trimedPath;
    },
    isThrough(){
      if(this.to === undefined || !this.throughClass){
        return;
      }
      return this.$page.route.trimedPath.indexOf(this.trimedPath) === 0;
    }
  },
  methods: {
    handleClick(){
      if(this.back !== undefined){
        // const step = this.step === undefined ? 1 : this.step;
        this.$navigator.back(this.step);
        return;
      }
      if(this.relaunch !== undefined){
        this.$navigator.relaunch(this.to);
        return;
      }
      let method = this.replace === undefined ? 'push' : 'replace';
      this.$navigator[method](this.to);
    }
  },
  mounted(){
    console.log('this.$page', this.$page);
  }
}
</script>