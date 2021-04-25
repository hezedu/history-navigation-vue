const path = require('path');
const eStatic = require('express').static;
const getStaticMap = require('../script/get-static-map');
const staticMap = getStaticMap();
function setup(app){
  app.get('/favicon.ico', (req, res) => {
    res.set({
      'Cache-Control': 'public, max-age=91104000'
    });
    res.status(410).end('Gone');
  });
  let v;
  for(let i in staticMap){
    v = staticMap[i];
    app.use(v.url, eStatic(v.filePath));
  }
  // dev
  app.use('/static', eStatic(path.join(__dirname, '../docs/static')));
  app.use('/mock', eStatic(path.join(__dirname, '../dist/mock')));
};

setup.staticMap = staticMap;
module.exports = setup;