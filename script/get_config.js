const path = require('path');

function get(){
  const OUT_FOLDER = 'built';
  const isPro = process.env.NODE_ENV === 'production';
  
  let baseUrl = '';
  let indexDir;
  let bundleName;
  let publicPath;
  let outputPath;
  
  if(isPro){
    indexDir = path.join(__dirname, '../dist');
    bundleName = '[name]_[contenthash].min.js';
    publicPath = OUT_FOLDER;
    outputPath = path.join(indexDir, publicPath + '/');
  } else {
    indexDir = path.join(__dirname, '../');
    bundleName = '[name].js';
    publicPath = 'dev_dist/' + OUT_FOLDER;
    outputPath = path.join(indexDir, publicPath + '/');
  }
  
  publicPath = baseUrl + '/' + publicPath + '/';
  
  // if(indexDir[indexDir.length - 1] === path.sep){
  //   indexDir = indexDir.substr(0, indexDir.length - 1);
  // }
  return {
    indexDir,
    bundleName,
    outputPath,
    publicPath
  }
}


module.exports =  get;