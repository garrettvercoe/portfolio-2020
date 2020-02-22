import React from "react"
import Masonry from "react-masonry-component"
import ProjectCard from "components/ProjectCard"
import ConsoleLog from "components/ConsoleLog"
import BorderHeader from "components/BorderHeader"
import BorderWrapper from "components/BorderWrapper"
import GridLayout from "components/GridLayout"
import styled from "@emotion/styled"

import NavHelp from "components/NavHelp"

export default class ProjectGrid extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "inline-block" }}>
          <NavHelp />
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
        </div>
      </React.Fragment>
    )
  }
}
