import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Metadata from "../components/meta"
import "../styles/mystyle.css"

export default () => (
  <div className="flex flex-col items-center justify-between h-screen">
    <Metadata
      isBlogPost={false}
      title="About Me"
      description="What you need to know about me"
    />
    <Header />
    <article className="">
      But I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain was born and I will give you a complete account
      of the system, and expound the actual teachings of the great explorer of
      the truth, the master-builder of human happiness. No one rejects,
      dislikes, or avoids pleasure itself, because it is pleasure, but because
      those who do not know how to pursue pleasure rationally encounter
      consequences that are extremely painful. Nor again is there anyone who
      loves or pursues or desires to obtain pain of itself, because it is pain,
      but because occasionally circumstances occur in which toil and pain can
      procure him some great pleasure. To take a trivial example, which of us
      ever undertakes laborious physical exercise, except to obtain some
      advantage from it? But who has any right to find fault with a man who
      chooses to enjoy a pleasure that has no annoying consequences, or one who
      avoids a pain that produces no resultant pleasure?
    </article>
    <Footer />
  </div>
)
