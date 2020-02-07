module.exports = {
  siteMetadata: {
    siteTitle: 'Такая Мета',
    siteDescription:
      'О том как быть «над собой»: этология, нейробиология, когнитивистика, рациональность 🧿',
    siteImage: '/banner.png',
    siteUrl: 'https://someta.site/',
    pathPrefix: '/',
    siteLanguage: 'ru',
    ogLanguage: `ru_RU`,
    author: 'Мартын',
    authorDescription: '«Трансцедентально»',
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `patreon`,
        url: `https://patreon.com/someta`
      },
      {
        icon: `telegram`,
        url: `https://tele.click/sometach`
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
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mrtnsn`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'Table of Contents'
            }
          }
        ]
      }
    }
  ]
};
