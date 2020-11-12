import React from "react";

import Layout from "../components/layout";
import GalleryLabel from "../components/galleryLabel";
import { Gallery } from "gatsby-theme-gallery";
import Divider from "../components/divider";
import About from "../components/about";

import useOfficeCabinetGallery from "../hooks/useOfficeCabinetGallery";
import useFloatingShelvesGallery from "../hooks/useFloatingShelvesGallery";
import useLiveEdgeBenchGallery from "../hooks/useLiveEdgeBenchGallery";
import useVinylRecordStorageShelfGallery from "../hooks/useVinylRecordStorageShelfGallery";

import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Woodwork" />

    <GalleryLabel
      title="Cabinet with shōji screen doors"
      subtitle="White oak, black walnut, basswood"
    />
    <Gallery useGallery={useOfficeCabinetGallery} />
    <Divider />

    <GalleryLabel
      title="Vinyl Record Storage"
      subtitle="White oak, black walnut"
    />
    <Gallery useGallery={useVinylRecordStorageShelfGallery} />
    <Divider />

    <GalleryLabel title="Floating wall shelves" subtitle="White oak" />
    <Gallery useGallery={useFloatingShelvesGallery} />
    <Divider />

    <GalleryLabel title="Live edge bench" subtitle="Black walnut, maple" />
    <Gallery useGallery={useLiveEdgeBenchGallery} />
    <Divider />

    <About />
    <Divider />
  </Layout>
);

export default IndexPage;
