import React from "react"

import "../styles/mystyle.css"

export default () => (
  <footer className="flex items-center justify-center mt-auto text-xs md:text-sm font-subtext">
    Copyright {new Date().getFullYear()} by Aaditya M Nair. Source{" "}
    <a className="ml-1 text-nav" href="https://github.com/AadityaNair/blog-v2">
      here
    </a>
  </footer>
)
