import React from "react"
import PropTypes from "prop-types"

const GalleryLabel = ({ title, subtitle }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h5>{subtitle}</h5>
    </div>
  )
}

GalleryLabel.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default GalleryLabel
