import React from "react"
import { graphql } from "gatsby"

import BlogHeader from "../components/blogheader"
import Footer from "../components/footer"
import Header from "../components/header"
import IndexNavigation from "../components/indexnavigation"
import Metadata from "../components/meta"

import "../styles/mystyle.css"

export default (props) => {
  const data = props.data
  const { pageContext } = props
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div className="flex flex-col h-screen md:mx-64 mx-8 text-text">
      <Metadata
        isBlogPost={false}
        title="The Blog of Nair"
        description="Collection of my works. All opinions my own"
      />
      <Header />

      <h1 className="md:text-5xl text-xl font-website">
        <code className="font-mono">rm -rf / </code> but with more steps
      </h1>
      <aside className="mb-8 text-sm md:text-base font-text">
        My opinions are my own.
      </aside>
      <ol className="list-none">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li className="p-3">
            <BlogHeader
              slug={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.humanDate}
              tags={node.frontmatter.tags}
              timeToRead={node.timeToRead}
              compDate={node.frontmatter.compDate}
            />
            <summary className="font-text md:text-xl">
              {node.frontmatter.excerpt}
            </summary>
          </li>
        ))}
      </ol>

      <IndexNavigation prev={previousPagePath} next={nextPagePath} />

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
            humanDate: date(formatString: "DD MMM, YYYY")
            compDate: date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
