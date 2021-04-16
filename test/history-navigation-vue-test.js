(function(){
  const Vue = window.Vue;
  console.log('window HistoryNavigationVue', window.HistoryNavigationVue);
  const config = {
    pages: [
      {
        path: '/',

        component: {
          data: function() {
            return {
              version: window.HistoryNavigationVue.v
            }
          },
          template: '<h1>Index {{version}}</h1>'
        }
      },
      {
        path: '/list',
        component: {
          template: '<h1>List</h1>'
        }
      }
    ]
  }
  
  Vue.use(window.HistoryNavigationVue.plugin, config);

  new Vue({
    el: '#app',
    template: '<NavigationController />'
  });
  
})();