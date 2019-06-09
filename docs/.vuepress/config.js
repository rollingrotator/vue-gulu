module.exports = {
  title: 'Hots-UI',
  description: '这是一个以风暴英雄为主题的vue-ui库',
  themeConfig: {
    sidebar: [
      '/',
      '/install/',
      ['/get-started/', 'Explicit link text']
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  },
  //这下里面用来展示代码行号
  markdown: {
    lineNumbers: true
  }
}