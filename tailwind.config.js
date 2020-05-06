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
    extend: {
      // TODO: Can remove the extend part at the end
      // TODO: Maybe have a gradient for a few colours
      colors: {
        background: "#000022",
        text: "#FDFFFC",
        highlight: "#e71d36",
        // Proerly decide scheme on below
        link: "#2EC4B6",
        other: "#FF9F1C",
        other2: "#85FFC7",
        lines: "#f55d3e",
      },
    },
  },
}
