const path = require('path');
const express = require('express');
const app = express();
const config = require('../config');
// var proxy = require('http-proxy-middleware');
// app.use(express.static('/', path.join(__dirname, '../dist')));
// app.use('/api', proxy({target: '', changeOrigin: true}));
app.use('/', express.static(path.join(__dirname, '../dist')));
const port = config.previewPort;
app.listen(port, () => console.log(`Preview app listening on port ${port}!`))