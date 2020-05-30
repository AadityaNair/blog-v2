require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("prismjs/plugins/command-line/prism-command-line.css")
require("prismjs/themes/prism-solarizedlight.css")
// require("./src/styles/prism-dracula.css")

// There was an if-else condition here to switch the syntax-highlighting theme with the blog theme
// That doesn't seem to work in a production build due to some react issue. So, might as well remove
// the if-else statement.
// TODO: Switch themes from website itself
// This might help: https://github.com/adamwathan/theming-tailwind-demo
