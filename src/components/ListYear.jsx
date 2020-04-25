import React from "react"
import styled from "@emotion/styled"
import ListItem from "./ListItem"
import Cursor from "./Cursor"
import dimensions from "styles/dimensions"

const ListWrapper = styled("il")`
  padding-bottom: 1rem;
  padding-right: 1rem;
  width: 27vw;
  display: inline-grid;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
    width: 100vw;
  }
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
          {this.props.projects
            .reverse()
            .map((project, i) =>
              project.node.completed === true ? (
                <ListItem
                  category={project.node.project_category}
                  video={project.node.video_link}
                  title={project.node.project_title[0].text}
                  uid={project.node._meta.uid}
                  last={
                    i === this.props.projects.length - 3 ||
                    i === this.props.projects.length - 2 ||
                    i === this.props.projects.length - 1
                  }
                  active={true}
                  key={i}
                  thumbnail={project.node.project_preview_thumbnail}
                />
              ) : (
                <ListItem
                  title={project.node.project_title[0].text}
                  key={i}
                  active={false}
                />
              )
            )}
        </ListWrapper>
      </>
    )
  }
}
