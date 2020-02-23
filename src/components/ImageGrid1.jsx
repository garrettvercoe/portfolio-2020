import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import dimensions from "styles/dimensions"
import colors from "styles/colors"

const ProjectCardImageContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
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
      <>
        <ProjectCardImageContainer>
          <img src={this.props.image.url} alt={this.props.image.alt} />
        </ProjectCardImageContainer>
        <Description>{this.props.image.alt}</Description>
      </>
    )
  }
}
