import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Metadata from "../components/meta"
import BlogHeader from "../components/blogheader"

import "../styles/mystyle.css"
import { ProgressPlugin } from "webpack"

function lstags(tagstring) {
  const l = tagstring.map(tag => (
    <div>
      <Link to={"/tags#" + tag}>{tag}</Link>
    </div>
  ))
  return l
}

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="flex flex-col h-screen md:mx-64 mx-8">
      <Metadata
        isBlogPost={true}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
        date={post.frontmatter.date}
        description={post.frontmatter.excerpt}
      />
      <Header />

      <BlogHeader
        slug={post.fields.slug}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        timeToRead={post.timeToRead}
      />

      <main id="markdown" className="mt-4 mb-16">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
      <hr className="mb-16" />
      <Footer />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "DD MMMM, YYYY")
        excerpt
      }
      timeToRead
      fields {
        slug
      }
    }
  }
`
