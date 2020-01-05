module.exports = {
  siteMetadata: {
    siteTitle: 'Яма Мартына',
    siteDescription: 'Блог и хранилище проектов. Странное место 🧿',
    siteImage: '/banner.png',
    siteUrl: 'https://martyn.guru/',
    pathPrefix: '/',
    siteLanguage: 'ru',
    ogLanguage: `ru_RU`,
    author: 'Мартын',
    authorDescription: 'Frontend-разработчик @ Semrush',
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `github`,
        url: `https://github.com/martyns0n`
      },
      {
        icon: `telegram`,
        url: `https://tele.click/martyns0n`
      },
      {
        icon: `google`,
        url: `mailto:mrtnsn.dev@gmail.com`
      }
    ]
  },
  plugins: [
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
          limit: 33,
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
        name: `Martyn's pit`,
        short_name: `Martynpit`,
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
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
