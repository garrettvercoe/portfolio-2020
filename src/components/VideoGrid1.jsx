import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import ReactPlayer from "react-player"
const ProjectCardImageContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  max-width: 100%;
  row-gap: 1rem;

  video {
    width: 100%;
    height: auto;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 300px;
    }
  }
`
const Description = styled("div")`
  font-size: 15px;
  padding-top: 0.5rem;
  padding-bottom: 1.25em;
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
        <ProjectCardImageContainer>
          <ReactPlayer
            url={this.props.src}
            playing={true}
            loop={true}
            height={"auto"}
            width={"100%"}
            muted={true}
          />
        </ProjectCardImageContainer>
        {this.props.description ? (
          <Description>{this.props.description[0].text}</Description>
        ) : (
          <Description></Description>
        )}
      </>
    )
  }
}
