import React from "react"
import { Helmet } from "react-helmet"

// Also lookup, https://developers.google.com/search/docs/guides/intro-structured-data
// TODO: Replace amnair.dev with a variable
// TODO: Try StaticQuery here
// TODO: Search results on Google is messed up.

function Metadata(props) {
  return (
    <Helmet defer={false} defaultTitle="The Blog of Nair">
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Aaditya M Nair" />
      {/* Colour the top bar and address bar on mobile */}
      <meta name="theme-color" content="#000022" />
      {/* TODO: Do this for iOS and windows as well */}
      <title>{props.title}</title>

      <meta name="description" content={props.description} />

      <meta property="og:image" content="https://amnair.dev/icon.jpg" />
      <meta property="og:description" content={props.description} />
      <meta property="og:title" content={props.title} />
      {props.isBlogPost ? null : <meta property="og:type" content="website" />}

      {/* All this could have looked nicer but that wasn't working properly. Look at previous commits */}
      {props.isBlogPost ? <meta property="og:type" content="article" /> : null}
      {props.isBlogPost ? (
        <meta property="article:author" content="Aaditya M Nair" />
      ) : null}
      {props.isBlogPost ? (
        <meta property="article:published_time" content={props.date} />
      ) : null}
      {props.isBlogPost
        ? props.tags.map((tagitem, index) => (
            <meta property="tags" content={tagitem} />
          ))
        : null}
    </Helmet>
  )
}

export default Metadata
