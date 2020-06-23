import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import ReactPlayer from "react-player"

const ProjectCardImageContainer = styled("div")`
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  max-width: 100%;
  height: 43vh;
  row-gap: 1rem;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    height: auto;
  }
  img {
    height: 100%;
    width: auto;
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      width: 100%;
      height: auto;
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

const Grid = styled("div")`
  display: grid;
  grid-template-columns: 38.5vw 38.5vw;
  column-gap: 1.25rem;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: inherit;
  }
`

export default class GridTwo extends React.Component {
  render() {
    return (
      <>
        <Grid>
          <div>
            <ProjectCardImageContainer>
              <ReactPlayer
                url={this.props.left_src}
                playing={true}
                loop={true}
                height={"auto"}
                width={"100%"}
                muted={true}
              />
            </ProjectCardImageContainer>
            <Description></Description>
          </div>
          <div>
            <ProjectCardImageContainer>
              <ReactPlayer
                url={this.props.right_src}
                playing={true}
                loop={true}
                height={"auto"}
                width={"100%"}
                muted={true}
              />
            </ProjectCardImageContainer>
            <Description></Description>
          </div>
        </Grid>
      </>
    )
  }
}
