// 只存在后端的数据。开发时需要 npm run build 后，在 npm run preview 查看。

module.exports = {
    '/recall': {
        ssrHeadScript: `<script>
(function(){
    if(location.pathname.indexOf('/recall') !== -1) {
    var r = 'https://r.zidanduanxin.cn/i/official/qbKk40btVMTVjvya?';
    switch(location.search.substr(1)){
    case 'utm_source=op20190124underline&utm_medium=qrcode&utm_content=001&utm_campaign=2019springfestvial':
    return location.href = r + 'utm_source=op20180108_gongzhonghao&utm_content=gongzhonghao_29&utm_campaign=2019spring';

    case 'utm_source=op20190124underline&utm_medium=qrcode&utm_content=002&utm_campaign=2019springfestvial':
    return location.href = r + 'utm_source=op20180108_gongzhonghao&utm_content=gongzhonghao_30&utm_campaign=2019spring';
    
    case 'utm_source=op20190124underline&utm_medium=qrcode&utm_content=003&utm_campaign=2019springfestvial':
    return location.href = r + 'utm_source=op20180108_gongzhonghao&utm_content=gongzhonghao_31&utm_campaign=2019spring';

    case 'utm_source=op20190124underline&utm_medium=qrcode&utm_content=004&utm_campaign=2019springfestvial':
    return location.href = r + 'utm_source=op20180108_gongzhonghao&utm_content=gongzhonghao_32&utm_campaign=2019spring';
    }
}
})();
</script>`
    }
}
