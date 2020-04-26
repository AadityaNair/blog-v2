import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Metadata from "../components/meta"

//TODO: This can probably look better
export default ({ data }) => (
  <div className="flex flex-col items-center justify-between h-screen ">
    <Metadata isBlogPost={false} title="Tag Index" description={null} />

    <ol className="flex flex-col m-auto">
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

    <Footer />
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
