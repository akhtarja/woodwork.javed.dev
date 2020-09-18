import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"

const Divider = () => {
  return (
    <div className="divider">
      <FontAwesomeIcon icon={faEllipsisH} size="2x" />
    </div>
  )
}

export default Divider
