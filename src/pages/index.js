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
import ProjectCard from "components/ProjectCard"
import FeaturedProjectCard from "components/FeaturedProjectCard"
import Masonry from "react-masonry-component"
import "styles/projectShowcase.scss"

const Hero = styled("div")`
  padding-left: 5%;
  padding-right: 5%;
  background-color: ${colors.grey100};
  margin-bottom: 8em;
`

const filters = { marginLeft: "5%", marginBottom: "5em" }

const col = {
  width: `${100 / 3}%`,
  paddingRight: "5%",
}

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
const AboutSelf = styled("div")`
  text-align: center;
  font-size: 1.25rem;
  max-width: 700px;
  padding: 6em 0 6em 0;
  margin: 0 auto;
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

const ConsoleLog = ({ children }) => {
  console.log(children)
  return false
}

const masonryOptions = {
  horizontalOrder: true,
}
const RenderBody = ({ home, projects, meta, categories }) => (
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
    <Hero>
      <FeaturedProjectCard />
      <AboutSelf>
        Garrett Vercoe is a product designer using data to solve problems in the
        community.
      </AboutSelf>
    </Hero>
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
      <Masonry style={filters}>
        <div style={col}>
          <h2>Projects</h2>
        </div>
        <div style={col}>
          <h5>By Tag</h5>
          {categories.map(category => (
            <div>{category}</div>
          ))}
          {/* <h3>All / Architecture / Data / Fabrication / Web / Development</h3> */}
        </div>
        <div style={col}></div>
      </Masonry>
      <Masonry options={masonryOptions} className="showcase">
        {projects.map((project, i) => (
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
      </Masonry>
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

  let categories = projects.map(
    project => project.node.project_category[0].text
  )
  const categoriesSet = new Set(categories)
  const categoriesUnique = [...categoriesSet]
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
