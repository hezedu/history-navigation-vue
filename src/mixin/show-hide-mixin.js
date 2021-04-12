module.exports = {
  inject: {
    $page: {
      default: null
    }
  },
  created(){
    if(!this.$page){
      return;
    }
    const $opts = this.$options;
    let handle;
    if($opts.onShow){
      handle = $opts.__tmp_multi_handle_page_show_hanlde = () => {
        $opts.onShow.call(this);
      }
      this.$page.$on('show', handle);
    }
    if($opts.onHide){
      handle = $opts.__tmp_multi_handle_page_hide_hanlde = () => {
        $opts.onHide.call(this);
      }
      this.$page.$on('hide', handle);
    }
  },
  destroyed(){
    if(!this.$page){
      return;
    }
    const $opts = this.$options;
    let handle = $opts.__tmp_multi_handle_page_show_hanlde;
    if(handle){
      this.$page.$off('show', handle);
    }
    handle = $opts.__tmp_multi_handle_page_hide_hanlde;
    if(handle){
      this.$page.$off('hide', handle);
    }
  }
}