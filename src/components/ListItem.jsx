import React from "react"
import styled from "@emotion/styled"
import Circle from "./Circle"
import VideoPlayer from "./VideoPlayer"
import dimensions from "styles/dimensions"
import { Link } from "gatsby"

import { isMobile } from "react-device-detect"
import LinkArrow from "./LinkArrow"
import colors from "styles/colors"
import { keyframes } from "@emotion/core"
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
  margin-top: 2vh;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-top: inherit;
  }
  &:hover {
    text-decoration: underline;
  }
`
const ItemTextGray = styled("h2")`
  display: inline-block;
  margin-bottom: 0rem;
   color: ${colors.grey500};
  margin-top: 2vh;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-top: inherit;
  }
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



const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translate3d(0, -20%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
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

const FilterHover = styled("div")`
position:absolute;
  color: ${colors.grey500};
  font-size: .9em;
  top: -3px;
  animation: ${fadeIn} .2s ease-in;

 
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
super(props);
    if (this.props.video) {
      var src = this.props.video[0].text
    }


    this.state = { source: src, active: false, filterHover: false }
    this.onHover = this.onHover.bind(this)
    this.onOut = this.onOut.bind(this)
        this.onFilterHover = this.onFilterHover.bind(this)
    this.onFilterOut = this.onFilterOut.bind(this)
        this.handleFiltering = this.handleFiltering.bind(this)
  }

  onHover() {
    this.setState({ active: true })
  }
  onOut() {
    this.setState({ active: false })
  }
   onFilterHover() {
    this.setState({ filterHover: true })
  }
  onFilterOut() {
    this.setState({ filterHover: false })
  }

  handleFiltering() {
      console.log("PROPS" + JSON.stringify(this.props));
    this.props.handleFilter(this.props.category)
  }




  render() {
    return (
      <>
        <ItemWrapper>
          {!this.props.active ? (
            <>
              <Circle inactive={true} category="Soon" />{" "}
              <ItemTextInactive>{this.props.title}</ItemTextInactive>
            </>
          ) : !this.props.last ? (
            <>
            <div style={{display:'inline', cursor: 'pointer'}}
              onMouseOver={() => this.onFilterHover()}
                    onMouseOut={() => this.onFilterOut()}
                    onClick={this.handleFiltering}>
                      {this.state.filterHover && <FilterHover>Filter by</FilterHover>}
            <Circle filter={this.props.filter} category={this.props.category} />
            </div>
              <LinkTo to={`/${this.props.uid}`}>
                
                <ItemText>
                  <div
                    onMouseOver={() => this.onHover()}
                    onMouseOut={() => this.onOut()}
                  >
                 
                    {this.props.filter == "none" || this.props.filter === this.props.category ? this.props.title :
                      <div style={{color: `${colors.grey500}`}}>{this.props.title}</div>
                    }
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
                <div style={{display:'inline', cursor: 'pointer'}}
              onMouseOver={() => this.onFilterHover()}
                    onMouseOut={() => this.onFilterOut()}
                    onClick={this.handleFiltering}>
                      {this.state.filterHover && <FilterHover>Filter by</FilterHover>}
            <Circle filter={this.props.filter} category={this.props.category} />
            </div>
              <LinkTo to={`/${this.props.uid}`}>
           
                <ItemText>
                  <div
                    onMouseOver={() => this.onHover()}
                    onMouseOut={() => this.onOut()}
                  >
                                       {this.props.filter == "none" || this.props.filter === this.props.category ? this.props.title :
                      <div style={{color: `${colors.grey500}`}}>{this.props.title}</div>}
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
