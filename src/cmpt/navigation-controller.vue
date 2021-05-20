
<template>
<transition-group class="h-nav-ctrler"
  :class="'h-nav-behavior-' + behavior.type"
  tag="div"
  enter-class=""
  leave-class=""
  enter-to-class=""
  leave-to-class=""
  enter-active-class="h-nav--page_load" 
  leave-active-class="h-nav--page_unload"
  :style="WH">


    <div 
      class="h-nav-page-container" 
      v-for="v in stackMap" 
      :key="v.stackId" 
      :class="v.className"
      :style="v.isClean ? 'transition: none!important; animation: none!important;' : ''">
      
      <TabCtrler v-if="v.isTab"
        :key="v.stackId"
        :currTabPage="v"
        :style="{zIndex: v.zIndex}"
        :isActive="v.stackId === currentPage.stackId"
        :isFirstLoad="isFirstLoad"
      />
    
      <Page v-else
        transitionName="h-nav-page"
        :key="v.stackId"
        :path="v.path"
        :title="v.title"

        :isTab="v.isTab"
        :tabIndex="v.tabIndex"
        :stateKey="v.stateKey"
        :route="v.route"
        :style="{zIndex: v.zIndex}"
        :isActive="v.stackId === currentPage.stackId"
        :isFirstLoad="isFirstLoad">
          <component :is="v.cmptKey" />
        </Page>
        
    </div>
</transition-group>

</template>
<script>
import Page from './page.vue';
import TabCtrler from './tab-bar-controller.vue';

export default {
  components: {
    Page,
    TabCtrler
  },
  name: 'HistoryNavigationController',
  props: {
    entryPagePath: {
      type: String
    }
  },

  data(){
    return {
      isFirstLoad: true,
      stackMap: this.$navigator._h.stackMap,
      behavior: this.$navigator._h.behavior,
      currentPage: this.$navigator._h.currentPage,
      WH: this.$navigator._h.WH
    }
  },
  methods: {
    getSpecificWH(){
      let w, h;
      if(this.$el.getBoundingClientRect){
        const rect = this.$el.getBoundingClientRect();
        w = rect.width;
        h = rect.height;
      } else {
        w = this.$el.clientWidth;
        h = this.$el.clientHeight;
      }
      this.WH.width = w + 'px';
      this.WH.height = h + 'px';
    },
    autoFit(){
      this.WH.width = '100%';
      this.WH.height = '100%';
      this.$nextTick(() => {
        this.getSpecificWH();
      })
    }
  },
  created(){
    this.$navigator._h._load(this.entryPagePath);
    this.$nextTick(() => {
      this.isFirstLoad = false;
    })
    
  },
  mounted(){
    this.getSpecificWH();
    this.$options.__tmp_handle_win_resize = () => {
      this.autoFit();
    }
    this.$navigator._h._window.addEventListener('resize', this.$options.__tmp_handle_win_resize);
  },
  destroyed(){
    this.$navigator._h._window.removeEventListener('resize', this.$options.__tmp_handle_win_resize);
  }
}
</script>
