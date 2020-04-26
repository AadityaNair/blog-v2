r = require("gatsby-awesome-pagination")
paginate = r.paginate

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
      trailingSlash: false,
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.jsx`)
  const blogIndex = path.resolve(`./src/templates/blog-index.jsx`)

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPost,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

  paginate({
    createPage,
    items: result.data.allMarkdownRemark.edges,
    component: blogIndex,
    itemsPerPage: 3,
    itemsPerFirstPage: 3,
    pathPrefix: "/blog",
  })
}
