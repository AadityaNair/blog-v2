import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

// import Header from "../components/header"

export default ({ data }) => (
  <div>
    <Helmet defer={false} defaultTitle="The Blog of Nair">
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="author" content="Aaditya M Nair" />
      <meta name="description" content="My experience and stuff" />

      <meta property="og:image" content="" />
      <meta property="og:description" content="" />
      <meta property="og:title" content="" />

      <meta property="og:article:published_time" content="" />
      <meta property="og:article:author" content="" />
      <meta property="og:article:tag" content="" />
      <meta property="tags" content="a,b,c,d" />
    </Helmet>

    <Img fixed={data.file.childImageSharp.fixed} alt="author thumb" />
    {/* <h1>{data.site.siteMetadata.title}</h1> */}
    <h3>
      I'm <strong itemProp="name">{data.site.siteMetadata.name}</strong>, a
      <em itemProp="jobTitle"> Software Engineer</em>.
    </h3>
    <h3>I love exploring how large systems work</h3>
    <nav>
      <Link to="/about">about</Link>
      <Link to="/blog">blog</Link>
    </nav>
    <nav>
      <a href="https://www.linkedin.com/in/aadityanair/">linkedin</a>
      <a href="https://github.com/AadityaNair">github</a>
      <a href="mailto:me@aadityanair.ml">email</a>
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
