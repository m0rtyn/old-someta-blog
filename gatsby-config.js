module.exports = {
  siteMetadata: {
    siteTitle: 'Такая Мета',
    siteDescription:
      'Блог о том как быть «над собой»: этология, нейробиология, когнитивистика, рациональность 🧿',
    siteImage: '/banner.png',
    siteUrl: 'https://someta.site/',
    pathPrefix: '/',
    siteLanguage: 'ru',
    ogLanguage: 'ru_RU',
    author: 'Мартын',
    authorDescription: 'Программирует и пишет',
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: 'telegram',
        url: 'https://t.me/metabaza/',
        altText: 'Чат сообщества'
      },
      {
        icon: 'patreon',
        url: 'https://patreon.com/someta',
        altText: 'Поддержи проект на Patreon'
      }
    ]
  },
  plugins: [
    'gatsby-alias-imports',
    'gatsby-plugin-postcss',
    // 'gatsby-theme-someta',
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
    // `gatsby-plugin-manifest`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Такая мета',
        short_name: 'someta.site',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#3a5f7d',
        display: 'standalone',
        icon: 'src/assets/favicon.png'
      }
    },
    // `gatsby-plugin-sitemap`
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    // `gatsby-plugin-google-analytics`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-158600568-1'
      }
    },
    // `gatsby-plugin-disqus`,
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'mrtnsn'
      }
    },
    // `gatsby-plugin-feed-mdx`,
    {
      resolve: 'gatsby-plugin-feed-mdx',
      options: {
        query: `
            {
              site {
                siteMetadata {
                  siteTitle
                  siteDescription
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map(edge => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}/${edge.node.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}/${edge.node.fields.slug}`,
                custom_elements: [
                  { 'content:encoded': edge.node.html }
                ]
              })),
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Такая Мета',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/',
            // optional configuration to specify external rss feed, such as feedburner
            link: 'https://feeds.feedburner.com/someta'
          }
        ]
      }
    },
    // 'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.someta.site/',
        sitemap: 'https://www.someta.site/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // 'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public|old-website-sources)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    // "gatsby-plugin-react-svg",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    // "source-notionso"
    {
      resolve: `gatsby-source-notion-contents`,
      options: {
        token: '0c1c4545e76f57218e25fc2b61ec80a091f99a2d66acc0ef5bbd5b9508c670cd69941ccda0dd1dbd0db25c87aad96751714d1720103ba4a2d082772f12a5b6773515dae143eee580c6df2e29b425',
        // ids: ['68ece14c9e0a4ceeb652be6f82604c3c'],
        // prefix: '/',
        // removeStyle: false,
      },
    },
    // {
    //   resolve: 'gatsby-source-notionso',
    //   options: {
    //     rootPageUrl: process.env.GATSBY_NOTIONSO_ROOT_PAGE_URL, // the notion page URL of the root page
    //     tokenv2: process.env.GATSBY_NOTIONSO_TOKEN, // not used yet (the page needs to be public)
    //     name: 'blog', // name of your data set to identify the data for the instance of plugin
    //     debug: false, // set to true to enable debugging information
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages`,
    //   },
    // },
  ]
};
