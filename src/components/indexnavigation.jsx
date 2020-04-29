import React from "react"
import { Link } from "gatsby"

import LeftArrow from "../assets/left.svg"
import RightArrow from "../assets/right.svg"

function IndexNavigation(props) {
  const previousPagePath = props.prev
  const nextPagePath = props.next
  return (
    <div className="justify-center flex space-x-8">
      {previousPagePath ? (
        <Link className="flex flex-row" to={previousPagePath}>
          <LeftArrow alt="Newer" /> <div>Newer</div>
        </Link>
      ) : (
        <div className="flex flex-row hidden">
          <LeftArrow alt="Newer" /> <div>Newer</div>{" "}
        </div>
      )}
      {nextPagePath ? (
        <Link className="flex flex-row" to={nextPagePath}>
          <div>Older </div> <RightArrow alt="Older" />
        </Link>
      ) : (
        <div className="flex flex-row hidden">
          <div>Older </div> <RightArrow alt="Older" />{" "}
        </div>
      )}
    </div>
  )
}

export default IndexNavigation
