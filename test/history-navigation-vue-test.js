(function(){
  const Vue = window.Vue;
  console.log('window HistoryNavigationVue', window.HistoryNavigationVue);
  const config = {
    pages: [
      {
        path: '/',

        component: {
          template: 
          `<div class="wrap">
            <h1>Hello Wrold!</h1>
            <h2>Index {{Date.now()}}</h2>
            <navigator to="/list">To List</navigator>
          </div>`
        }
      },
      {
        path: '/list',
        component: {
          template: 
          `<div class="wrap">

            <h2>List {{Date.now()}}</h2>
            
            <navigator to="/detail">To Detail</navigator><br>
            <navigator back>Back</navigator>
          </div>`
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