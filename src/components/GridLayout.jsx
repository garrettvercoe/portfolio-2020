import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
const GridLayout = styled("div")`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;
  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 2em;
  }
`

export default class Grid extends React.Component {
  render() {
    return <GridLayout>{this.props.children}</GridLayout>
  }
}
