const path = require('path');
const express = require('express');
const app = express();

// var proxy = require('http-proxy-middleware');
// app.use(express.static('/', path.join(__dirname, '../dist')));
// app.use('/api', proxy({target: '', changeOrigin: true}));
app.use('/history-navigation-vue', express.static(path.join(__dirname, './docs')));
const port = 8081;
app.listen(port, () => console.log(`Preview app listening on port ${port}!`))