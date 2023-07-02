import { defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

module.exports = {
  theme: defaultTheme({
    logo: '/favicon.png',
    locales: {
        '/': {
            // navbar
            // navbar: navbarZh,
            selectLanguageName: '简体中文',
            selectLanguageText: '语言',
            selectLanguageAriaLabel: '语言',
            // sidebar
            // sidebar: sidebarZh,
            // page meta
            editLinkText: '在 GitHub 上编辑此页',
            lastUpdatedText: '上次更新',
            contributorsText: '贡献者',
            // custom containers
            tip: '提示',
            warning: '注意',
            danger: '警告',
            // 404 page
            notFound: [
              '这里什么都没有',
              '我们怎么到这来了？',
              '这是一个 404 页面',
              '看起来我们进入了错误的链接',
            ],
            backToHome: '返回首页',
            // a11y
            openInNewWindow: '在新窗口打开',
            toggleColorMode: '切换颜色模式',
            toggleSidebar: '切换侧边栏',
        },
        "/en/": {
            selectLanguageName: 'English',
            selectLanguageText: 'Language',
            selectLanguageAriaLabel: 'Language',
            // sidebar
            // sidebar: sidebarZh,
            // page meta
            editLinkText: '在 GitHub 上编辑此页',
            lastUpdatedText: '上次更新',
            contributorsText: '贡献者',
            // custom containers
            tip: '提示',
            warning: '注意',
            danger: '警告',
            // 404 page
            notFound: [
              '这里什么都没有',
              '我们怎么到这来了？',
              '这是一个 404 页面',
              '看起来我们进入了错误的链接',
            ],
            backToHome: '返回首页',
            // a11y
            openInNewWindow: '在新窗口打开',
            toggleColorMode: '切换颜色模式',
            toggleSidebar: '切换侧边栏',
        }
    }
  }),
  locales: {
        '/': {
            lang: 'zh-CN',
            title: '未知位账户中心 文档',
            description: '未知位账户中心 文档',
            selectLanguageName: '简体中文',
        },
        '/en/': {
            lang: 'en-US',
            title: 'UBAC Docs',
            description: 'UBAC Docs',
      }
    }
}