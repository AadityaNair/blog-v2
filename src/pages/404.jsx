import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Metadata from "../components/meta"
// TODO: Integrate proper witcher 3 background

export default () => (
  <div className="flex flex-col items-center justify-between h-screen text-text">
    <Metadata isBlogPost={false} title="Lost..." description={null} />

    <main className="flex flex-col items-center m-auto md:text-5xl text-xl font-extrabold font-website">
      You have reached the world's edge. None but devils play past here....
      <Link to="/" className="text-highlight">
        Turn Back
      </Link>
    </main>

    <Footer />
  </div>
)
