import React from "react"

function loadComment(props) {
  let script = document.createElement("script")
  let anchor = document.getElementById("comment")
  script.setAttribute("src", "https://utteranc.es/client.js")
  script.setAttribute("crossorigin", "anonymous")
  script.setAttribute("async", true)
  script.setAttribute("repo", "AadityaNair/blog-v2")
  script.setAttribute("issue-term", "title")
  script.setAttribute("theme", "dark-blue")
  script.setAttribute("label", "utterance")
  anchor.appendChild(script)

  // TODO: Make this button a show/hide thing
  let button = document.getElementById("comment-button")
  button.remove()
}

function Comment(props) {
  return (
    <div id="comment">
      <button id="comment-button" onClick={loadComment}>
        Load Comments
      </button>
    </div>
  )
}

export default Comment
