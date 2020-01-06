import React, { Component } from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
const SliderImg = styled("img")`
  object-fit: cover;
  height: 100%;
  position: absolute;
  top:0,
  left:0,
  transition: opacity .4s ease-in-out;
  -moz-transition: opacity .4s ease-in-out;
  -webkit-transition: opacity .4s ease-in-out;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    max-width: 300px;
  }
`
export default class Slide extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <SliderImg
        style={
          this.props.active ? { opacity: 1, width: "100%" } : { opacity: 0 }
        }
        src={this.props.src}
        alt={this.props.alt}
      />
    )
  }
}
