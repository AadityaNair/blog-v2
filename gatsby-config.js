config = require("./conf")

metadata = config.metadata
// TODO: Investigate all plugin features
// TODO: MDX integration, remote graphql, latex, gatsby remark code titles
// TODO: Content Security Policy features
dev_plugins = [
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
        { resolve: `gatsby-remark-responsive-iframe` },
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: { icon: false },
        },
        {
          resolve: "gatsby-remark-external-links", //TODO: Not working
          options: { target: "_blank" },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "prismjs-language-",
            inlineCodeMarker: "^",
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
    // TODO: Performance: Reduce fonts download to the exact style(or even character) we need
    // TODO Try using the NPM packages or webfont-loader whichever works
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        { family: `Alegreya Sans` },
        { family: `Cantarell` },
        { family: `IBM Plex Mono` },
        { family: `Merriweather Sans` },
        { family: `Source Code Pro` },
        { family: `Source Sans Pro`, variants: ["400", "400i"] },
      ],
    },
  },
  {
    // TODO: Move to production later
    resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    options: {
      // TODO: Has some option for trailing slashes. Check if it is important
      // Also figure out why canonical URL is important and the cost of having it different from actual URL
      siteUrl: config.metadata.siteUrl,
    },
  },
]

prod_plugins = [
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
            inlineCodeMarker: "^",
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
    resolve: `gatsby-plugin-manifest`, // Before Offline
    options: {
      name: config.metadata.title,
      short_name: config.metadata.shortName,
      start_url: `/`,
      background_color: config.currentTheme["background"],
      theme_color: config.currentTheme["highlight"],
      display: `standalone`,
      icon: `static/icon.svg`,
    },
  },
  {
    // TODO: Try looking at workbox config to prevent a critical chain performance issue
    resolve: `gatsby-plugin-offline`, // After Manifest
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
  { resolve: `gatsby-plugin-netlify` },
  `gatsby-plugin-netlify-cache`,
  `gatsby-plugin-preact`,
]

if (process.env.NODE_ENV == "production") {
  final_plugins = dev_plugins.concat(prod_plugins)
} else {
  final_plugins = dev_plugins
}

module.exports = {
  /* Your site config here */
  siteMetadata: config.metadata,
  plugins: final_plugins,
}

// TODO: gatsby-transformer-remark, pull excerpt from the frontmatter properly
// Tried this, doesn't work
// diff --git a/gatsby-config.js b/gatsby-config.js
// index a9496b0..03649e1 100644
// --- a/gatsby-config.js
// +++ b/gatsby-config.js
// @@ -36,6 +36,10 @@ module.exports = {
//     {
//     resolve: `gatsby-transformer-remark`,
//     options: {
// +        excerpt: function(file, options) {
// +          file.excerpt = file.data.excerpt
// +          return file.data.excerpt
// +        },
//         commonmark: true,
//         footnotes: true,
//         pedantic: true,
