import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"
import Metadata from "../components/meta"

// This can probably look better
const Tags = ({ data }) => (
  <div className="flex flex-col h-screen md:mx-64 mx-8 font-website text-text">
    <Metadata isBlogPost={false} title="Tag Index" description={null} />
    <Header />
    <h1 className="text-3xl md:text-5xl mb-4">All Posts by Tags</h1>

    <ol className="flex flex-col">
      {data.allMarkdownRemark.group.map((tagitem, index) => (
        <li className="font-bold uppercase mb-4 md:text-3xl">
          {tagitem.tag}
          <ul className="ml-4">
            {tagitem.nodes.map((post, index2) => (
              <li className="normal-case font-normal md:text-xl border-solid border-lines border-l-2 pl-2">
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
export default Tags;

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
