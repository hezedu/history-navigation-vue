// fixed: https://github.com/vuejs/vuepress/issues/2815

const fs = require('fs');
const path = require('path');
// const dir = path.join(__dirname, 'docs');

function readdirAndReplace(_dir){
  const names = fs.readdirSync(_dir);
  names.forEach(name => {
    if(name[0] !== '.' && name.lastIndexOf('.html') === name.length - 5){

      _replace(path.join(_dir, name));
    }
  });
}

const oldMeta = `<meta name="viewport" content="width=device-width,initial-scale=1">`;
const newMeta = `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit:cover" />`;
function _replace(_path){
  let content = fs.readFileSync(_path, 'utf-8');
  content = content.replace(oldMeta, newMeta);
  fs.writeFileSync(_path, content);
  console.log('fit firefox success!', path.relative(__dirname, _path));
}

readdirAndReplace(path.join(__dirname, 'docs'));
readdirAndReplace(path.join(__dirname, 'docs/zh'));