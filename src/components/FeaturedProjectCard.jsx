import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"

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
  padding-bottom: 2em;
`
const More = styled("div")`
  padding-top: 2em;
`
const ProjectCardContent = styled("div")`
  position: relative;
  height: 66vh;
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
const FeaturedItem = styled("div")`
  position: relative;
  padding-bottom: 3em;
`

const LinkArrow = styled.svg`
  &:hover {
    transform: translateY(-0.8rem);
  }

  fill: none;
  height: 1rem;
  margin-left: 0.75rem;
  margin-right: -1.5rem;
  stroke: #000;
  transition: transform 0.4s ease;
  width: 1rem;

  //write to not show on smaller devices
`
const MoreArrow = styled.svg`
  &:hover {
    transform: translateY(0.8rem), rotate(45deg);
  }
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
const FeaturedTitle = styled.a`
  &:hover {
    .LinkArrow {
      transform: translateY(-0.8rem);
    }
  }
  text-decoration: none;
  padding-right: 1.5rem;
  padding-bottom: 0rem;
  margin-bottom: 0rem;
  line-height: 1.1;
  .featured_title {
    color: transparent;
    font-size: 48px;

    &:before {
      color: #000;
      content: attr(data-text);
      left: 0;
      position: absolute;
      top: 0;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 0.075rem;

      .mix-blend-mode-unsupported & {
        color: #fff;
      }
    }

    &:after {
      color: #000;
      content: attr(data-text);
      height: 0;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      transition: height 0.4s ease;

      .mix-blend-mode-unsupported & {
        color: #fff;
      }
    }

    &:hover {
      &:after {
        height: 100%;
      }
    }
    //write to not show on smaller devices
  }
`
const FeaturedDesc = styled("h5")`
  margin: 0;
  padding: 0;
`

const ProjectCardImageContainer = styled("div")`
  background: ${colors.grey200};
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

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${colors.blue500};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  img {
    max-width: 400px;
    width: 100%;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 300px;
    }
  }
`

const ProjectCard = () => (
  <ProjectCardContainer to={`/work/test`}>
    <ProjectCardContent className="ProjectCardContent">
      <FeaturedItems className="FeaturedItems">
        <Description>Featured Work</Description>
        <FeaturedItem>
          <FeaturedTitle
            target="_blank"
            rel="noopener"
            href="https://soundloop.app/"
            data-link=" "
          >
            <span class="featured_title" data-text="Soundloop">
              Soundloop
            </span>{" "}
            <LinkArrow
              className="LinkArrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 9.2 9.2"
              data-link-arrow=""
            >
              <path d="M8.7,2.3v6.3H2.3 M8.7,8.7L0.4,0.4"></path>
            </LinkArrow>
          </FeaturedTitle>
          <FeaturedDesc>2019 Development + Design</FeaturedDesc>
        </FeaturedItem>

        <FeaturedItem>
          <FeaturedTitle
            target="_blank"
            rel="noopener"
            href="https://soundloop.app/"
            data-link=" "
          >
            <span class="featured_title" data-text="City of Charlottesville">
              City of Charlottesville
            </span>{" "}
            <LinkArrow
              className="LinkArrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 9.2 9.2"
              data-link-arrow=""
            >
              <path d="M8.7,2.3v6.3H2.3 M8.7,8.7L0.4,0.4"></path>
            </LinkArrow>
          </FeaturedTitle>
          <FeaturedDesc>2019 Development + Design</FeaturedDesc>
        </FeaturedItem>
        <FeaturedItem>
          <FeaturedTitle
            target="_blank"
            rel="noopener"
            href="https://soundloop.app/"
            data-link=" "
          >
            <span class="featured_title" data-text="Lessons of Venice">
              Lessons of Venice
            </span>{" "}
            <LinkArrow
              className="LinkArrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 9.2 9.2"
              data-link-arrow=""
            >
              <path d="M8.7,2.3v6.3H2.3 M8.7,8.7L0.4,0.4"></path>
            </LinkArrow>
          </FeaturedTitle>
          <FeaturedDesc>2019 Development + Design</FeaturedDesc>
        </FeaturedItem>
        <Description>
          More Work
          <MoreArrow
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9.2 9.2"
            data-link-arrow=""
          >
            <path d="M8.7,2.3v6.3H2.3 M8.7,8.7L0.4,0.4"></path>
          </MoreArrow>
        </Description>
      </FeaturedItems>
    </ProjectCardContent>
    <ProjectCardImageContainer className="ProjectCardImageContainer">
      {/* <img src={thumbnail.url} alt={title[0].text} /> */}
    </ProjectCardImageContainer>
  </ProjectCardContainer>
)

export default ProjectCard

ProjectCard.propTypes = {
  category: PropTypes.array.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}
