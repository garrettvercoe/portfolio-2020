import React from "react"
import styled from "@emotion/styled"
import GridLayout from "components/GridLayout"
import BorderWrapper from "components/BorderWrapper"
export default class Header extends React.Component {
  render() {
    return (
      <>
        <GridLayout to={`/work/test`}>
          <h3 style={{ gridColumn: "1/span 2" }}>{this.props.leftSection}</h3>
          <h3 style={{ gridColumn: "3/span 10" }}>
            {this.props.centerSection}
          </h3>
          <span
            style={{
              gridColumn: "1/span 20",
              borderBottom: `1px solid #E8E8E8`,
              marginBottom: "4rem",
              paddingBottom: "0.25rem",
            }}
          ></span>
        </GridLayout>
      </>
    )
  }
}
