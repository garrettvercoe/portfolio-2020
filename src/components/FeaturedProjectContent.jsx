import React from "react"
import styled from "@emotion/styled"
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

const Title = styled.a`
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


    color: transparent;
    font-size: 3.5em;

    //write to not show on smaller devices
  }
`
const After = styled.div`
  color: #000;
  height: 0;
  left: 0;

  overflow: hidden;
  position: absolute;
  top: 0;
  transition: height 0.4s ease;
  .mix-blend-mode-unsupported & {
    color: #fff;
  }
`

const Before = styled.div`
  color: #000;

  left: 0;
  position: absolute;
  top: 0;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.075rem;
  .mix-blend-mode-unsupported & {
    color: #fff;
  }
`
const FeaturedDesc = styled("h5")`
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
        <Title
          className="featuredTitle"
          target="_blank"
          rel="noopener"
          href="https://soundloop.app/"
          data-link=" "
        >
          <Before>{this.props.title[0].text}</Before>
          <span>{this.props.title[0].text}</span>{" "}
          <After style={this.props.active ? { height: "100%" } : { height: 0 }}>
            {this.props.title[0].text}
          </After>
          <LinkArrow
            style={
              this.props.active ? { transform: "translateY(-0.8rem)" } : {}
            }
            className="LinkArrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9.2 9.2"
            data-link-arrow=""
          >
            <path d="M8.7,2.3v6.3H2.3 M8.7,8.7L0.4,0.4"></path>
          </LinkArrow>
        </Title>

        <FeaturedDesc>2019 Development + Design</FeaturedDesc>
      </FeaturedItem>
    )
  }
}
