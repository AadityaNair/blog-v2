import React from "react"
// import Head from "../components/head"

export default () => (
  // <Head/>
  <div>
    <section class="hero">
      <div class="hero-inner">
        <div class="container">
          <img
            src="Test image"
            alt="author thumb"
            class="dot"
          />
          <h1>
            end2end <small>v2.0</small>
          </h1>
          <h3>
            I'm <strong itemprop="name">Test Name</strong>, a
            <em itemprop="jobTitle">Test Job</em>.
          </h3>
          <h3>Test Bio</h3>
          <a href="/about" class="button button-ghost" title="about">
            about
          </a>
          <a href="/blog" class="button button-ghost" title="blog">
            blog
          </a>
          <a
            href="/archive/master.zip"
            class="button button-ghost"
            title="Download"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  </div>
)
