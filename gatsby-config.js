module.exports = {
  siteMetadata: {
    siteTitle: 'Такая Мета',
    siteDescription:
      'Блог о том как быть «над собой»: этология, нейробиология, когнитивистика, рациональность 🧿',
    siteImage: '/banner.png',
    siteUrl: 'https://someta.site/',
    pathPrefix: '/',
    siteLanguage: 'ru',
    ogLanguage: `ru_RU`,
    author: 'Мартын',
    authorDescription: '( играет в проекты )',
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `telegram`,
        url: `https://tele.click/sometach`,
        altText: `Чат сообщества`
      },
      {
        icon: `patreon`,
        url: `https://patreon.com/someta`,
        altText: `Поддержи проект на Patreon`
      }
    ]
  },
  plugins: [
    `gatsby-alias-imports`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          feedShowMoreButton: 'Показать ещё',
          feedSearchPlaceholder: 'Поиск',
          cardReadMoreButton: 'Читать →',
          allTagsButton: 'Все тэги'
        },
        feedItems: {
          limit: 13,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Такая мета`,
        short_name: `someta.site`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-158600568-1'
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mrtnsn`
      }
    }
  ]
};
