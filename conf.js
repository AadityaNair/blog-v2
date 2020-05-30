// TODO: ** Document what each variable does in the system
// TODO: Always validate if websiteTheme is either `dark` or `light`
const websiteTheme = "light"

const metadata = {
  title: "Website of Nair",
  shortName: "Aaditya M Nair", // Name of the PWA
  blogtitle: "The Blog of Nair",
  fullName: "Aaditya M Nair",
  siteUrl: `https://amnair.dev`,
  description: "I love exploring how large systems work",
  jobTitle: "Software Engineer",
  social: {
    linkedin: "https://www.linkedin.com/in/aadityanair/",
    github: "https://github.com/AadityaNair",
    email: "me@amnair.dev",
  },
  repo: "https://github.com/AadityaNair/blog-v2",
}

// TODO: Better Naming of elements
// TODO: Gradients
const darkColours = {
  background: "#000000",
  text: "#FDFFFC",
  highlight: "#E71D36",
  link: "#2EC4B6",
  nav: "#E9C46A",
  lines: "#F55D3E",
  texthyperlink: "#3A86FF",
  gray: "#AED9E0", // TODO: fix this extra colour. This was needed by blockquote in post. /list-all-commands
}

const lightColours = {
  background: "#FFFFFF",
  text: "#000000",
  blogtext: "#515151",
  blogbold: "#313131",

  highlight: "#E76f51",
  link: "#264653",
  nav: "#028090",
  lines: "#E76F51",
  texthyperlink: "#3A86FF",
  gray: "#33415C",
}

var currentTheme = lightColours
if (websiteTheme === "dark") {
  currentTheme = darkColours
}

const isProduction = process.env.NODE_ENV === "production"
const isDevelopment = process.env.NODE_ENV === "developement"
const isNetlify = "NETLIFY" in process.env

module.exports = {
  currentTheme,
  darkColours,
  lightColours,
  metadata,
  websiteTheme,
  isProduction,
  isDevelopment,
  isNetlify,
}
