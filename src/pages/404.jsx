import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Metadata from "../components/meta"
// TODO: Integrate proper witcher 3 background
// TODO: Can we split the sentence without the two divs?

const FourOhFour = () => (
  <div className="flex flex-col items-center justify-between h-screen text-text">
    <Metadata isBlogPost={false} title="Lost..." description={null} />

    <main className="flex flex-col items-center m-auto md:text-5xl text-xla font-extrabold font-website">
      <span className="flex flex-col md:flex-row">
        <div> You have reached the world's edge.</div>
        <div className="ml-0.5"> None but devils play past here.... </div>
      </span>
      <Link to="/" className="text-highlight">
        Turn Back
      </Link>
    </main>

    <Footer />
  </div>
)
export default FourOhFour;
