import React, { Fragment } from "react"
import { Link } from "gatsby"

function lstags(tagstring) {
  const l = tagstring.map((tag) => (
    <div>
      <Link to={"/tags#" + tag}>{tag}</Link>
    </div>
  ))
  return l
}
// TODO: Try StaticQuery here
export default (props) => (
  <Fragment>
    <Link to={props.slug}>
      <h1 className="text-3xl font-black font-head text-link">{props.title}</h1>
    </Link>

    <div className="flex text-xs md:text-base font-subtext divide-x-2 list-none">
      <div className="border-solid border-r-1 border-l-2 pl-2 pr-4 border-lines">
        Published <time dateTime={props.compDate}>{props.date}</time>{" "}
      </div>
      <div className="flex flex-row space-x-2 pl-2 pr-4 border-lines italic underline">
        {lstags(props.tags)}
      </div>
      <div className="border-lines pl-2">{props.timeToRead} min read</div>
    </div>
  </Fragment>
)
