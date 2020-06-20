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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Dev Cordenadas App",
        short_name: "DevCordenadas",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#2caeba",
        display: "minimal-ui",
        icon: "src/assets/favicon.png",
        crossOrigin: `use-credentials`,
      },
    },
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
        cachePublic: true,
      },
    },
    {
      //https://intense-refuge-03241.herokuapp.com
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:3001",
        queryLimit: 1000, // Default to 100
        contentTypes: ["jobs", "projects", "blogs"],
        singleTypes: ["about"],
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
