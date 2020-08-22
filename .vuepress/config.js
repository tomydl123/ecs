module.exports = {
    title: '大花花日记',
    theme: '@vuepress/theme-blog',
    themeConfig: {
      directories:[
        {
          id: 'post',
          dirname: 'posts',
          path: '/',
          itemPermalink: '/post/:year-:month-:day/:slug',
        }
      ],
      footer: {
        contact: [
          {
            type: "mail",
            link: "mailto:xxz_20083683@163.com"
          }
        ],
        copyright: [
          {
            text: "京ICP备20020562号-1",
            link: "http://www.beian.miit.gov.cn"
          }
        ]
      },
    },
  }