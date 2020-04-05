import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
// import Header from "../components/header"

// TODO: Pagination
// TODO: Import Images
// TODO: Parse markdown in excerpt
// TODO: Syntax Highlighting for code
// TODO: details/aside/summary/small for time and tags
// TODO: Page for tags
// TODO: Link tags to tag pages
// TODO: Meta information
// TODO: Fix Links at the end
// TODO: Linking other posts within posts
// TODO: 404 Page
// TODO: WorkEx Page?

function lstags(tagstring) {
  const l = tagstring.split(" ").map(tag => <div>{tag}</div>)
  return l
}

export default ({ data }) => {
  return (
    <div>
      {/* <Header /> */}
      <h1>Blog Header</h1>
      <ol>
        <li>
          <h2>Blog title</h2>

          <details>
            <time>Publish Date </time>
            tags
          </details>
          <summary> Short description about the blog</summary>
        </li>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <details>
              <time>{node.frontmatter.date}</time>
              {lstags(node.frontmatter.tags)}
            </details>
            <summary>{node.frontmatter.excerpt}</summary>
          </li>
        ))}
      </ol>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            excerpt
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
