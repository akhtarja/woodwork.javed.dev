import React from "react"

import Layout from "../components/layout"
import { Gallery } from "gatsby-theme-gallery"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Gallery />
  </Layout>
)

export default IndexPage
