/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "DevCordenadas",
    description: "Este es el sitio portafolio de DevCordenadas",
    author: "@DCordenadas",
    twitterUsername: "@DCordenadas",
    image: "/julifoto_byn.png",
    siteUrl: "https://dev-cordenadas.xyz/",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://intense-refuge-03241.herokuapp.com",
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        queryLimit: 1000, // Default to 100
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `McLaren`,
            variants: [`400`],
          },
          {
            family: `Lato`,
            variants: [`400`],
          },
        ],
      },
    },
  ],
}
