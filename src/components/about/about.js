import React from "react"
import styled from "@emotion/styled"

const AboutWrapper = styled.div`
  font-family: courier;
`

const About = () => {
  return (
    <AboutWrapper>
      <p>
        I am a furniture designer and woodworker based in Vancouver, British
        Columbia, Canada. My work is modern but grounded in centuries of
        woodworking traditions and hand-tool techniques. It is built to live
        harmoniously alongside a wide range of furniture styles, and last many
        lifetimes of daily use.
      </p>

      <p>I am currently unavailable for commission work.</p>
    </AboutWrapper>
  )
}

export default About
