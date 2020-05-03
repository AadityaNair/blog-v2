import React from "react"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Metadata from "../components/meta"
import BlogHeader from "../components/blogheader"

import "../styles/mystyle.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="flex flex-col h-screen md:mx-64 mx-8 bg-background text-text">
      <Metadata
        isBlogPost={true}
        title={post.frontmatter.title}
        tags={post.frontmatter.tags}
        date={post.frontmatter.compDate}
        description={post.frontmatter.excerpt}
      />
      <Header />

      <BlogHeader
        slug={post.fields.slug}
        title={post.frontmatter.title}
        date={post.frontmatter.humanDate}
        tags={post.frontmatter.tags}
        timeToRead={post.timeToRead}
        compDate={post.frontmatter.compDate}
      />

      <main id="markdown" className="mt-4 mb-16 font-text">
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
        excerpt
        humanDate: date(formatString: "DD MMMM, YYYY")
        compDate: date
      }
      timeToRead
      fields {
        slug
      }
    }
  }
`
