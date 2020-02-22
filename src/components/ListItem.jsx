import React from "react"
import styled from "@emotion/styled"
import Circle from "./Circle"
import VideoPlayer from "./VideoPlayer"
import dimensions from "styles/dimensions"
import { Link } from "gatsby"
import LinkArrow from "./LinkArrow"
import colors from "styles/colors"
const ItemWrapper = styled("li")`
  padding-bottom: 0.5rem;
  list-style-type: none;
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
const ProjectCardImageContainer = styled("div")`
  opacity: 0;
  position: absolute;
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
          <ProjectCardImageContainer
            style={this.state.active ? { opacity: "100%" } : null}
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
        </ItemWrapper>
      </>
    )
  }
}
