const path = require('path');
const express = require('express');
const config = require('../config');

const app = express();
app.use('/history-navigation-vue/', express.static(path.join(__dirname, '../docs')));
const port = config.previewDocsPort;
app.listen(port, () => console.log(`Preview app listening on port ${port}!`))