import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { RichText } from "prismic-reactjs"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Footer from "components/Footer"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import ProjectGrid from "components/ProjectGrid"
import Header from "components/Header"
import HorizontalScroll from "react-scroll-horizontal"
import ListGrid from "components/ListGrid"
import "styles/projectShowcase.scss"

const WidthDetector = styled("div")`
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    width: 100vw;
  }
`

const HorizontalContainer = styled("div")`
  position: fixed;
  top: 15vh;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-bottom: 85px;
`
const ScrollContainerTouch = styled("div")`
  left: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: calc(100vh - 52px);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 10;
  -ms-flex-item-align: end;
  align-self: flex-end;
  pointer-events: none;
`

const RenderBody = ({
  home,
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
          content: meta.description,
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

    <HorizontalContainer>
      <HorizontalScroll
        reverseScroll={true}
        config={{ stiffness: 350, dampness: 1 }}
      >
        <WidthDetector
          style={{
            width: `${100 + 26.5 * years.length}vw`,
          }}
        >
          <ProjectGrid projects={filteredProjects} />
          <ListGrid years={years} projects={projects} />
        </WidthDetector>
      </HorizontalScroll>
    </HorizontalContainer>
  </>
  //  <ListYear categories={categories} projects={projects} />
)

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
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
  if (!doc || !projects) return null

  return (
    <Layout>
      <RenderBody
        home={doc.node}
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
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            hero_title
            hero_button_text
            hero_button_link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            content
            about_title
            about_bio
            about_links {
              about_link
            }
          }
        }
      }
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
