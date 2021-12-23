// https://ssr.vuejs.org/zh/

var child_process = require('child_process');
const conf = require('../config');
const fs = require('fs');
const path = require('path');
const proDistPath = path.join(__dirname, '../dist');
const fsExt = require('fs-extra');
const contextConfig = require('./ssr-context-config');

module.exports = function (callback) {
    console.log('=============== ssr build 开始 ===============\n');
    console.log('+++++++ 创建 ssr bundle... +++++++');
    child_process.execSync('npm run ssr_build');
    console.log('+++++++ 创建 ssr bundle 成功！+++++++\n');
    callback();

    const render = require('./ssr-render');

    const routeMap = conf.routes.map;
    const routeKeys = Object.keys(routeMap);
    function loop (i) {
        if (i < routeKeys.length) {
            const key = routeKeys[i];
            const context = Object.assign({}, routeMap[key]);
            if(contextConfig[key]){
                Object.assign(context, contextConfig[key]);
            }
            // 不能为 undefined
            if ( context.ssrHeadScript === undefined) {
                context.ssrHeadScript = '';
            }

            context.title = context.title + conf.routes.titleSuffix;
            context.url = key;
            render(context, (html) => {
                const name = context.url.replace(/^\//, '');
                
                const distPath = path.join(proDistPath, name);
                fsExt.mkdirpSync(distPath);
                const filePath = path.join(distPath, 'index.html');
                fs.writeFileSync(filePath, html);
                const stat = fs.statSync(filePath);
                console.log(name + '/index.html build 成功！', B2KB(stat.size));
                loop (i + 1);
            })
        } else {
            console.log('\n=============== ssr build 结束 ===============\n');
        }
    }

    loop (0);
}


function B2KB(size){
    return (size / 1024).toFixed(2) + 'KB';
}
