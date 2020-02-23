import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
`

const ProjectCardImageContainer = styled("div")`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  height: 500px;

  max-width: 100%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 3em;
    max-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    height: 100%;
    width: auto;
    max-width: 100%;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 300px;
    }
  }
`
const Description = styled("div")`
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  color: ${colors.grey600};
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
