import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"

const goBack = () => {
  navigate(-1)
}

export default props => (
  <header>
    <h1>
      <Link to="/">The Blog of Nair</Link>
    </h1>
    <a href="#" onClick={goBack}>
      Go back
    </a>
    <Link to="/about">about</Link>
    <Link to="/blog">blog</Link>
  </header>
)
