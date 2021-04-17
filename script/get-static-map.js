const path = require('path');
const fs = require('fs');
const cdnRootUrl = 'https://cdn.jsdelivr.net/npm/';
module.exports = function(isPro){
  const staticMap = Object.create(null);
  ['vue'].forEach(name => {
    const mPath = require.resolve(name);
    const dir = path.dirname(path.dirname(mPath));
    let pkg = fs.readFileSync(path.join(dir, 'package.json'));
    pkg = JSON.parse(pkg);
    const version = pkg.version;
    pkg = null;
    let fileName = name;
    if(name === 'vue'){
      fileName = 'vue.runtime';
    }
    if(isPro){
      fileName = fileName + '.min.js';
    } else {
      fileName = fileName + '.js';
    }
    
    staticMap[name] = {
      version,
      fileName,
      filePath: path.join(dir, 'dist/' + fileName),
      // url: '/static/' + name + '@' + version + '/dist/' + fileName
      url: cdnRootUrl + name + '@' + version + '/dist/' + fileName
    }
  });
  
  return staticMap;
}
