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

export default (props) => (
  <Fragment>
    <Link to={props.slug}>
      <h2 className="text-3xl font-black font-head">{props.title}</h2>
    </Link>
    <summary>
      {/* TODO: https://tailwindcss.com/docs/divide-width/ */}
      <div className="flex text-xs md:text-base font-subtext">
        <div className="border-solid border-r-1 border-l-2 pr-4 pl-2 ">
          Published{" "}
          <time className="italic" datetime={props.compDate}>
            {props.date}
          </time>{" "}
        </div>
        <div className="flex flex-row border-solid border-r-1 border-l-2 pl-2 pr-4 space-x-1">
          {lstags(props.tags)}
        </div>
        <div className="border-solid border-l-2 pl-2">
          {props.timeToRead} min read
        </div>
      </div>
    </summary>
  </Fragment>
)
