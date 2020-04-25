import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Metadata from "../components/meta"
import "../styles/mystyle.css"

import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import email from "../assets/email.svg"
import resume from "../assets/cv.svg"

export default ({ data }) => (
  <div className="flex flex-col items-center justify-center h-screen ">
    <Metadata
      isBlogPost={false}
      title="The website of Nair"
      description="My experience as a Software Engineer"
    />

    <Img
      className="rounded-full"
      fixed={data.myphoto.childImageSharp.fixed}
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

    <nav className=" flex flex-row space-x-6 pt-6">
      <Link className="" to="/about">
        <button>about</button>
      </Link>
      <Link className="" to="/blog">
        <button>blog</button>
      </Link>
    </nav>
    <nav className="flex flex-row items-center justify-between space-x-2 pt-2">
      <a href="https://www.linkedin.com/in/aadityanair/">
        <img alt="linkedin" src={linkedin} />
      </a>
      <a href="https://github.com/AadityaNair">
        <img alt="github" src={github} />
      </a>
      <a href="mailto:me@aadityanair.ml">
        <img alt="email" src={email} />
      </a>
      <a target="_blank" href="/CV.pdf">
        <img alt="resume" src={resume} />
      </a>
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
    myphoto: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(height: 125, width: 125) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
