import React from "react"
import styled from "@emotion/styled"
import Circle from "./Circle"
import NavHelp from "./NavHelp"
import colors from "styles/colors"
import ListYear from "./ListYear"
import dimensions from "styles/dimensions"
const GridWrapper = styled("div")`
  padding-left: 5rem;
  display: inline-block;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-left: 0rem;
    display: block;
  }
`

const Filter = styled.div`
display: inline-block;
color: ${colors.grey600};
padding-left: 1rem;

&:hover {
  color: ${colors.black};
  cursor: pointer;
}
`
const FilterList = styled.div`
display: inline-block;
padding-left: .5rem;
`

export default class ListGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeProject: null,
    filter: "none"}
 this.onFilter = this.onFilter.bind(this);
  }
 
  onFilter(category) {
    this.setState({ filter: category })
  }

  render() {
    return (
      <GridWrapper>
        <div style={{display:"flex"}}>
        <NavHelp text="Way More" />
        {this.state.filter !== "none" && <Filter onClick={() => this.setState({filter: "none"})}>Reset filter</Filter>}
       </div>
        {this.props.years.map((year, i) => (
          <ListYear
            year={year}
            key={i}
            onFilter={this.onFilter}
            filter={this.state.filter}
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
