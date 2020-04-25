import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Metadata from "../components/meta"
import "../styles/mystyle.css"

function lstags(tagstring) {
  const l = tagstring.split(" ").map(tag => (
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

      <h2 className="text-xl font-black">{post.frontmatter.title}</h2>
      <summary>
        <div className="flex text-xs md:text-base">
          <div className="border-solid border-r-1 border-l-2 pr-4 pl-2 ">
            Published <time className="italic">{post.frontmatter.date}</time>{" "}
          </div>
          <div className="flex flex-row border-solid border-r-1 border-l-2 pl-2 pr-4 space-x-1">
            {lstags(post.frontmatter.tags)}
          </div>
          <div className="border-solid border-l-2 pl-2">
            {post.timeToRead} min read
          </div>
        </div>
      </summary>

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
      tableOfContents
    }
  }
`
