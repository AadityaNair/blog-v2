import React from "react"
import { Link } from "gatsby"

export default ({ props }) => (
  <header>
    {/* use the below link to go back  */}
    <Link to="/">Go back</Link>
    <h1>
      <Link to="/">The Blog of Nair</Link>
    </h1>

    <Link to="/about">about</Link>
    <Link to="/blog">blog</Link>
  </header>
)
