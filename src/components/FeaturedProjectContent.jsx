import React from "react"
import styled from "@emotion/styled"
import Cursor from "components/Cursor"
const Title = styled.a`
  &:hover {
    .LinkArrow {
      transform: translateY(-0.8rem);
    }
    .After {
      height: 0;
           }
  }
  text-decoration: none;
  padding-right: 0.5rem;
  padding-bottom: 0rem;
  margin-bottom: 0rem;
  line-height: 1;
    color: transparent;
    font-size: 5.5em;

    //write to not show on smaller devices
  }
`
const After = styled.div`
  color: #000;
  height: 100%;
  left: 0;
  font-size: 6.33rem;
  font-weight: 600;
  font-family: "GT-America-Expanded";
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: height 0.5s ease;

  .mix-blend-mode-unsupported & {
    color: #fff;
  }
`

const Before = styled.div`
  &:hover {
  }
  color: #000;
  transition: letter-spacing 1s ease;

  font-size: 6.33rem;
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
        <Cursor
          src={this.props.src}
          alt={this.props.alt}
          active={this.props.active}
        >
          <Title
            className="featuredTitle"
            target="_blank"
            rel="noopener"
            href="https://soundloop.app/"
            data-link=" "
          >
            <Before>{this.props.title[0].text}</Before>
            <span>{this.props.title[0].text}</span>{" "}
            <After className="After">{this.props.title[0].text}</After>
          </Title>
        </Cursor>
      </FeaturedItem>
    )
  }
}
