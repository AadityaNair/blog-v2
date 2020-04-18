import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Footer from "../components/footer"

// The logic flow can probably be improved a *lot*
// There is probably a graphQL query that solves everything I am doing

// TODO: Also, is this how a JSX page supposed to look. My actual HTML items are
//       almost invisible within all that JS logic. Ideally, shouldn't all the
//       "HTML" information be at one place, within the "export default =>" thing?

// Create a set of distinct tags
function tags(edges) {
  let s = new Set()
  for (let index = 0; index < edges.length; index++) {
    let tagstring = edges[index].node.frontmatter.tags
    tagstring.split(" ").map(tag => s.add(tag))
  }
  let a = Array.from(s)
  a.sort()
  return a
}

function post_for_tag(edges, tag) {
  let resp = []
  for (let index = 0; index < edges.length; index++) {
    let tagset = edges[index].node.frontmatter.tags.split(" ")
    if (tagset.includes(tag)) {
      resp.push(edges[index].node)
    }
  }
  return resp.map(post => (
    <li>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </li>
  ))
}

export default ({ data }) => (
  <div>
    <ol>
      {tags(data.allMarkdownRemark.edges).map((tag, index) => (
        <li>
          {tag}
          <ul>{post_for_tag(data.allMarkdownRemark.edges, tag)}</ul>
        </li>
      ))}
    </ol>
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
