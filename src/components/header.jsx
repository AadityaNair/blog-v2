import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import "../styles/mystyle.css"

const goBack = () => {
  navigate(-1)
}

export default props => (
  <header className="">
    <h1>
      <Link to="/">The Blog of Nair</Link>
    </h1>
    <button onClick={goBack}>Go back</button>
    <Link to="/about">about</Link>
    <Link to="/blog">blog</Link>
  </header>
)
