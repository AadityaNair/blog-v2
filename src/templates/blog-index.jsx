import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Metadata from "../components/meta"
import "../styles/mystyle.css"

import leftarrow from "../assets/left.svg"
import rightarrow from "../assets/right.svg"

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
            <Link to={node.fields.slug}>
              <h2 className="text-xl font-black">{node.frontmatter.title}</h2>
            </Link>
            <div className="flex text-xs md:text-base">
              <div className="border-solid border-r-1 border-l-2 pr-4 pl-2 ">
                Published{" "}
                <time className="italic">{node.frontmatter.date}</time>{" "}
              </div>
              <div className="flex flex-row border-solid border-r-1 border-l-2 pl-2 pr-4 space-x-1">
                {lstags(node.frontmatter.tags)}
              </div>
              <div className="border-solid border-l-2 pl-2">
                {node.timeToRead} min read
              </div>
            </div>
            <summary>{node.frontmatter.excerpt}</summary>
          </li>
        ))}
      </ol>
      <div className="justify-center flex space-x-8">
        {previousPagePath ? (
          <Link className="flex flex-row" to={previousPagePath}>
            <img alt="Previous" src={leftarrow} /> <div>Previous</div>
          </Link>
        ) : null}
        {nextPagePath ? (
          <Link className="flex flex-row" to={nextPagePath}>
            <div>Next</div> <img alt="Next" src={rightarrow} />
          </Link>
        ) : null}
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
