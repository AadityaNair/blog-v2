// TODO: Better Naming of elements
module.exports = {
  purge: ["./src/**/*.jsx"],
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
    colors: {
      background: "#000000",
      text: "#FDFFFC",
      highlight: "#E71D36",
      link: "#2EC4B6",
      nav: "#E9C46A",
      lines: "#F55D3E",
      texthyperlink: "#3A86FF",
      gray: "#AED9E0", // TODO: fix this extra colour. This was needed by blockquote in post. /list-all-commands
    },
  },
}
