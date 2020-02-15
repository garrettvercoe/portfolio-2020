import React from "react"
import Masonry from "react-masonry-component"
import ProjectCard from "components/ProjectCard"
import ConsoleLog from "components/ConsoleLog"
import scrollToComponent from "react-scroll-to-component"
import BorderHeader from "components/BorderHeader"
import BorderWrapper from "components/BorderWrapper"
import GridLayout from "components/GridLayout"
import styled from "@emotion/styled"

export default class ProjectGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = { categorySelected: "All" }
    this.handleFilterSelect = this.handleFilterSelect.bind(this)
  }

  handleFilterSelect(newCategory) {
    scrollToComponent(this.Projects, {
      offset: -50,
      align: "top",
    })
    this.setState({ categorySelected: newCategory })
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ display: "inline-block" }}>
          <GridLayout>
            {this.props.projects.map((project, i) => (
              <ProjectCard
                key={i}
                category={project.node.project_category}
                title={project.node.project_title}
                description={project.node.project_preview_description}
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
