import React from "react"
import { graphql } from "gatsby"
// import Header from "../components/header"

// TODO: Pagination
// TODO: Time of Post from name
// TODO: Parse markdown in excerpt
// TODO: Syntax Highlighting for code
// TODO: details/aside/summary/small for time and tags

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
            <h2>{node.frontmatter.title}</h2>
            <details>
              <time>someting</time>
              {node.frontmatter.tags}
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
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            excerpt
          }
        }
      }
    }
  }
`
