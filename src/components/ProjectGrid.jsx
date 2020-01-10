import React from "react"
import Masonry from "react-masonry-component"
import ProjectCard from "components/ProjectCard"
import ConsoleLog from "components/ConsoleLog"
import scrollToComponent from "react-scroll-to-component"
const filters = { marginLeft: "5%", marginBottom: "5em" }

const col = {
  width: `${100 / 3}%`,
  paddingRight: "5%",
}
const masonryOptions = {
  horizontalOrder: true,
}
const Selected = {
  fontWeight: 600,
}

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
        <Masonry style={filters}>
          <section
            style={col}
            ref={section => {
              this.Projects = section
            }}
          >
            <h1>Projects</h1>
          </section>

          <div style={col}>
            <h5>Filter</h5>
            {this.state.categorySelected === "All" ? (
              <div style={Selected}>All</div>
            ) : (
              <div onClick={() => this.handleFilterSelect("All")}>All</div>
            )}

            {this.props.categories.map(category => (
              <React.Fragment>
                {this.state.categorySelected === category ? (
                  <div style={Selected}>{category}</div>
                ) : (
                  <div onClick={() => this.handleFilterSelect(category)}>
                    {category}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div style={col}></div>
        </Masonry>
        <Masonry options={masonryOptions} className="showcase">
          {this.state.categorySelected === "All" ? (
            <React.Fragment>
              {this.props.projects.map((project, i) => (
                <ProjectCard
                  key={i}
                  category={project.node.project_category}
                  title={project.node.project_title}
                  description={project.node.project_preview_description}
                  thumbnail={project.node.project_preview_thumbnail}
                  categoryOnClick={this.handleFilterSelect}
                  uid={project.node._meta.uid}
                />
              ))}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {this.props.projects
                .filter(
                  project =>
                    project.node.project_category ===
                    this.state.categorySelected
                )
                .map((project, i) => (
                  <React.Fragment>
                    <ProjectCard
                      key={i}
                      category={project.node.project_category}
                      title={project.node.project_title}
                      description={project.node.project_preview_description}
                      thumbnail={project.node.project_preview_thumbnail}
                      uid={project.node._meta.uid}
                    />
                  </React.Fragment>
                ))}
            </React.Fragment>
          )}
        </Masonry>
      </React.Fragment>
    )
  }
}
