import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import Header from "../components/header"

export default ({ data }) => (
  <div>
    <Img fixed={data.file.childImageSharp.fixed} alt="author thumb" />
    {/* <h1>{data.site.siteMetadata.title}</h1> */}
    <h3>
      I'm <strong itemProp="name">{data.site.siteMetadata.name}</strong>, a
      <em itemProp="jobTitle"> Job Title</em>.
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
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(height: 125, width: 125) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
