import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1.5rem;
`

const ProjectCardImageContainer = styled("div")`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  height: 325px;
  padding-bottom: 1.5rem;
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
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 300px;
    }
  }
`
const Description = styled("div")`
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  color: ${colors.grey600};
`
export default class GridTwo extends React.Component {
  render() {
    return (
      <Grid>
        <ProjectCardImageContainer>
          <img src={this.props.left_left.url} alt={this.props.left_left.alt} />
        </ProjectCardImageContainer>
        <ProjectCardImageContainer>
          <img
            src={this.props.left_center.url}
            alt={this.props.left_center.alt}
          />
        </ProjectCardImageContainer>
        <ProjectCardImageContainer>
          <img
            src={this.props.center_right.url}
            alt={this.props.center_right.alt}
          />
        </ProjectCardImageContainer>
        <ProjectCardImageContainer>
          <img
            src={this.props.right_right.url}
            alt={this.props.right_right.alt}
          />
        </ProjectCardImageContainer>
      </Grid>
    )
  }
}
