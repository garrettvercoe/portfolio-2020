import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"

import Layout from "components/Layout"
import LibraryGrid from "components/LibraryGrid"
import Header from "components/Header"
import "styles/libraryShowcase.scss"

const RenderBody = ({ books, meta }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        // Add your meta information here
      ].concat(meta)}
    />

    <Header />
    <LibraryGrid books={books} />
  </>
)

export default ({ data }) => {
  const books = data.prismic.allBooks.edges
  const meta = data.site.siteMetadata

  if (!books) return null

  return (
    <Layout>
      <RenderBody books={books} meta={meta} />
    </Layout>
  )
}

RenderBody.propTypes = {
  books: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    prismic {
      allBooks(sortBy: year_of_publish_DESC) {
        edges {
          node {
            book_title
            images {
              _linkType
              ... on PRISMIC__FileLink {
                url
              }
            }
            author
            edition
            description
            read
            year_of_publish
            feature
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
