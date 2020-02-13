import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { RichText } from "prismic-reactjs"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"
import About from "components/About"
import Layout from "components/Layout"
import ProjectGrid from "components/ProjectGrid"
import FeaturedProjectCard from "components/FeaturedProjectCard"
import GridLayout from "components/GridLayout"
import Fluid from "components/Fluid"
import "styles/projectShowcase.scss"

const Hero = styled("div")`
  width: 100vw;
  height: 40vh;
  display: flex;
  align-items: flex-end;
`

const HeroText = styled("h1")`
  vertical-align: middle;
`
const Section = styled("div")`
  margin-bottom: 10em;
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

const RenderBody = ({ home, projects, meta, categories, filteredProjects }) => (
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
    <Hero style={{ borderBottom: `1px solid #acacac`, marginBottom: "40vh" }}>
      <GridLayout>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 362.84 39.8"
          style={{
            width: "50rem",
            paddingBottom: "1rem",
            height: "auto",
            gridColumn: "5/span 10",
            // fill: "transparent",
            // stroke: " #000",
            // strokeWidth: "0.5px",
          }}
        >
          <path
            class="cls-1"
            d="M3.29,19.9c0-10.66,7.1-18.1,18.81-18.1C31.9,1.8,37.32,7,38.67,12.51L31.8,13.66c-.86-3.45-3.93-6.72-9.89-6.72-7.39,0-11.76,5.14-11.76,13,0,7.49,4.18,12.77,11.81,12.77s10.8-5.09,10.9-8.93v-.43H21.48V18.46H38.91V36.85H34l-.48-5.57c-2,3.79-6.48,6.53-12.91,6.53C9.86,37.81,3.29,30.41,3.29,19.9Z"
          />
          <path
            class="cls-1"
            d="M41.94,30.37a6.14,6.14,0,0,1,2.93-5.43c1.73-1.1,4.13-1.77,8.64-2.21L62.1,22v-.52c0-3.51-2.16-5.14-6.19-5.14s-6.34,1.54-6.72,4.37H42.71c.58-5.23,5.62-8.59,13.2-8.59,8.5,0,12.43,3.26,12.43,10.22v6.77A35,35,0,0,0,69,36.85H62.73a29.82,29.82,0,0,1-.39-4.37C60.71,35.7,57,37.57,51.69,37.57,45.73,37.57,41.94,34.83,41.94,30.37ZM62.2,26.72V25.47l-8.11.82c-4.18.43-5.72,1.53-5.72,3.74s2,3.41,5.38,3.41C58.74,33.44,62.2,30.8,62.2,26.72Z"
          />
          <path
            class="cls-1"
            d="M86.56,12.22a9.21,9.21,0,0,1,1.73.15v5.71a11.33,11.33,0,0,0-1.87-.15c-2.78,0-4.61.72-5.91,2-1.92,1.92-2.35,4.66-2.35,7.54v9.36H72v-24h5.66v6.28C78.88,15,82.05,12.22,86.56,12.22Z"
          />
          <path
            class="cls-1"
            d="M104.87,12.22a9.37,9.37,0,0,1,1.73.15v5.71a11.33,11.33,0,0,0-1.87-.15c-2.79,0-4.61.72-5.91,2-1.92,1.92-2.35,4.66-2.35,7.54v9.36H90.28v-24h5.66v6.28C97.19,15,100.36,12.22,104.87,12.22Z"
          />
          <path
            class="cls-1"
            d="M134,26.38H112.52c.24,4,3.36,6.63,8.35,6.63,3.65,0,6.38-1.49,7.87-4.18L133.59,31c-2.4,4.22-6.86,6.53-13,6.53-8.78,0-14.16-4.56-14.16-12.48,0-8.16,5.42-13,13.92-13S134,16.49,134,24.17Zm-6.15-4.13c0-3.93-3.07-6.19-7.54-6.19-4.65,0-7.53,2.45-7.77,6.43h15.31Z"
          />
          <path
            class="cls-1"
            d="M133.65,12.85h5.57v-6l6.19-2.4v8.41h8.16v4.36h-8.16V27.73c0,3.07,1.49,4.46,4.61,4.46a15,15,0,0,0,3.55-.43V36.7a18.11,18.11,0,0,1-5.09.68c-6.86,0-9.26-3.41-9.26-8.69V17.21h-5.57Z"
          />
          <path
            class="cls-1"
            d="M156,12.85h5.56v-6l6.2-2.4v8.41H176v4.36h-8.16V27.73c0,3.07,1.48,4.46,4.6,4.46a15,15,0,0,0,3.56-.43V36.7a18.22,18.22,0,0,1-5.09.68c-6.87,0-9.27-3.41-9.27-8.69V17.21H156Z"
          />
          <path
            class="cls-1"
            d="M195.21,2.76h7.2l9.4,24.15a22.06,22.06,0,0,1,1.16,4h.19a22.73,22.73,0,0,1,1.15-4l9.41-24.15h7.2l-14,34.09h-7.68Z"
          />
          <path
            class="cls-1"
            d="M253.6,26.38H232.15c.24,4,3.36,6.63,8.35,6.63,3.65,0,6.38-1.49,7.87-4.18L253.22,31c-2.4,4.22-6.86,6.53-13,6.53-8.79,0-14.16-4.56-14.16-12.48,0-8.16,5.42-13,13.92-13s13.58,4.36,13.58,12Zm-6.14-4.13c-.05-3.93-3.07-6.19-7.54-6.19-4.65,0-7.53,2.45-7.77,6.43h15.31Z"
          />
          <path
            class="cls-1"
            d="M271.29,12.22a9.37,9.37,0,0,1,1.73.15v5.71a11.45,11.45,0,0,0-1.88-.15c-2.78,0-4.6.72-5.9,2-1.92,1.92-2.35,4.66-2.35,7.54v9.36h-6.2v-24h5.67v6.28C263.61,15,266.78,12.22,271.29,12.22Z"
          />
          <path
            class="cls-1"
            d="M272.88,24.8c0-7.83,5.52-12.67,14.31-12.67,7.34,0,12.1,3.16,13.25,8.88l-6.34.91c-.72-3.31-3.21-5.14-7.1-5.14-4.8,0-7.68,3-7.68,8s3,8.11,7.77,8.11c3.84,0,6.29-1.77,7.16-5.13l6.14,1.05c-1.2,5.48-6.19,8.79-13.3,8.79C278.45,37.57,272.88,32.57,272.88,24.8Z"
          />
          <path
            class="cls-1"
            d="M302.42,24.85c0-7.92,5.81-12.72,14.35-12.72s14.31,4.8,14.31,12.72-5.81,12.72-14.31,12.72S302.42,32.72,302.42,24.85Zm22.22,0c0-5.28-3-8.16-7.87-8.16s-7.92,2.88-7.92,8.16,3,8.16,7.92,8.16S324.64,30.08,324.64,24.85Z"
          />
          <path
            class="cls-1"
            d="M360.61,26.38H339.15c.24,4,3.36,6.63,8.36,6.63,3.64,0,6.38-1.49,7.87-4.18L360.23,31c-2.4,4.22-6.87,6.53-13,6.53-8.79,0-14.17-4.56-14.17-12.48,0-8.16,5.43-13,13.93-13s13.58,4.36,13.58,12Zm-6.14-4.13c-.05-3.93-3.08-6.19-7.54-6.19-4.66,0-7.54,2.45-7.78,6.43h15.32Z"
          />
        </svg>
      </GridLayout>
    </Hero>

    <FeaturedProjectCard projects={filteredProjects} />

    {/* <Hero>
      <>{RichText.render(home.hero_title)}</>
      <a
        href={home.hero_button_link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>{RichText.render(home.hero_button_text)}</Button>
      </a> */}
    {/* </Hero> */}

    <Section>
      <ProjectGrid categories={categories} projects={projects} />
    </Section>
    {/* <Section>
      {RichText.render(home.about_title)}
      <About bio={home.about_bio} socialLinks={home.about_links} />
    </Section> */}
  </>
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
  console.log(categoriesUnique + "categories")
  // const categories = projects.reduce((uniqueCategories, project) => {
  //   if (!uniqueCategories.indexOf(project.node.project_category)) {
  //     uniqueCategories.push(project.node.project_category)
  //   }
  //   console.log(project.node.project_category)
  //   console.log(uniqueCategories)
  //   return uniqueCategories
  // }, [])

  if (!doc || !projects) return null

  return (
    <Layout>
      <RenderBody
        home={doc.node}
        projects={projects}
        meta={meta}
        categories={categoriesUnique}
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
      allProjects(sortBy: project_post_date_ASC) {
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
