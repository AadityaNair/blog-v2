/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Website of Nair",
    blogtitle: "The Blog of Nair",
    fullName: "Aaditya M Nair",
    siteUrl: `http://net.aadityanair.ml`,
    description: "I love exploring how large systems work",
    jobTitle: "Software Engineer",
    social: {
      linkedin: "https://www.linkedin.com/in/aadityanair/",
      github: "https://github.com/AadityaNair",
      email: "me@aadityanair.ml",
    },
    repo: "https://github.com/AadityaNair/blog-v2",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: { include: /assets/ },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          { resolve: `gatsby-remark-images` },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: { icon: false },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "prismjs-language-",
              inlineCodeMarker: null,
              aliases: { sh: "bash" },
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Blog of Nair`,
        short_name: `NairBlog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/icon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about`, `/blog/*`],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/tags`],
      },
    },
  ],
}
