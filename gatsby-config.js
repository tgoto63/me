module.exports = {
  siteMetadata: {
    title: 'tgoto63.me',
    siteUrl: 'https://tgoto63.me',
    description: 'The portfolio site of tgoto63.',
    twitter: '@tgoto63'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@tgoto63`,
        limit: 5
      }
    },
    {
      resolve: 'gatsby-source-atom',
      options: {
        source: `https://note.mu/tgoto63/atom`
      }
    }
  ]
}
