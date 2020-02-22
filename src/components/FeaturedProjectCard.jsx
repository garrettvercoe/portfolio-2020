import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"
import ConsoleLog from "components/ConsoleLog"
import FeaturedProjectText from "components/FeaturedProjectContent"
import Slide from "components/Slide"
import LinkArrow from "components/LinkArrow"
import BorderWrapper from "components/BorderWrapper"
import GridLayout from "components/GridLayout"
import BorderHeader from "components/BorderHeader"
import Cursor from "components/Cursor"

const Description = styled("div")`
  &:hover {
    .moreArrow {
      transform: translateY(0.5em) rotate(45deg) scale(1.25);
    }
  }
  padding-bottom: 2em;
`

const AboutSelf = styled("div")`
  font-size: 2.25rem;
  max-width: 700px;

  line-height: 1.1;
`

const More = styled("div")`
  padding-top: 2em;
`

const FeaturedItems = styled("div")`
  position: relative;
  margin: auto 0;
  margin-bottom: 20em;
`

const MoreArrow = styled.svg`
  transform: rotate(45deg);
  fill: none;
  height: 0.75rem;
  margin-left: 1.5rem;
  margin-right: -1.5rem;
  stroke: #000;
  transition: transform 0.4s ease;
  width: 1rem;

  //write to not show on smaller devices
`

const SpreadOut = styled("h1")`
  &:hover {
    letter-spacing: 3px;
  }
  z-index: 1000;

  letter-spacing: -0.1rem;
  transition: letter-spacing 0.5s ease;
`
const ProjectCardImageContainer = styled("div")`
  background: ${colors.grey400};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  padding-left: 2em;
  padding-right: 2em;
  margin-left: 1em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 3em;
    max-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`

export default class FeaturedProjects extends React.Component {
  constructor(props) {
    super(props)
    this.uids = this.props.projects.map(project => project.node._meta.uid)
    this.state = { activeProject: null }
    this.onHover = this.onHover.bind(this)
  }

  onHover(uid) {
    this.setState({ activeProject: uid })
  }

  onOut() {
    this.setState({ activeProject: null })
  }
  render() {
    return (
      <React.Fragment>
        <BorderHeader
          leftSection="Featured"
          centerSection={`(0${this.props.projects.length})`}
        />
        <FeaturedItems className="FeaturedItems">
          {/* <Description>Featured Work</Description> */}
          {this.props.projects.map((project, i) => (
            <Cursor
              src={project.node.project_preview_thumbnail.url}
              alt={project.node.project_title[0].text}
              active={project.node._meta.uid === this.state.activeProject}
            >
            <BorderWrapper>
              <GridLayout to={`/work/test`}>
                <small style={{ gridColumn: "1/span 1" }}>0{i + 1}</small>
                <small style={{ gridColumn: "1/span 2" }}>
                  {project.node.project_category}
                </small>
                <div
                  style={{ gridColumn: "3/span 10" }}
                  onMouseOver={() => this.onHover(project.node._meta.uid)}
                  onMouseOut={() => this.onOut()}
                >
                  <SpreadOut>{project.node.project_title[0].text}</SpreadOut>
                  {/* <FeaturedProjectText title={project.node.project_title} /> */}
                </div>
                <div style={{ gridColumn: "19/span 1" }}>
                  <LinkArrow
                    active={project.node._meta.uid === this.state.activeProject}
                  />
                </div>
              </GridLayout>
            </BorderWrapper>
            </Cursor>
          ))}

          {/* <Description
            onClick={() =>
              scrollToComponent(this.MoreWork, {
                offset: 378,
                align: "top",
                duration: 1500,
              })
            }
          >
            {" "}
            More Projects
            <MoreArrow
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 9.2 9.2"
              className="moreArrow"
              data-link-arrow=""
            >
              <path d="M8.7,2.3v6.3H2.3 M8.7,8.7L0.4,0.4"></path>
            </MoreArrow> */}
          {/* </Description> */}
        </FeaturedItems>

        {/* <ProjectCardImageContainer className="ProjectCardImageContainer">
            {this.props.projects.map((project, i) => (
              <Slide
                src={project.node.project_preview_thumbnail.url}
                alt={project.node.project_title[0].text}
                active={project.node._meta.uid === this.state.activeProject}
              />
            ))}
          </ProjectCardImageContainer> */}

        {/* <AboutSelf
          ref={AboutSelf => {
            this.MoreWork = AboutSelf
          }}
        >
          Garrett Vercoe is a product designer using data to solve problems in
          the community.
        </AboutSelf> */}
      </React.Fragment>
    )
  }
}

// ProjectCard.propTypes = {
//   category: PropTypes.array.isRequired,
//   thumbnail: PropTypes.object.isRequired,
//   title: PropTypes.array.isRequired,
//   description: PropTypes.array.isRequired,
//   uid: PropTypes.string.isRequired,
// }
