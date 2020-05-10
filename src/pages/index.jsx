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
  <div className="flex flex-col items-center justify-center h-screen font-website bg-background text-text">
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
      I'm{" "}
      <strong className="font-cursive italic text-highlight">
        {data.site.siteMetadata.fullName}
      </strong>
      , a <em> {data.site.siteMetadata.jobTitle}</em>.
    </h1>
    <h3 className="md:text-3xl ">{data.site.siteMetadata.description}</h3>

    <nav className=" flex flex-row space-x-6 pt-6 text-other md:text-2xl">
      <Link to="/about">
        <button className="capitalize">about</button>
      </Link>
      <Link to="/blog">
        <button className="capitalize">blog</button>
      </Link>
    </nav>
    <nav className="flex flex-row items-center justify-between space-x-2 pt-2 text-other2">
      <a href={data.site.siteMetadata.social.linkedin} aria-label="LinkedIn">
        <LinkedIn alt="linkedin" />
      </a>
      <a href={data.site.siteMetadata.social.github} aria-label="Github">
        <Github alt="github" />
      </a>
      <a
        href={"mailto:" + data.site.siteMetadata.social.email}
        aria-label="EMail"
      >
        <Email alt="email" />
      </a>
      <a target="_blank" href="/CV.pdf" aria-label="Resume">
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
