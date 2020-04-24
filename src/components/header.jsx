import React from "react"
import { Link } from "gatsby"
import "../styles/mystyle.css"

export default props => (
  <header className="items-center justify-center flex flex-col">
    <h1 className="md:text-4xl text-3xl">
      <Link to="/">Aaditya M Nair</Link>
    </h1>
    <div className="flex flex-row space-x-6 pt-3">
      <Link to="/about" activeClassName="italic">
        about
      </Link>
      <Link to="/blog" activeClassName="italic">
        blog
      </Link>
    </div>
  </header>
)
