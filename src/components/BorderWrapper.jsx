import React from "react"
import styled from "@emotion/styled"

const BorderWrapper = styled("div")`
  border-bottom: 1px solid #e8e8e8;
  padding-top: 3rem;
  padding-bottom: 5rem;
  margin-left: "2.5vw";
  margin-right: "2.5vw";
`

export default class Border extends React.Component {
  render() {
    return (
      <>
        <BorderWrapper>{this.props.children}</BorderWrapper>
      </>
    )
  }
}
