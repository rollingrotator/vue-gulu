module.exports = {
  title: 'Hots-UI',
  dest: './dist',
  base:'/hots/',
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
          // ['/install/', '安装'],
          ['/get-started/', '开始']
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
            ['/components/button','button'],
            ['/components/input','input'],
            ['/components/tabs','tabs'],
            ['/components/pages','pages'],
            ['/components/table','table'],
            ['/components/sticky','sticky'],
            ['/components/cascader','cascader'],
            ['/components/uploader','uploader'],
            ['/components/collapse','collapse'],
            ['/components/layout','layout'],
            ['/components/popover','popover'],
            ['/components/toast','toast'],
            ['/components/slides','slider'],

            // ['/components/grid','grid'],
            // ['/components/nav','nav'],


        ]
      }
    ],
    search: true,
    searchMaxSuggestions: 10,

  },
  markdown: {
    lineNumbers: true
  }
}