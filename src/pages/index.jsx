import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
// import Header from "../components/header"

export default ({ data }) => (
  <div>
    <img src="Test image" alt="author thumb" />
    {/* <h1>{data.site.siteMetadata.title}</h1> */}
    <h3>
      I'm <strong itemprop="name">{data.site.siteMetadata.name}</strong>, a
      <em itemprop="jobTitle"> Job Title</em>.
    </h3>
    <h3>My Bio</h3>
    <nav>
      <Link to="/about">about</Link>
      <Link to="/blog">blog</Link>
    </nav>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
  }
`
