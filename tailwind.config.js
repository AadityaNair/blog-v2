config = require("./conf")

module.exports = {
  purge: ["./src/**/*.jsx"],
  // TODO: Push the fontFamily to conf.js. Somehow
  theme: {
    fontFamily: {
      cursive: ["IBM Plex Mono"],
      website: ["Alegreya Sans", "sans-serif"],

      head: ["Merriweather Sans", "serif"],
      text: ["Ubuntu"],
      subtext: ["Cantarell"],
      mono: ["Source Code Pro"],
    },
    // TODO: Maybe have a gradient for a few colours
    colors: config.currentTheme,
  },
}
