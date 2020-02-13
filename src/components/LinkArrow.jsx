import React from "react"
import styled from "@emotion/styled"

const LinkArrow = styled.svg`
  &:hover {
    transform: translateY(-0.8rem);
  }

  fill: none;
  height: 3rem;

  stroke: #000;
  transition: transform 0.4s ease;
  width: 3rem;

  //write to not show on smaller devices
`

const NewLinkArrow = styled.div`
  position: relative;
  display: inline-block;
  top: 10px;
  left: 10px;
`
const Inner1 = styled.div`
  width: 60px;
  height: 2px;
  background-color: #000;
  position: absolute;
`
const Inner2 = styled.div`
  width: 20px;
  height: 2px;
  background-color: #000;
  position: absolute;
  left: 48px;
  top: -14px;
`
const Inner3 = styled.div`
  width: 20px;
  height: 2px;
  background-color: #000;
  position: absolute;
  top: 14px;
  left: 48px;
`
{
  /* */
}
export default class FeaturedProjectText extends React.Component {
  render() {
    return (
      <LinkArrow
        className="LinkArrow"
        style={this.props.active ? { transform: "rotate(-45deg)" } : null}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 9.2 9.2"
        data-link-arrow=""
      >
        <path d="M8.7,2.3v6.3H2.3 M8.7,8.7L0.4,0.4"></path>
      </LinkArrow>
      // <NewLinkArrow
      //   style={{
      //     transformOrigin: "left 50% 0px",
      //     transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)",
      //   }}
      // >
      //   <Inner1></Inner1>
      //   <Inner2
      //     style={{
      //       transformOrigin: "left 50% 0px",
      //       transform: "matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)",
      //     }}
      //   ></Inner2>
      //   <Inner3
      //     style={{
      //       transformOrigin: "left 50% 0px",
      //       transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0",
      //     }}
      //   ></Inner3>
      // </NewLinkArrow>
    )
  }
}
