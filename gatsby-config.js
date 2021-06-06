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
    // {
    //   resolve: 'gatsby-plugin-feed-mdx',
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteTitle
    //             siteDescription
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, posts } }) =>
    //           posts.map(post => ({
    //             ...post.frontmatter,
    //             description: post.desc,
    //             date: post.publish_date.startDate,
    //             url: `${site.siteMetadata.siteUrl}/${post.url}`,
    //             guid: `${site.siteMetadata.siteUrl}/${post.slug}`,
    //             custom_elements: [{ 'content:encoded': post.html }]
    //           })),
    //         query: `
    //           posts(slug: { eq: $slug }) {
    //             name
    //             tags
    //             desc
    //             content_type
    //             status
    //             url
    //             html
    //             slug
    //             cover_image
    //             publish_date {
    //               startDate(formatString: "DD MMM YYYY", fromNow: false)
    //             }
    //             last_edited_time
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: 'Такая Мета',
    //         // optional configuration to insert feed reference in pages:
    //         // if `string` is used, it will be used to create RegExp and then test if pathname of
    //         // current page satisfied this regular expression;
    //         // if not provided or `undefined`, all pages will have feed reference inserted
    //         match: '^/',
    //         // optional configuration to specify external rss feed, such as feedburner
    //         link: 'https://feeds.feedburner.com/someta'
    //       }
    //     ]
    //   }
    // },
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
    // "gatsby-source-notion-database"

    {
      resolve: `@conradlin/gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table:
              'https://www.notion.so/martyns0n/68ece14c9e0a4ceeb652be6f82604c3c?v=c92f3246c4bd47beb7b4794ae42371e9',
            cacheType: 'html'
          }
        ]
      }
    }
  ]
};
