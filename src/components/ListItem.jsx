import React from "react"
import styled from "@emotion/styled"
import Circle from "./Circle"
import VideoPlayer from "./VideoPlayer"
import dimensions from "styles/dimensions"
import { Link } from "gatsby"

import { isMobile } from "react-device-detect"
import LinkArrow from "./LinkArrow"
import colors from "styles/colors"
const ItemWrapper = styled("li")`
  padding-bottom: 0.4em;
  list-style-type: none;
  position: relative;
`

const LinkTo = styled(Link)`
  text-decoration: none;
  color: currentColor;
`

const ItemText = styled("h2")`
  display: inline-block;
  margin-bottom: 0rem;
  &:hover {
    text-decoration: underline;
  }
`

const ItemTextInactive = styled("h2")`
  display: inline-block;
  margin-bottom: 0rem;
  color: ${colors.grey500};
  &:hover {
    cursor: default;
  }
`
const ProjectCardImageContainer = styled("div")`
  opacity: 0;
  position: absolute;
  z-index: 100;
  width: 22vw;
  padding-top: 7.5px;
  pointer-events: none;
  // transition: opacity 0.2s ease;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 3em;
    max-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    width: 100%;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 300px;
    }
  }
`

const ProjectCardImageContainerLast = styled("div")`
  opacity: 0;
  position: absolute;
  z-index: 100;
  width: 22vw;
  padding-bottom: 2.5rem;
  pointer-events: none;
  bottom: 0;
  // transition: opacity 0.2s ease;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 3em;
    max-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    width: 100%;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 300px;
    }
  }
`

export default class ListItem extends React.Component {
  constructor(props) {
    super(props)

    if (this.props.video) {
      var src = this.props.video[0].text
    }

    this.state = { source: src, active: false }
    this.onHover = this.onHover.bind(this)
    this.onOut = this.onOut.bind(this)
  }
  onHover() {
    this.setState({ active: true })
  }
  onOut() {
    this.setState({ active: false })
  }

  render() {
    return (
      <>
        <ItemWrapper>
          {!this.props.active ? (
            <>
              <Circle inactive={true} />{" "}
              <ItemTextInactive>{this.props.title}</ItemTextInactive>
            </>
          ) : !this.props.last ? (
            <>
              <LinkTo to={`/${this.props.uid}`}>
                <Circle category={this.props.category} />
                <ItemText>
                  <div
                    onMouseOver={() => this.onHover()}
                    onMouseOut={() => this.onOut()}
                  >
                    {this.props.title}
                  </div>
                </ItemText>
              </LinkTo>
              {!isMobile ? (
                <ProjectCardImageContainer
                  style={this.state.active ? { opacity: "1" } : null}
                >
                  {" "}
                  {this.props.video ? (
                    <VideoPlayer
                      src={this.state.source}
                      id={this.state.videoId}
                      active={this.state.active}
                    />
                  ) : (
                    <img
                      src={this.props.thumbnail.url}
                      alt={this.props.title[0].text}
                    />
                  )}
                </ProjectCardImageContainer>
              ) : null}
            </>
          ) : (
            <>
              {!isMobile ? (
                <ProjectCardImageContainerLast
                  style={this.state.active ? { opacity: "1" } : null}
                >
                  {" "}
                  {this.props.video ? (
                    <VideoPlayer
                      src={this.state.source}
                      id={this.state.videoId}
                      active={this.state.active}
                    />
                  ) : (
                    <img
                      src={this.props.thumbnail.url}
                      alt={this.props.title[0].text}
                    />
                  )}
                </ProjectCardImageContainerLast>
              ) : null}
              <LinkTo to={`/${this.props.uid}`}>
                <Circle category={this.props.category} />
                <ItemText>
                  <div
                    onMouseOver={() => this.onHover()}
                    onMouseOut={() => this.onOut()}
                  >
                    {this.props.title}
                  </div>
                </ItemText>
              </LinkTo>
            </>
          )}
        </ItemWrapper>
      </>
    )
  }
}
