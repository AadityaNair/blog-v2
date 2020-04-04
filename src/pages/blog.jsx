import React from "react"

export default () => (
  <div>
    <h1>Blog Header</h1>
    <ol>
      <li>
        <h2>Blog title</h2>
        {/* Details or aside or summary too. Also small */}
        <details>
          <time>Publish Date </time>
          tags
        </details>
        <summary> Short description about the blog</summary>
      </li>
    </ol>
  </div>
)
