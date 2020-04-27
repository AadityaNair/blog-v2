import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Metadata from "../components/meta"

//TODO: This can probably look better
export default ({ data }) => (
  <div className="flex flex-col h-screen md:mx-64 mx-8 mt-16">
    <Metadata isBlogPost={false} title="Tag Index" description={null} />

    <h1 className="text-3xl mb-4">All Posts by Tags</h1>

    <ol className="flex flex-col">
      {data.allMarkdownRemark.group.map((tagitem, index) => (
        <li className="font-bold uppercase mb-4">
          {tagitem.tag}
          <ul className="ml-4 border-solid border-gray-900 border-l-2 pl-2">
            {tagitem.nodes.map((post, index2) => (
              <li className="normal-case font-normal">
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
