import React from "react"
import styled from "@emotion/styled"
import Circle from "./Circle"
import ListYear from "./ListYear"
const GridWrapper = styled("div")`
  padding-left: 5rem;
  display: inline-block;
`

export default class ListGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeProject: null }
  }

  render() {
    return (
      <GridWrapper>
        {this.props.years.map((year, i) => (
          <ListYear
            year={year}
            key={i}
            categories={this.props.categories}
            projects={this.props.projects.filter(
              project => project.node.project_post_date.substring(0, 4) === year
            )}
          />
        ))}
      </GridWrapper>
    )
  }
}
