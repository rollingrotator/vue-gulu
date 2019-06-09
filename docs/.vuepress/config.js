module.exports = {
  title: 'Hots-UI',
  description: '这是一个以风暴英雄为主题的vue-ui库',
  themeConfig: {
    sidebar: [
      '/',
      {
        title: '启动',
        collapsable: false,
        children: [
          ['/install/', '安装'],
          ['/get-started/', '开始'],
        ]
      },
      {
        title: '组件',
        children: [['/components/button','按钮']],
        collapsable: false
      },

    ],
    nav: [
      {text: 'Home', link: '/'},
      {
        text: 'Guide',
        items: [
          {text: 'Chinese', link: '/language/chinese'},
          {text: 'Japanese', link: '/language/japanese'}
        ]
      },
      {text: 'External', link: 'https://google.com'},
    ]
  },
  //这下里面用来展示代码行号
  markdown: {
    lineNumbers: true
  }
}