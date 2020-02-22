import React from "react"
import styled from "@emotion/styled"
import ListItem from "./ListItem"
import Cursor from "./Cursor"

const ListWrapper = styled("il")`
  padding-bottom: 1rem;
  padding-right: 1rem;
  width: 27vw;
  display: inline-grid;
`

const Year = styled("h2")`
  margin-bottom: 0;
  line-height: 1;
`

export default class ListYear extends React.Component {
  render() {
    return (
      <>
        <ListWrapper>
          <Year>{this.props.year} </Year>
          <h1>—</h1>
          {this.props.projects.map((project, i) => (
            <ListItem
              category={project.node.project_category}
              video={project.node.video_link}
              title={project.node.project_title[0].text}
              uid={project.node._meta.uid}
              thumbnail={project.node.project_preview_thumbnail}
            />
          ))}
        </ListWrapper>
      </>
    )
  }
}
