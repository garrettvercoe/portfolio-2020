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
import scrollToComponent from "react-scroll-to-component"
const ProjectCardContainer = styled("div")`
  display: grid;
  grid-template-columns: 4fr 4fr;
  margin-bottom: 4em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;
  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 2em;
  }
`
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
const ProjectCardContent = styled("div")`
  position: relative;
  height: 75vh;
  display: flex;
  @media (max-width: 950px) {
    padding: 3.25em 2.5em 2em 2.5em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 2;
  }
`

const FeaturedItems = styled("div")`
  position: relative;
  margin: auto 0;
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
    this.state = { activeProject: this.uids[0] }
    this.onHover = this.onHover.bind(this)
  }

  onHover(uid) {
    this.setState({ activeProject: uid })
  }
  render() {
    return (
      <React.Fragment>
        <ProjectCardContainer to={`/work/test`}>
          <ProjectCardContent className="ProjectCardContent">
            <FeaturedItems className="FeaturedItems">
              {/* <Description>Featured Work</Description> */}
              {this.props.projects.map((project, i) => (
                <div onMouseOver={() => this.onHover(project.node._meta.uid)}>
                  <FeaturedProjectText
                    title={project.node.project_title}
                    active={project.node._meta.uid === this.state.activeProject}
                  ></FeaturedProjectText>
                </div>
              ))}

              <Description
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
                </MoreArrow>
              </Description>
            </FeaturedItems>
          </ProjectCardContent>
          <ProjectCardImageContainer className="ProjectCardImageContainer">
            {this.props.projects.map((project, i) => (
              <Slide
                src={project.node.project_preview_thumbnail.url}
                alt={project.node.project_title[0].text}
                active={project.node._meta.uid === this.state.activeProject}
              />
            ))}
          </ProjectCardImageContainer>
        </ProjectCardContainer>
        <AboutSelf
          ref={AboutSelf => {
            this.MoreWork = AboutSelf
          }}
        >
          Garrett Vercoe is a product designer using data to solve problems in
          the community.
        </AboutSelf>
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
