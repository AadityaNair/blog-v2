import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Metadata from "../components/meta"
import "../styles/mystyle.css"

export default ({ data }) => (
  <div>
    <Metadata
      isBlogPost={false}
      title="The website of Nair"
      description="My experience as a Software Engineer"
    />
    <Img
      // className="h-16 w-16 rounded"
      fixed={data.file.childImageSharp.fixed}
      alt="author thumb"
    />
    {/* <h1>{data.site.siteMetadata.title}</h1> */}
    <h1>
      I'm{" "}
      <strong className="text-purple-500" itemProp="name">
        {data.site.siteMetadata.name}
      </strong>
      , a<em itemProp="jobTitle"> Software Engineer</em>.
    </h1>
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
