const config = require("./conf")

require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")

if (config.websiteTheme === "light") {
  require("prismjs/themes/prism-solarizedlight.css")
} else {
  require("./src/styles/prism-dracula.css")
}
