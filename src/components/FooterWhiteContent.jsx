import React from "react"
import styled from "@emotion/styled"
const LinkArrow = styled.svg`
  &:hover {
    transform: translateY(-0.8rem);
  }

  fill: none;
  height: 1rem;

  margin-right: -1.5rem;
  stroke: #000;
  transition: transform 0.4s ease;
  width: 1rem;

  //write to not show on smaller devices
`

const Title = styled.a`
  &:hover {
    .LinkArrow {
      transform: translateY(-0.8rem);
    }
    .After {
      height: 100%;
        }
  }



  text-decoration: none;
  padding-right: 0.5rem;
  padding-bottom: 0rem;
  margin-bottom: 0rem;
  line-height: 1.1;


    color: transparent;
    font-size: 5.5em;

    //write to not show on smaller devices
  }
`
const After = styled.div`
  color: #fff;
  height: 0;
  left: 0;
  font-size: 6.67rem;
  line-height: 1.45;
  font-weight: 600;
  font-family: "GT-America-Expanded";
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: height 0.4s ease;
  .mix-blend-mode-unsupported & {
    color: #000;
  }
`

const Before = styled.div`
  color: #fff;
  font-size: 6.67rem;
  line-height: 1.45;
  font-weight: 600;
  font-family: "GT-America-Expanded";
  left: 0;
  position: absolute;
  top: 0;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.075rem;
  .mix-blend-mode-unsupported & {
    color: #fff;
  }
`
const FeaturedDesc = styled("h1")`
  color: #fff;
  margin: 0;
  padding: 0;
`
const FeaturedItem = styled("div")`
  position: relative;
  padding-bottom: 3em;
`
export default class FeaturedProjectText extends React.Component {
  render() {
    return (
      <FeaturedItem>
        <FeaturedDesc>Let's Roll.</FeaturedDesc>
        <FeaturedItem>
          <Title
            className="featuredTitle"
            target="_blank"
            rel="noopener"
            href="https://soundloop.app/"
            data-link=" "
          >
            <Before>{this.props.title}</Before>
            <span>{this.props.title}</span>{" "}
            <After className="After">{this.props.title}</After>
            <LinkArrow
              style={{ transform: "translateY(-0.8rem)" }}
              className="LinkArrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 9.2 9.2"
              data-link-arrow=""
            >
              <path d="M8.7,2.3v6.3H2.3 M8.7,8.7L0.4,0.4"></path>
            </LinkArrow>
          </Title>
        </FeaturedItem>
      </FeaturedItem>
    )
  }
}
