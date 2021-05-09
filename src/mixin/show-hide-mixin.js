import { PAGE_E_SHOW_NAME, PAGE_E_HIDE_NAME } from '../constant';

export default {
  inject: {
    $page: {
      default: null
    }
  },
  created(){
    if(!this.$options.onShow || !this.$options.onHide){
      return;
    }
    const $opts = this.$options;
    $opts.__tmp_h_nav_show_hide_has = true;
    let handle;
    if($opts.onShow){
      handle = $opts.__tmp_h_nav_page_show_hanlde = () => {
        $opts.onShow.call(this);
      }
      this.$page.$on(PAGE_E_SHOW_NAME, handle);
    }
    if($opts.onHide){
      handle = $opts.__tmp_h_nav_page_hide_hanlde = () => {
        $opts.onHide.call(this);
      }
      this.$page.$on(PAGE_E_HIDE_NAME, handle);
    }
  },
  destroyed(){
    if(!this.$options.__tmp_h_nav_show_hide_has){
      return;
    }
    const $opts = this.$options;
    let handle = $opts.__tmp_h_nav_page_show_hanlde;
    if(handle){
      this.$page.$off(PAGE_E_SHOW_NAME, handle);
    }
    handle = $opts.__tmp_h_nav_page_hide_hanlde;
    if(handle){
      this.$page.$off(PAGE_E_HIDE_NAME, handle);
    }
  }
}