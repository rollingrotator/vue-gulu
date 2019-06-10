module.exports = {
  title: 'Hots-UI',
  description: '这是一个以风暴英雄为主题的vue-ui库',
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          {text: 'Chinese', link: '/language/chinese'},
          {text: 'Japanese', link: '/language/japanese'}
        ]
      }
    ],
    sidebar: [
      {
        title: '启动',
        collapsable: false,
        children: [
          ['/install/', '安装'],
          ['/get-started/', '开始']
        ]
      },
      {
        title: '组件',
        children: [
            ['/components/button','按钮']
        ]
      }
    ],
    search: true,
    searchMaxSuggestions: 10,

  },
  markdown: {
    lineNumbers: true
  },
  base:'/hots/'
}