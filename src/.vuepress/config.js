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
      description: 'A native-like Navigation for Web apps.'
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
    docsDir: 'docs',
    smoothScroll: true,
    lastUpdated: 'Last Updated', // string | boolean
    locales: {
      "/": {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'API', link: '/api/' },
          { text: 'Examples', link: '/examples/' }
        ],
        sidebar: 'auto'
      }

    }
  }
}