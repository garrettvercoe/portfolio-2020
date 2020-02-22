import React from "react"
import styled from "@emotion/styled"
import LinkArrow from "./LinkArrow"

const LinkItem = styled("a")`
  color: currentColor;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid #000;
  }
`
export default class Anchor extends React.Component {
  render() {
    return (
      <LinkItem target="_blank" href={this.props.href}>
        {this.props.children}
        <LinkArrow />
      </LinkItem>
    )
  }
}
