import React from "react"

import Layout from "../components/layout"
import GalleryLabel from "../components/galleryLabel"
import { Gallery } from "gatsby-theme-gallery"
import Divider from "../components/divider"

import useOfficeCabinetGallery from "../hooks/useOfficeCabinetGallery"
import useFloatingShelvesGallery from "../hooks/useFloatingShelvesGallery"
import useLiveEdgeBenchGallery from "../hooks/useLiveEdgeBenchGallery"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <GalleryLabel
      title="Cabinet with shōji screen doors"
      subtitle="White oak, black walnut, basswood"
    />
    <Gallery useGallery={useOfficeCabinetGallery} />
    <Divider />

    <GalleryLabel title="Floating wall shelves" subtitle="White oak" />
    <Gallery useGallery={useFloatingShelvesGallery} />
    <Divider />

    <GalleryLabel title="Live edge bench" subtitle="Black walnut, maple" />
    <Gallery useGallery={useLiveEdgeBenchGallery} />
    <Divider />
  </Layout>
)

export default IndexPage
