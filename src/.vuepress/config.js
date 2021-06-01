const path = require('path');
module.exports = {
  base: "/history-navigation-vue/",
  dest: path.join(__dirname, '../../docs/'),
  head: [
    ['link', { rel: 'icon', href: '/logo-fav-end.png' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'History Navigation Vue',
      // description  : 'The HTML5 history navigation for Vue Web apps'
      // description: 'The navigation base on HTML5 History for Vue Web apps',
      // description: 'Native-like Navigation for Vue web apps'
      // description: 'A multi-page Navigation for single-page apps.'
      // description: 'A native-like Navigation for Web apps.',
      // description: 'Multi-page navigation on single-page apps.',
      description: 'A native-like navigation for web apps.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'History Navigation Vue',
      description: '一个原生体验的 web 端页面导航'
    }
  },
  // markdown: {
  //   extendMarkdown(md){
  //     md.use(require('@sup39/markdown-it-attr'));
  //   }
  // },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
     '@vuepress/last-updated', 
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-58952506-1' // UA-00000000-0
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    repo: 'hezedu/history-navigation-vue',
    docsDir: 'src',
    smoothScroll: true,
    lastUpdated: 'Last Updated', // string | boolean
    locales: {
      "/": {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        docsBranch: 'gh-pages',
        editLinks: true,
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'API', link: '/api/' },
          { text: 'Examples', link: '/examples/' }
        ],
        sidebar: 'auto'
      },
      "/zh/": {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: 'API', link: '/zh/api/' },
          { text: '示例', link: '/zh/examples/' }
        ],
        sidebar: 'auto'
      }

    }
  }
}