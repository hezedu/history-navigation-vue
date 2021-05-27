const path = require('path');
const express = require('express');
const config = require('../config');
const setup = require('./setup');
const app = express();
setup(app);

  // dev
app.use('/dev_dist', express.static(path.join(__dirname, '../dev_dist')));
app.use('/dev_favicon.png', express.static(path.join(__dirname, '../dev_favicon.png')));
const port = config.previewExPort;
app.listen(port, () => console.log(`Preview app listening on port ${port}!`))