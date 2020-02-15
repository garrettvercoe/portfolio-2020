import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Circle from "./Circle"

const List = styled("ul")`
  list-style-type: none;

  margins: 0;
  padding: 0 0 0 2rem;
`
const ListItem = styled("li")`
  display: inline-block;
  padding-right: 1rem;
`

//
export default class Filter extends React.Component {
  render() {
    return (
      <List>
        {this.props.categories.map((category, i) => (
          <ListItem key={i}>
            <Circle category={category} />
            {category}
          </ListItem>
        ))}
      </List>
    )
  }
}
