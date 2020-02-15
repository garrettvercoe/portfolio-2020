import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"

const Circle = styled("span")`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 0.675rem;
  display: inline-block;
`

const colorDict = {
  Product: colors.red,
  Research: colors.black,
  Experience: colors.yellow,
  Space: colors.blue,
}

//
export default class Border extends React.Component {
  render() {
    return (
      <Circle style={{ background: `${colorDict[this.props.category]}` }} />
    )
  }
}
