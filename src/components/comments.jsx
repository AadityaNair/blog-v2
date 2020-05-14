import React, { Component } from "react"

export default class Comments extends Component {
  componentDidMount() {
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
  }

  render() {
    return <div id="comment"></div>
  }
}
