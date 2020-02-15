import React from "react"
import styled from "@emotion/styled"
import Circle from "./Circle"

const ItemWrapper = styled("li")`
  padding-bottom: 0.5rem;
  list-style-type: none;
`

const ItemText = styled("h3")`
  display: inline-block;
  margin-bottom: 0rem;
`

export default class ListItem extends React.Component {
  render() {
    return (
      <>
        <ItemWrapper>
          <Circle category={this.props.category} />
          <ItemText>{this.props.title}</ItemText>
        </ItemWrapper>
      </>
    )
  }
}
