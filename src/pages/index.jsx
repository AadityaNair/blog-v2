import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"
import Metadata from "../components/meta"

import LinkedIn from "../assets/linkedin.svg"
import Github from "../assets/github.svg"
import Email from "../assets/email.svg"
import Resume from "../assets/cv.svg"

import "../styles/mystyle.css"

// TODO: A bit of transition animations: animeJS, gatsby-transition-link
// TODO: RSS Feeds
// TODO: google analytics
// TODO: Colour Switching favicon
// TODO: Use SVG favicon wherever possible, https://catalin.red/svg-favicon-light-dark-theme/
// TODO: Change Image
// TODO: Auto Dark Mode

const Index = ({ data }) => (
  <div className="flex flex-col items-center justify-center h-screen font-website bg-background text-text">
    <Metadata
      isBlogPost={false}
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description} // Is there a better description possible?
    />

    <GatsbyImage
        className="rounded-full"
        image={data.myphoto.childImageSharp.gatsbyImageData}
        alt="author thumb"
    />

    <h1 className="md:text-5xl text-lg ">
      I'm{" "}
      <strong className="font-cursive italic text-highlight">
        {data.site.siteMetadata.fullName}
      </strong>
      , a <em> {data.site.siteMetadata.jobTitle}</em>.
    </h1>
    <h2 className="md:text-3xl ">{data.site.siteMetadata.description}</h2>

    <nav className=" flex flex-row space-x-6 pt-6 text-nav md:text-2xl">
      <Link to="/about">
        <button className="capitalize">about</button>
      </Link>
      <Link to="/blog">
        <button className="capitalize">blog</button>
      </Link>
    </nav>
    <nav className="flex flex-row items-center justify-between space-x-2 pt-2">
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
export default Index;

// TODO: Higher Quality Photo?
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
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
        gatsbyImageData(layout: FIXED, height: 150, width: 150, placeholder: BLURRED)
      }
    }
  }
`
