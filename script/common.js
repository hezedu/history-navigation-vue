const path = require('path');
const child_process = require('child_process');
const del = require('fuckwinfsdel');
const webpack = require('webpack');
// const fs = require('fs');
const webpackConf = require('../webpack.config');
const clearDir = require('./get_config')().outputPath;

module.exports = function(){
  // var build_sh = 'webpack --colors';
  console.log('开始清空:',clearDir, '...');
  del(clearDir, function(err){
    if(err){
      console.error(err);
    }
    console.log('开始build...');
    webpack(webpackConf,  function(err, stats){
      if(err || stats.hasErrors()){
        // const json2 = stats.toJson();
        // fs.writeFileSync(path.join(__dirname, 'errout.json'), JSON.stringify(json2, null, '\t'));
        return console.log('build 失败', err, stats.toString({
              // copied from `'minimal'`
            all: false,
            modules: false,
            maxModules: 0,
            errors: true,
            warnings: true,
            // our additional options
            moduleTrace: false,
            errorDetails: false
        }));
      }
      // const json = stats.toJson();
      // fs.writeFileSync(path.join(__dirname, 'out.json'), JSON.stringify(json, null, '\t'));
      // console.log('json', Object.keys(json));
      console.log(stats.toString({
        // Add console colors
        colors: true,
        chunks: false,
        modules: false,
        children: false
      }));
      console.log('build 成功');

    });
  })
}
