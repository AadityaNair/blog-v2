import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Footer from "../components/footer"

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
    <div>
      <aside>
        <Link to="/blog">go back</Link>
      </aside>
      <h1>{post.frontmatter.title}</h1>
      <summary>
        <p>{lstags(post.frontmatter.tags)}</p>
        <p>{post.frontmatter.date}</p>
      </summary>
      <main>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
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
      }
    }
  }
`
