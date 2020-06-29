module.exports = {
    title: '个人博客名称',
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
    }
  }