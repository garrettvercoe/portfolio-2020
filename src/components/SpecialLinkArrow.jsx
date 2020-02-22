import React from "react"
import styled from "@emotion/styled"

const NewLinkArrow = styled.div`
  position: relative;
  display: inline-block;
  top: -5px;
  left: 5px;
  margin-right: 20px;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -ms-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
`
const Inner1 = styled.div`
  width: 30px;
  height: 1px;
  background-color: #000;
  position: absolute;
  transition: width 0.5s ease;
`
const Inner2 = styled.div`
  width: 10px;
  height: 1px;
  background-color: #000;
  position: absolute;
  left: 24px;
  top: -7px;
`
const Inner3 = styled.div`
  width: 10px;
  height: 1px;
  background-color: #000;
  position: absolute;
  top: 7px;
  left: 24px;
`

export default class FeaturedProjectText extends React.Component {
  render() {
    return (
      <NewLinkArrow
        style={
          this.props.active ? { marginRight: "0px", marginLeft: "10px" } : null
        }
      >
        <Inner1 className="inner1"></Inner1>
        <Inner2
          style={{
            transformOrigin: "left 50% 0px",
            transform: "matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 0)",
          }}
        ></Inner2>
        <Inner3
          style={{
            transformOrigin: "left 50% 0px",
            transform: "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0",
          }}
        ></Inner3>
      </NewLinkArrow>
    )
  }
}
