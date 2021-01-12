module.exports = {
  siteMetadata: {
    title: 'gatsby-test',
    siteUrl: 'http://localhost:8000'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-ts-config',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/templates/layout.tsx')
      }
    },
    {
      resolve: 'gatsby-source-custom-api',
      options: {
        url: 'http://localhost:3003/links',
        rootKey: 'links'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/i18n`,
        languages: ['en', 'de'],
        defaultLanguage: 'en',
        redirect: true
      }
    }
  ]
}
