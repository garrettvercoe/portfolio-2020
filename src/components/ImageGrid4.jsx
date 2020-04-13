import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 18.5vw);
  column-gap: 1.5rem;
  row-gap: 1rem;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: inherit;
  }
`

const ProjectCardImageContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  height: 350px;
  padding-bottom: 1.5rem;
  max-width: 100%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 3em;
    max-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    height: auto;
    display: initial;
  }
  img {
    height: 100%;
    width: auto;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 300px;
    }
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      width: 100%;
      height: auto;
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
      <Grid>
        <div>
          <ProjectCardImageContainer>
            <img
              src={this.props.left_left.url}
              alt={this.props.left_left.alt}
            />
          </ProjectCardImageContainer>
          <Description>{this.props.left_left.alt}</Description>
        </div>
        <div>
          <ProjectCardImageContainer>
            <img
              src={this.props.left_center.url}
              alt={this.props.left_center.alt}
            />
          </ProjectCardImageContainer>
          <Description>{this.props.left_center.alt}</Description>
        </div>
        <div>
          <ProjectCardImageContainer>
            <img
              src={this.props.center_right.url}
              alt={this.props.center_right.alt}
            />
          </ProjectCardImageContainer>
          <Description>{this.props.center_right.alt}</Description>
        </div>
        <div>
          <ProjectCardImageContainer>
            <img
              src={this.props.right_right.url}
              alt={this.props.right_right.alt}
            />
          </ProjectCardImageContainer>
          <Description>{this.props.right_right.alt}</Description>
        </div>
      </Grid>
    )
  }
}
