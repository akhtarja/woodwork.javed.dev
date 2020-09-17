import React from "react"
import styled from "@emotion/styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"

const DividerWrapper = styled.div`
  color: white;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`

const Divider = () => {
  return (
    <DividerWrapper>
      <FontAwesomeIcon icon={faEllipsisH} size="2x" />
      <FontAwesomeIcon icon={faEllipsisH} size="2x" />
    </DividerWrapper>
  )
}

export default Divider
