import React from "react"
import { Link } from "gatsby"

import leftarrow from "../assets/left.svg"
import rightarrow from "../assets/right.svg"

function IndexNavigation(props) {
  const previousPagePath = props.prev
  const nextPagePath = props.next
  return (
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
  )
}

export default IndexNavigation
