import React from "react"
import { graphql } from "gatsby"

import BlogHeader from "../components/blogheader"
import Comments from "../components/comments"
import Footer from "../components/footer"
import Header from "../components/header"
import Metadata from "../components/meta"

// TODO: Move across posts. graphql has edges>next/previous. Integrate that
// TODO: Move back from a post
// TODO: Recommended Posts
// TODO: Table of Contents
// TODO: Use prismJS's highlight-line where possible
import "../styles/mystyle.css"
import "../styles/markdown.css"

const BlogPost = (props) => {
  const post = props.data.markdownRemark
  return (
    <div className="flex flex-col h-screen md:mx-64 mx-8 text-text">
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

      <main id="markdown">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
      <hr className="mb-16" />

      <Comments />
      <Footer />
    </div>
  )
}
export default BlogPost;

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
