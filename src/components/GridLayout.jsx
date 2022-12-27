import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const GridLayout = styled("div")`
  display: grid;
  grid-template-columns: 20.5vw 20.5vw 20.5vw 20.5vw;
  margin-left: 3.25vw;
  column-gap: 1.5rem;
  row-gap: 0rem;
  // @media (max-width: 950px) {
  //   grid-template-columns: 4.5fr 7fr;
  // }

  // @media (max-width: ${dimensions.maxwidthTablet}px) {
  //   grid-template-columns: 1fr;
  // }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 2em;
    padding-left: 0vw;
    row-gap: 0rem;
    grid-template-columns: 85vw;
  }
`

export default class Grid extends React.Component {
  render() {
    return <GridLayout>{this.props.children}</GridLayout>
  }
}
