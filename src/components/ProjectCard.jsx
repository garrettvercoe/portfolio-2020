import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import PropTypes from "prop-types"
import Cursor from "./Cursor"
import VideoPlayer from "./VideoPlayer"
import Circle from "./Circle"
const ProjectCardContainer = styled("div")`
  transition: all 150ms ease-in-out;
  box-sizing: border-box;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 1em;
  }
`

const LinkTo = styled(Link)`
  text-decoration: none;
  color: currentColor;
  &:hover .projectCardTitle {
    text-decoration: underline;
  }
`
const ProjectCardContent = styled("div")`
  padding: 0.5em 1em 0.5em 0em;
  position: relative;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 1em 2.5em 0.5em 0em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 2;
  }
`

const ProjectCardCategory = styled("h3")`
  line-height: 1.5;
`

const ProjectCardTitle = styled("h2")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  display: inline-block;
  padding-right: 1rem;
`

const ProjectCardImageContainer = styled("div")`
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 22.75vh;
  max-width: 100%;
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
class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
    // var patt = /(?:(src=.*\/embed\/))(.*)(?=\?)/g
    // var id = patt.exec(JSON.stringify(this.props.video.html))
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
      <React.Fragment>
        <ProjectCardContainer
          onMouseEnter={() => this.onHover()}
          onMouseLeave={() => this.onOut()}
        >
          <Cursor show={this.state.active}>
            <LinkTo to={`/${this.props.uid}`}>
              <ProjectCardContent className="ProjectCardContent">
                <ProjectCardTitle className="projectCardTitle">
                  {this.props.title[0].text}
                </ProjectCardTitle>
              </ProjectCardContent>
              <ProjectCardImageContainer className="ProjectCardImageContainer">
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
            </LinkTo>
            <ProjectCardCategory onClick={this.categoryFilter}>
              <Circle category={this.props.category} filter={this.props.category}/>

              <div style={{ paddingLeft: "1rem", display: "inline-block" }}>
                {this.props.date.substring(0, 4)}
              </div>
            </ProjectCardCategory>{" "}
          </Cursor>
        </ProjectCardContainer>
      </React.Fragment>
    )
  }
}

ProjectCard.propTypes = {
  category: PropTypes.array.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}

export default ProjectCard
