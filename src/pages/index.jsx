import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Metadata from "../components/meta"
import "../styles/mystyle.css"

export default ({ data }) => (
  <div className="flex flex-col items-center justify-center h-screen ">
    <Metadata
      isBlogPost={false}
      title="The website of Nair"
      description="My experience as a Software Engineer"
    />
    {/* <div className="flex flex-col justify-center items-center bg-gray-500"> */}
    <Img
      className="rounded-full"
      fixed={data.file.childImageSharp.fixed}
      alt="author thumb"
    />

    <h1 className="md:text-5xl text-lg ">
      I'm{" "}
      <strong className="" itemProp="name">
        {data.site.siteMetadata.name}
      </strong>
      , a <em itemProp="jobTitle"> Software Engineer</em>.
    </h1>
    <h3 className="md:text-3xl ">I love exploring how large systems work</h3>

    <nav className=" flex flex-row items-center justify-between space-x-6 pt-6">
      <Link className="" to="/about">
        <button>about</button>
      </Link>
      <Link className="" to="/blog">
        <button>blog</button>
      </Link>
    </nav>
    <nav className="flex flex-row items-center justify-between space-x-2 pt-2">
      <a href="https://www.linkedin.com/in/aadityanair/">linkedin</a>
      <a href="https://github.com/AadityaNair">github</a>
      <a href="mailto:me@aadityanair.ml">email</a>
    </nav>
    {/* </div> */}
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
