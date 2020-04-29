import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Metadata from "../components/meta"
import "../styles/mystyle.css"

import LinkedIn from "../assets/linkedin.svg"
import Github from "../assets/github.svg"
import Email from "../assets/email.svg"
import Resume from "../assets/cv.svg"

export default ({ data }) => (
  <div className="flex flex-col items-center justify-center h-screen ">
    <Metadata
      isBlogPost={false}
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description} // Is there a better description possible?
    />

    <Img
      className="rounded-full"
      fixed={data.myphoto.childImageSharp.fixed}
      alt="author thumb"
    />

    <h1 className="md:text-5xl text-lg ">
      I'm <strong>{data.site.siteMetadata.fullName}</strong>, a{" "}
      <em> {data.site.siteMetadata.jobTitle}</em>.
    </h1>
    <h3 className="md:text-3xl ">{data.site.siteMetadata.description}</h3>

    <nav className=" flex flex-row space-x-6 pt-6">
      <Link className="" to="/about">
        <button>about</button>
      </Link>
      <Link className="" to="/blog">
        <button>blog</button>
      </Link>
    </nav>
    <nav className="flex flex-row items-center justify-between space-x-2 pt-2">
      <a href={data.site.siteMetadata.social.linkedin}>
        <LinkedIn alt="linkedin" />
      </a>
      <a href={data.site.siteMetadata.social.github}>
        <Github alt="github" />
      </a>
      <a href={data.site.siteMetadata.social.email}>
        <Email alt="email" />
      </a>
      <a target="_blank" href="/CV.pdf">
        <Resume alt="resume" />
      </a>
    </nav>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        fullName
        jobTitle
        description
        social {
          linkedin
          github
          email
        }
      }
    }
    myphoto: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(height: 150, width: 150) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
