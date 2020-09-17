import { Link } from "gatsby"
import React from "react"

import Image from "./image"

const Header = () => (
  <header
    style={{
      background: "white",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 300,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to="/">
        <Image />
      </Link>
    </div>
  </header>
)

export default Header
