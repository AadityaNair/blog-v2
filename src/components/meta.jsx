import React, { Fragment } from "react"
import { Helmet } from "react-helmet"

// TODO: Fix this function not rendering
// I am pretty sure that Helmet doesn't support "most of og:*" properties
// Or, it doesn't support components within components. Idk.
// Investigate whenever possible.
// Also lookup, https://developers.google.com/search/docs/guides/intro-structured-data
function BlogMetaData(props) {
  const tagstring = props.tags
  return (
    <Fragment>
      {/* TODO: Fix the time received */}
      <meta property="og:article:published_time" content={props.date} />
      <meta property="og:article:author" content="Aaditya M Nair" />
      <meta property="og:article:tag" content={tagstring} />
      <meta property="tags" content={tagstring} />
    </Fragment>
  )
}

function Metadata(props) {
  var blogdata = null
  if (props.isBlogPost) {
    blogdata = <BlogMetaData date="{props.date}" tags="{props.tags}" />
  }
  console.log(props.isBlogPost)
  return (
    <Helmet defer={false} defaultTitle="The Blog of Nair">
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Aaditya M Nair" />
      <title>{props.title}</title>

      <meta name="description" content={props.description} />

      <meta property="og:image" content="" />
      <meta property="og:description" content={props.description} />
      <meta property="og:title" content={props.title} />
      {blogdata}
    </Helmet>
  )
}

export default Metadata
