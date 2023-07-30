module.exports = {
  siteMetadata: {
    title: `개발자의 개발 블로그`,
    description: `Java, Back-end 개발과 관련한 포스팅을 작성하는 블로그 입니다.`,
    author: `Susan`,
    siteUrl: 'https://comtrial.github.io/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `contents`,
              path: `${__dirname}/contents`,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/static`,
            }
          },
          {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
              siteUrl: 'https://comtrial.github.io/',
              stripQueryString: true,
            },
          },
          // 'gatsby-plugin-sitemap',
          'gatsby-plugin-advanced-sitemap',
          {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              host: 'https://YOUR-URL.com/',
              sitemap: 'https://YOUR-URL.com/sitemap.xml',
              policy: [{ userAgent: '*', allow: '/' }],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },

        ],
      },
    },
  ],
};