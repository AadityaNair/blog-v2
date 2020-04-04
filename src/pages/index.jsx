import React from "react"

export default () => (
  <div>
    <img src="Test image" alt="author thumb" />
    <h1>Name of the Blog</h1>
    <h3>
      I'm <strong itemprop="name">My Name</strong>, a
      <em itemprop="jobTitle"> Job Title</em>.
    </h3>
    <h3>My Bio</h3>
    <nav>
      <a href="/about" title="about">
        about
      </a>
      <a href="/blog" title="blog">
        blog
      </a>
    </nav>
  </div>
)
