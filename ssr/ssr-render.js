// server.js
const fs = require('fs');
const path = require('path');
const conf = require('./conf');
const serverBundle = require(path.join(conf.ssrBundlePath, 'vue-ssr-server-bundle.json'));
const { createBundleRenderer } = require('vue-server-renderer');
// const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    // template // （可选）页面模板
  })

module.exports = function render(context, callback) {
    // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
    // 现在我们的服务器与应用程序已经解耦！
    renderer.renderToString(context, (err, html) => {
        // 处理异常……
        if (err) {
            throw err;
        }
        callback(html);
      })
}
