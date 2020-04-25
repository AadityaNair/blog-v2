import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Metadata from "../components/meta"
import BlogHeader from "../components/blogheader"
import "../styles/mystyle.css"

import leftarrow from "../assets/left.svg"
import rightarrow from "../assets/right.svg"

export default props => {
  const data = props.data
  const { pageContext } = props
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div className="flex flex-col h-screen md:mx-64 mx-8">
      <Metadata
        isBlogPost={false}
        title="The Blog of Nair"
        description="Collection of my works. All opinions my own"
      />
      <Header />

      <h1 className="md:text-4xl text-xl">My own words and stuff</h1>
      <aside className="mb-8 text-sm">My opinions are my own and shit</aside>
      <ol className="list-none">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li className="p-3">
            <BlogHeader
              slug={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
              timeToRead={node.timeToRead}
            />
            <summary>{node.frontmatter.excerpt}</summary>
          </li>
        ))}
      </ol>

      <div className="justify-center flex space-x-8">
        {previousPagePath ? (
          <Link className="flex flex-row" to={previousPagePath}>
            <img alt="Newer" src={leftarrow} /> <div>Newer</div>
          </Link>
        ) : (
          <div className="flex flex-row hidden">
            <img alt="Newer" src={leftarrow} /> <div>Newer</div>{" "}
          </div>
        )}
        {nextPagePath ? (
          <Link className="flex flex-row" to={nextPagePath}>
            <div>Older </div> <img alt="Older" src={rightarrow} />
          </Link>
        ) : (
          <div className="flex flex-row hidden">
            <div>Older </div> <img alt="Older" src={rightarrow} />{" "}
          </div>
        )}
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
