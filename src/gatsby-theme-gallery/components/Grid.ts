import styled from "@emotion/styled"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-auto-rows: auto;
  grid-gap: 0.5rem;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-auto-rows: auto;
  }
`

export default Grid
