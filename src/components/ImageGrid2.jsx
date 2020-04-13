import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
const Grid = styled("div")`
  display: grid;
  grid-template-columns: 38.5vw 38.5vw;
  column-gap: 1.25rem;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: inherit;
  }
`

const ProjectCardImageContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 43vh;
  max-width: 100%;
  background-color: #fff;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    height: auto;
    display: initial;
  }

  img {
    height: auto;
    width: 100%;
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      width: 100%;
      height: auto;
    }
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 300px;
    }
  }
`
const Description = styled("div")`
  font-size: 15px;
  padding-bottom: 1.25em;
  padding-top: 0.5rem;
  color: #999;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-top: 0em;
    padding-bottom: 2em;
  }
`

export default class GridTwo extends React.Component {
  render() {
    return (
      <>
        <Grid>
          <div>
            <ProjectCardImageContainer>
              <img
                src={this.props.left_image.url}
                alt={this.props.left_image.alt}
              />
            </ProjectCardImageContainer>
            <Description>{this.props.left_image.alt}</Description>
          </div>
          <div>
            <ProjectCardImageContainer>
              <img
                src={this.props.right_image.url}
                alt={this.props.right_image.alt}
              />
            </ProjectCardImageContainer>
            <Description>{this.props.right_image.alt}</Description>
          </div>
        </Grid>
      </>
    )
  }
}
