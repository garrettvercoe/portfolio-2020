import React, { Component } from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
const SliderImg = styled("img")`
  position: absolute;
  transition: opacity 0.4s ease-in-out;
  -moz-transition: opacity 0.4s ease-in-out;
  -webkit-transition: opacity 0.4s ease-in-out;
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
          this.props.active
            ? {
                opacity: 1,
                width: "480px",
                zIndex: 0,
                top: this.props.top - 240,
                left: this.props.left + 500,
              }
            : { opacity: 0 }
        }
        src={this.props.src}
        alt={this.props.alt}
      />
    )
  }
}
