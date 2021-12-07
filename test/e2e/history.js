var assert = require('assert');
require('chromedriver');
const webDriver = require('selenium-webdriver');
const ROOT_URL = 'http://localhost:8080/history-navigation-vue/examples/';

const { By } = webDriver;
const driver = new webDriver.Builder()
    .forBrowser('chrome')
    .build();

describe('History', function() {
  describe('#Hello World', function() {
    it('_h_n_key eq 1 when load', function(done) {
      
      driver.get(ROOT_URL + 'two-pages.html').then(() => {
        driver.executeScript("return history.state;").then((state) => {
          assert.deepEqual(state, {_h_n_key: 1});
        });
      });
      done();
    });
    it('_h_n_key eq 2 after push', function(done) {
      
      driver.findElement(By.tagName('a')).click().then(() => {
        // setTimeout(() => {
          driver.executeScript("return history.state;").then((state) => {
            assert.deepEqual(state, {_h_n_key: 2});
            done();
          });
        // })

      });

    });
    it('_h_n_key eq 1 after back', function(done) {
      driver.navigate().back().then(() => {
        // setTimeout(() => {
          driver.executeScript("return history.state;").then((state) => {
            assert.deepEqual(state, {_h_n_key: 1});
            done();
          });
        // }, 1000);

      })
    });
  });

  after(() => {
    driver.quit();
  });
});