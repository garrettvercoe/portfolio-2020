import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import LinkArrow from "components/LinkArrow"
const More = styled("div")`
  &:hover {
    color: blue;
    font-size: 200px;
  }
`

export default class NavHelp extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "3.75vw",
        }}
      >
        <div>
          Featured
          <LinkArrow rotate={"45deg"} />
        </div>
        <More>
          Way More
          <LinkArrow rotate={"-45deg"} />
        </More>
      </div>
    )
  }
}
