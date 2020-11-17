import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"

import Layout from "components/Layout"
import ProjectGrid from "components/ProjectGrid"
import Header from "components/Header"

import ListGrid from "components/ListGrid"
import "styles/projectShowcase.scss"
import HorizontalCalc from "components/HorizontalCalc"

const RenderBody = ({
  projects,
  meta,
  years,
  categories,
  filteredProjects,
}) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content:
            "Garrett Vercoe is a designer working with new technology interfaces and development.",
        },
        {
          property: `og:title`,
          content: meta.title,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />

    {/* <FeaturedProjectCard projects={filteredProjects} /> */}
    
    <Header />
      {/* Passing a click event from the way more button upwards out of project grid would allow the button scroll */}
    <HorizontalCalc years={years} anim={0}>
      <ProjectGrid projects={filteredProjects} />
      <ListGrid years={years} projects={projects} />
    </HorizontalCalc>
  </>
  //  <ListYear categories={categories} projects={projects} />
)

export default ({ data }) => {
  //Required check for no data being returned
  const projects = [
    ...data.prismic.FirstTwenty.edges,
    ...data.prismic.SecondTwenty.edges,
  ]
  // console.log("test" + projectsTest)
  const meta = data.site.siteMetadata
  const filteredProjects = projects.filter(
    project => project.node.featured_project === true
  )
  // let categories = projects.map(project => project.node.project_category)
  // const categoriesSet = new Set(categories)
  // const categoriesUnique = [...categoriesSet]

  let years = projects.map(project =>
    project.node.project_post_date.substring(0, 4)
  )

  const yearsSet = new Set(years)
  const yearsUnique = [...yearsSet]
  console.log("years" + JSON.stringify(projects))
  if (!projects) return null

  return (
    <Layout>
      <RenderBody
        projects={projects}
        meta={meta}
        // categories={categoriesUnique}
        years={yearsUnique}
        filteredProjects={filteredProjects}
      />
    </Layout>
  )
}

RenderBody.propTypes = {
  projects: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    prismic {
      FirstTwenty: allProjects(sortBy: project_post_date_DESC) {
        edges {
          node {
            completed
            featured_project
            project_title
            project_category
            project_preview_thumbnail
            video_link
            project_post_date
            _meta {
              uid
            }
          }
          cursor
        }
      }
      SecondTwenty: allProjects(
        after: "YXJyYXljb25uZWN0aW9uOjE5"
        sortBy: project_post_date_DESC
      ) {
        edges {
          node {
            completed
            featured_project
            project_title
            project_category
            project_preview_thumbnail
            video_link
            project_post_date
            _meta {
              uid
            }
          }
          cursor
        }
      }
    }

    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
