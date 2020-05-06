import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Metadata from "../components/meta"
import "../styles/mystyle.css"

export default () => (
  <div className="flex flex-col items-center justify-between h-screen text-text">
    <Metadata
      isBlogPost={false}
      title="About Me"
      description="What you need to know about me"
    />
    <Header />
    <article className="md:mx-64 mx-8 text-justify font-website space-y-2">
      <section className="">
        Hi, I am{" "}
        <abbr
          title="No, it just turns red. No link here"
          className="text-highlight"
        >
          Aaditya M Nair
        </abbr>
        . I currently live in Gurugram, India.
      </section>
      <section>
        I am currently working with{" "}
        <a href="https://tower-research.com"> Tower Research Capital </a>
        as a Software Engineer. Here, I work with the recently formed
        Information Security team. Me and my team are responsible for making and
        enforcing all policies related to security and compliance. We also
        collaborate with other teams improve observability into the tools they
        manage, identify and remediate any security bugs we find while also
        promoting security by design on new projects. This is my first actual
        job post college :-).
      </section>
      {/* TODO: Links to relevant pages */}
      <section>
        In College though, I was pursuing a Bachelors + Masters dual degree
        program in Computer Science at{" "}
        <a href="https://iiit.ac.in">IIIT Hyderabad</a>. For my Master's Thesis
        (for which I am required to publish a few papers), I worked with{" "}
        <a href="https://faculty.iiit.ac.in/~lalitha.v/">
          Dr Lalitha Vadlamani
        </a>{" "}
        on Erasure Codes. More specifically, I worked on Codes with Hierarchical
        Locality. While in College, I was also part of the sysadmin team which
        managed various services (including EMail, proxy, Identity) for about
        3000 students and professors at any given time. It was probably this job
        that sparked my interest in all things systems and networks.
      </section>
      <section>
        I started this website to have kind of an online presence (and because
        all the cool kids are doing it). This website is supposed to be the
        landing site for anyone who wants to find out more about me. That is
        pretty much why I wrote this page. I also started a blog where I will
        (try to) document everything I am currently studying. There is a lot to
        be said about jotting everything down. It requires you to have a clear
        mental picture yourself which is very important with CS concepts in
        general. It also acts as documentation for when you want to refer to it
        in future. With that said, the posts can just be small snippets of
        interesting code I found or it can also be an essay on some topic I
        found interesting.
      </section>
    </article>
    <Footer />
  </div>
)
