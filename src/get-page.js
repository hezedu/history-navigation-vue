module.exports = function(opt){
  const $page = _getPage.call(this);
  if(!$page){
    return null;
  }
  if(opt === undefined){
    return $page;
  }
  switch(opt){
    case 'el':
      return $page.$el;
    case 'param':
      return $page.route.query;
  }
}

function _getPage(){
  let curr = this, $page;
  while(curr && !$page){
    $page = curr.$options.__$multi_cache_page__;
    if(!$page){
      if(curr.$parent.$options.__IS_MULTI_PAGE__){
        $page = curr.$parent;
        
      } else {
        curr = curr.$parent;
      }
    }
    
  }
 
  if($page){
    if(!this.$options.__$multi_cache_page__){
      this.$options.__$multi_cache_page__ = $page;
    }
    return $page;
  }
}