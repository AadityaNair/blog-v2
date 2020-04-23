import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Metadata from "../components/meta"

////////////// CSS FEATURES //////////////
// Website Theme
// Fix me face
// PurgeCSS
// Transition Link Gatsby

////////////// EXTRA FEATURES //////////////
// TODO: Commenting

////////////// OPTIMISATIONS ///////////////
// TODO: Fix Metadata
// TODO: More Modualar, use variables

////////////// OTHER OPTIONAL ///////////////
// TODO: Parse markdown in excerpt
// TODO: RSS Feeds
// TODO: WorkEx Page?
// TODO: AnimeJS

function lstags(tagstring) {
  const l = tagstring.split(" ").map(tag => (
    <div>
      <Link to={"/tags#" + tag}>{tag}</Link>
    </div>
  ))
  return l
}

export default props => {
  const data = props.data
  // console.log(props)
  const { pageContext } = props
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div>
      <Metadata
        isBlogPost={false}
        title="The Blog of Nair"
        description="Collection of my works. All opinions my own"
      />

      <Header />
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
              <div>{node.timeToRead} min read</div>
            </details>
            <summary>{node.frontmatter.excerpt}</summary>
          </li>
        ))}
      </ol>
      <div>
        {previousPagePath ? <Link to={previousPagePath}>Previous</Link> : null}
        {nextPagePath ? <Link to={nextPagePath}>Next</Link> : null}
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          timeToRead
          tableOfContents
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
