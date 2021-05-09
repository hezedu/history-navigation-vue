const path = require('path');
const fs = require('fs');
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
  app.get('*', (req, res, next) => {
    if(req.url.indexOf('/static') === 0 || 
    req.url.indexOf('/dev_dist') === 0){
      next();
    } else {
      res.type('html').send( fs.readFileSync(path.join(__dirname, '../index.html')));
    }
  });
  
  let v;
  for(let i in staticMap){
    v = staticMap[i];
    app.use(v.url, eStatic(v.filePath));
  }

  // dev
  app.use('/static', eStatic(path.join(__dirname, '../docs/static')));


};

setup.staticMap = staticMap;
module.exports = setup;