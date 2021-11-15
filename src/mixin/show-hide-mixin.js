import { PAGE_E_SHOW_NAME, PAGE_E_HIDE_NAME } from '../constant';
export default function (isV3) {
  const key = isV3 ? 'unmounted' : 'destroyed'; 
  return {
    inject: {
      $page: {
        default: null
      }
    },
    created(){
      if((this.$options.onShow || this.$options.onHide) && this.$page){
        _handleOnShow(this);
      }
    },
    [key](){
      if(this.$options.__tmp_h_nav_show_hide_has){
        _handleOnHide(this);
      }
    }
  }
}

function _handleOnShow(self){
  const $opts = self.$options;
  $opts.__tmp_h_nav_show_hide_has = true;
  let handle;
  if($opts.onShow){
    handle = $opts.__tmp_h_nav_page_show_hanlde = () => {
      $opts.onShow.call(self);
    }
    self.$page.$on(PAGE_E_SHOW_NAME, handle);
  }
  if($opts.onHide){
    handle = $opts.__tmp_h_nav_page_hide_hanlde = () => {
      $opts.onHide.call(self);
    }
    self.$page.$on(PAGE_E_HIDE_NAME, handle);
  }
}

function _handleOnHide(self){
  const $opts = self.$options;
  let handle = $opts.__tmp_h_nav_page_show_hanlde;
  if(handle){
    self.$page.$off(PAGE_E_SHOW_NAME, handle);
  }
  handle = $opts.__tmp_h_nav_page_hide_hanlde;
  if(handle){
    self.$page.$off(PAGE_E_HIDE_NAME, handle);
  }
}