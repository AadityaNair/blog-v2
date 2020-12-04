config = require("./conf")

metadata = config.metadata
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
  `gatsby-plugin-mdx`,
  `gatsby-plugin-remove-trailing-slashes`,
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
      postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
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
          resolve: "gatsby-remark-external-links",
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
    resolve: `gatsby-plugin-web-font-loader`,
    options: {
      google: {
        families: [
          "Alegreya Sans",
          "Cantarell",
          "IBM Plex Mono",
          "Merriweather Sans",
          "Source Code Pro",
          "Source Sans Pro:400,400:italic",
        ],
      },
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
      icon_options: {
        purpose: `maskable`, // TODO: Actually create a maskable icon
      },
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
  {
    resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    options: {
      siteUrl: config.metadata.siteUrl,
      noTrailingSlash: true,
    },
  },
  {
    resolve: `gatsby-plugin-netlify`,
    options: {
      mergeSecurityHeaders: true,
      mergeLinkHeaders: true,
      mergeCachingHeaders: true,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-169274463-1",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      // exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 0,
      // Enables Google Optimize using your container Id
      //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // Enables Google Optimize Experiment ID
      //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
      // Set Variation ID. 0 for original 1,2,3....
      //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      // Defers execution of google analytics script after page load
      defer: true,
      // Any additional optional fields
      //sampleRate: 5,
      //siteSpeedSampleRate: 10,
      //cookieDomain: "example.com",
    },
  },
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
