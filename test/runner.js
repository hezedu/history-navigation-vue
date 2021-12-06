require('chromedriver');
var webdriver = require('selenium-webdriver');
(async function helloSelenium() {
  var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    
  try {
      await driver.get('https://hezedu.github.io/history-navigation-vue/examples/two-pages.html');
      const state  = await driver.executeScript("return history.state;");
      console.log('len', state);
  } finally {
      await driver.quit();
  }

})();