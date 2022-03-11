module.exports = {
    title: '大花花笔记',
    theme: '@vuepress/theme-blog',
    themeConfig: {
        nav: [
            {
                text: '笔记',
                link: '/',
            },
            {
                text: '标签',
                link: '/tag/',
            },
        ],
        directories: [
            {
                id: 'post',
                dirname: 'posts',
                path: '/',
                itemPermalink: '/post/:year-:month-:day/:slug',
            }
        ],
        globalPagination: {
            prevText: '上一页',
            nextText: '下一页',
            lengthPerPage: 5
        },
        footer: {
            contact: [
                { type: 'github', link: 'https://github.com/tomydl123' },
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
    markdown: {
        lineNumbers: true
    },
}