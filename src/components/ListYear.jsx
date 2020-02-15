import React from "react"
import styled from "@emotion/styled"
import ListItem from "./ListItem"

const ListWrapper = styled("il")`
  padding-bottom: 1rem;
  padding-right: 10rem;
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
              title={project.node.project_title[0].text}
            />
          ))}
        </ListWrapper>
      </>
    )
  }
}

// export default class FeaturedProjects extends React.Component {
//   constructor(props) {
//     super(props)
//     this.uids = this.props.projects.map(project => project.node._meta.uid)
//     this.state = { activeProject: null }
//     this.onHover = this.onHover.bind(this)
//   }

//   onHover(uid) {
//     this.setState({ activeProject: uid })
//   }

//   onOut() {
//     this.setState({ activeProject: null })
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <BorderHeader
//           leftSection="Featured"
//           centerSection={`(0${this.props.projects.length})`}
//         />
//         <FeaturedItems className="FeaturedItems">
//           {/* <Description>Featured Work</Description> */}
//           {this.props.projects.map((project, i) => (
//             // <Cursor
//             //   src={project.node.project_preview_thumbnail.url}
//             //   alt={project.node.project_title[0].text}
//             //   active={project.node._meta.uid === this.state.activeProject}
//             // >
//             <BorderWrapper>
//               <GridLayout to={`/work/test`}>
//                 <small style={{ gridColumn: "1/span 1" }}>0{i + 1}</small>
//                 <small style={{ gridColumn: "1/span 2" }}>
//                   {project.node.project_category}
//                 </small>
//                 <div
//                   style={{ gridColumn: "3/span 10" }}
//                   onMouseOver={() => this.onHover(project.node._meta.uid)}
//                   onMouseOut={() => this.onOut()}
//                 >
//                   <SpreadOut>{project.node.project_title[0].text}</SpreadOut>
//                   {/* <FeaturedProjectText title={project.node.project_title} /> */}
//                 </div>
//                 <div style={{ gridColumn: "19/span 1" }}>
//                   <LinkArrow
//                     active={project.node._meta.uid === this.state.activeProject}
//                   />
//                 </div>
//               </GridLayout>
//             </BorderWrapper>
//             // </Cursor>
//           ))}
//         </FeaturedItems>
//       </React.Fragment>
//     )
//   }
// }

// // ProjectCard.propTypes = {
// //   category: PropTypes.array.isRequired,
// //   thumbnail: PropTypes.object.isRequired,
// //   title: PropTypes.array.isRequired,
// //   description: PropTypes.array.isRequired,
// //   uid: PropTypes.string.isRequired,
// // }
