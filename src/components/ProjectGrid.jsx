import React from "react"
import ProjectCard from "components/ProjectCard"
import GridLayout from "components/GridLayout"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import NavHelp from "components/NavHelp"

const InlBlk = styled("div")`
  display: inline-block;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
  }
`
export default class ProjectGrid extends React.Component {
  render() {
    return (
      <InlBlk>
        <div style={{ paddingLeft: "3.75rem" }}>
          <NavHelp text="Featured" />
        </div>
        <GridLayout>
          {this.props.projects.map((project, i) => (
            <ProjectCard
              key={i}
              category={project.node.project_category}
              title={project.node.project_title}
              thumbnail={project.node.project_preview_thumbnail}
              video={project.node.video_link}
              date={project.node.project_post_date}
              categoryOnClick={this.handleFilterSelect}
              uid={project.node._meta.uid}
            />
          ))}
        </GridLayout>
      </InlBlk>
    )
  }
}
