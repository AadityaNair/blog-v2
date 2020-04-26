import React from "react"
import "../styles/mystyle.css"

export default () => (
  <footer className="items-center justify-center mt-auto text-xs md:text-sm">
    Copyright {new Date().getFullYear()} by Aaditya M Nair. Source{" "}
    <a href="https://github.com/AadityaNair/blog-v2">here</a>
  </footer>
)
