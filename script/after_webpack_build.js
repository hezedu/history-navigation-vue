const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');
const zlib = require('zlib');

const banner = 
`/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()} hezedu
  * @license ${pkg.license}
  */
 `
const dir = path.join(__dirname, '../dist');
const names = fs.readdirSync(dir);
const year = (new Date()).getFullYear()
let totalContent = '';
names.forEach(name => {
  let filename = path.join(dir, name);
  let content = fs.readFileSync(filename, 'utf-8');
  content = content.replace('__VERSION__', pkg.version);
  content = content.replace('__NOW_YEAR__', year);
  content = banner + content;
  if(name.lastIndexOf('.min') !== -1){
    totalContent = totalContent + content;
  }
  console.log(name + ' add commit banner ok');
  fs.writeFileSync(filename, content);
}); 

const zipped = zlib.gzipSync(totalContent);
console.log('Pro minimize files total zipped size: ', (zipped.length / 1024).toFixed(2) + 'kb');

