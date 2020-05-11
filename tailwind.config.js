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
    extend: {
      // TODO: Can remove the extend part at the end
      // TODO: Maybe have a gradient for a few colours
      colors: {
        background: "#000000",
        text: "#FDFFFC",
        highlight: "#e71d36",
        // Proerly decide scheme on below
        link: "#2EC4B6",
        nav: "#e9c46a",
        lines: "#f55d3e",
        texthyperlink: "#3a86ff",
      },

      // fontSize: {
      //   cont: "",
      //   h1: "",
      //   h2: "",
      //   subt: "",
      // },
    },
  },
}
