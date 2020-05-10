import React from "react"
import { Link } from "gatsby"
import "../styles/mystyle.css"

export default (props) => (
  <header className="items-center justify-center flex flex-col">
    <h1 className="md:text-6xl text-4xl">
      <Link
        to="/"
        className="font-cursive font-extrabold italic text-highlight"
      >
        Aaditya M Nair
      </Link>
    </h1>
    <div className="flex flex-row space-x-6 pt-3">
      <Link
        to="/about"
        activeClassName="italic"
        className="capitalize font-website text-other"
      >
        about
      </Link>
      <Link
        to="/blog"
        activeClassName="italic"
        className="capitalize font-website text-other"
      >
        blog
      </Link>
    </div>
  </header>
)
