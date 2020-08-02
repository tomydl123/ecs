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
    }
  }