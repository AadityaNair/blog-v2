import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Footer from "../components/footer"

////////////// BASIC FEATURES //////////////
// TODO: 404 Page
// TODO: Pagination
// TODO: Headers
// TODO: CSS :-P
// TODO: Move back from pages

////////////// EXTRA FEATURES //////////////
// TODO: Commenting
// TODO: Reading Time
// TODO: Outline of a post
// TODO: Link to subsections within posts

////////////// OPTIMISATIONS ///////////////
// TODO: Meta information
// TODO: Offline support
// TODO: PWA Manifest
// TODO: Sitemap
// TODO: Robots.txt

////////////// OTHER OPTIONAL ///////////////
// TODO: details/aside/summary/small for time and tags
// TODO: Parse markdown in excerpt
// TODO: RSS Feeds
// TODO: Typography.js
// TODO: WorkEx Page?
// TODO: More Modualar, use variables

function lstags(tagstring) {
  const l = tagstring.split(" ").map(tag => (
    <div>
      <Link to={"/tags#" + tag}>{tag}</Link>
    </div>
  ))
  return l
}

export default ({ data }) => {
  return (
    <div>
      {/* <Header /> */}
      <h1>Blog Header</h1>
      <aside>My opinions are my own and shit</aside>
      <ol>
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
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
