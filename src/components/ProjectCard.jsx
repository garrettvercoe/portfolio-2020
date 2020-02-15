import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"
import Cursor from "./Cursor"
import VideoPlayer from "./VideoPlayer"
import Circle from "./Circle"
import LinkArrow from "./LinkArrow"
const ProjectCardContainer = styled("div")`
  transition: all 150ms ease-in-out;
  box-sizing: border-box;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 2em;
  }
`

const LinkTo = styled(Link)`
  text-decoration: none;
  color: currentColor;
`
const ProjectCardContent = styled("div")`
  padding: 0.5em 1em 0.5em 0em;
  position: relative;

  @media (max-width: 950px) {
    padding: 3.25em 2.5em 2em 2.5em;
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
  background: ${colors.grey200};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  height: 225px;
  max-width: 100%;

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
class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
    // var patt = /(?:(src=.*\/embed\/))(.*)(?=\?)/g
    // var id = patt.exec(JSON.stringify(this.props.video.html))
    if (this.props.video) {
      var src = this.props.video[0].text
    }

    this.state = { source: src, active: false }
    this.categoryFilter = this.categoryFilter.bind(this)
    this.onHover = this.onHover.bind(this)
    this.onOut = this.onOut.bind(this)
  }
  onHover() {
    this.setState({ active: true })
  }
  onOut() {
    this.setState({ active: false })
  }

  categoryFilter = () => {
    var category = this.props.category
    this.props.categoryOnClick(category)
  }

  render() {
    return (
      <React.Fragment>
        <ProjectCardContainer
          onMouseEnter={() => this.onHover()}
          onMouseLeave={() => this.onOut()}
        >
          <Cursor show={this.state.active}>
            <LinkTo to={`/work/${this.props.uid}`}>
              <ProjectCardContent className="ProjectCardContent">
                {this.state.active ? (
                  <>
                    <ProjectCardTitle>
                      {this.props.title[0].text}
                    </ProjectCardTitle>{" "}
                    <LinkArrow />{" "}
                  </>
                ) : (
                  <>
                    <ProjectCardTitle>
                      {this.props.title[0].text}
                    </ProjectCardTitle>
                  </>
                )}
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
              <Circle category={this.props.category} />
              {this.props.category}
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

// const ProjectCard = ({ category, title, description, thumbnail, uid }) => (
//   <ProjectCardContainer to={`/work/${uid}`}>
//     <ProjectCardImageContainer className="ProjectCardImageContainer">
//       <img src={thumbnail.url} alt={title[0].text} />
//     </ProjectCardImageContainer>
//     <ProjectCardContent className="ProjectCardContent">
//       <ProjectCardTitle>{title[0].text}</ProjectCardTitle>
//       <ProjectCardCategory onClick={this.categoryFilter} >{category}</ProjectCardCategory>
//       {/* <ProjectCardBlurb>{RichText.render(description)}</ProjectCardBlurb> */}
//       {/* <ProjectCardAction className="ProjectCardAction">
//         Details <span>&#8594;</span>
//       </ProjectCardAction> */}
//     </ProjectCardContent>
//   </ProjectCardContainer>
// )

// <div key={i} className="showcase__item">
//   <figure className="card">
//     <Link to={`/work/nothing`} className="card__image">
//       <Img fluid={project.node.project_preview_thumbnail} />
//     </Link>
//     <figcaption className="card__caption">
//       <h6 className="card__title">
//         <Link to={`/works/nothing`}>Test</Link>
//       </h6>
//       <div className="card__description">
//         <p>{project.node.project_preview_description}</p>
//       </div>
//     </figcaption>
//   </figure>
// </div>

// .showcase.is-loading {
//   visibility: hidden;
// }

// export default ProjectCard
