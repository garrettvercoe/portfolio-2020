module.exports = {
  siteMetadata: {
    title: `Garrett Vercoe`,
    description: `Interactive Designer`,
    author: "Garrett Vercoe",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `react-scroll-horizontal`,
    `react-player`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
{
    resolve: `gatsby-plugin-parsely-analytics`,
    options: {
      apikey: 'garrettvercoe.com',
      enableInDevelopment: false // send page views when NODE_ENV !== prod
    }
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "garrettvercoe", // (REQUIRED, replace with your own)
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Garrett Vercoe Portfolio`,
        short_name: `Garrett Vercoe`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111744215-1",
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
