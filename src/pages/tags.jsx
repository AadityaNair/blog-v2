import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

//TODO: This can probably look better
export default ({ data }) => (
  <div>
    <ol>
      {data.allMarkdownRemark.group.map((tagitem, index) => (
        <li>
          {tagitem.tag}
          <ul>
            {tagitem.nodes.map((post, index2) => (
              <li>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
