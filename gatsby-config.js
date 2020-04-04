/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Hi, I am Aaditya",
    blogtitle: "The Blog of Nair",
    name: "Aaditya M Nair",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
  ],
}
