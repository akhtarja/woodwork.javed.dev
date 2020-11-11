/** @jsx jsx */
import * as React from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { Lightbox } from "react-modal-image"
import Grid from "./Grid"
import Tile from "./Tile"

const imgStyles: any = {
  css: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    transition: "transform 0.5s, filter 0.25s",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "saturate(1.3)",
    },
  },
}

const Gallery = ({ useGallery }) => {
  const images = useGallery()
  const [showImageIndex, setShowImageIndex] = React.useState<
    number | undefined
  >(undefined)

  return (
    <div>
      <Grid>
        {images.map((image, index) => (
          <Tile
            key={image.id}
            onClick={() => {
              setShowImageIndex(index)
            }}
          >
            <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
          </Tile>
        ))}
      </Grid>
      {showImageIndex !== undefined && (
        <Lightbox
          hideDownload={true}
          hideZoom={true}
          large={images[showImageIndex].publicURL}
          onClose={() => {
            setShowImageIndex(undefined)
          }}
        />
      )}
    </div>
  )
}

Gallery.propTypes = {
  useGallery: PropTypes.func.isRequired,
}

export default Gallery
