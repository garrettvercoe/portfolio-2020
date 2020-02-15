import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { RichText } from "prismic-reactjs"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import ProjectGrid from "components/ProjectGrid"
import FeaturedProjectCard from "components/FeaturedProjectCard"
import GridLayout from "components/GridLayout"
import Header from "components/Header"
import HorizontalScroll from "react-scroll-horizontal"
import Filter from "components/Filter"

import ListGrid from "components/ListGrid"
import "styles/projectShowcase.scss"

const Hero = styled("div")`
  width: 100vw;
  height: 40vh;
  display: flex;
  align-items: flex-end;
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

const HeroText = styled("h1")`
  vertical-align: middle;
`
const Section = styled("div")`
  margin-top: 3em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const WorkAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.blue500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
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
    <Header categories={categories} />

    <HorizontalContainer>
      <HorizontalScroll
        reverseScroll={true}
        config={{ stiffness: 200, dampness: 1 }}
      >
        <div style={{ width: "23037px", transform: "translateX(0px)" }}>
          <ScrollContainerTouch>
            <ProjectGrid categories={categories} projects={projects} />
            <ListGrid
              years={years}
              categories={categories}
              projects={projects}
            />
          </ScrollContainerTouch>
        </div>
      </HorizontalScroll>
    </HorizontalContainer>
  </>
  //  <ListYear categories={categories} projects={projects} />
)

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const projects = data.prismic.allProjects.edges
  const meta = data.site.siteMetadata

  const filteredProjects = projects.filter(
    project => project.node.featured_project === "true"
  )
  let categories = projects.map(project => project.node.project_category)
  const categoriesSet = new Set(categories)
  const categoriesUnique = [...categoriesSet]

  let years = projects.map(project =>
    project.node.project_post_date.substring(0, 4)
  )

  const yearsSet = new Set(years)
  const yearsUnique = [...yearsSet]

  if (!doc || !projects) return null

  return (
    <Layout>
      <RenderBody
        home={doc.node}
        projects={projects}
        meta={meta}
        categories={categoriesUnique}
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
      allProjects(sortBy: project_post_date_DESC) {
        edges {
          node {
            project_post_date
            project_preview_thumbnail
            project_title
            project_category
            video_link
            featured_project
            _meta {
              uid
            }
          }
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
