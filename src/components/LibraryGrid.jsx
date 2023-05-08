import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const LibraryGrid = ({ books }) => (
  <div className="library-grid">
    {books.map(({ node: book }) => (
      <div className="book" key={book._meta.uid}>
        <h3>
          <Link to={`/library/${book._meta.uid}`}>{book.book_title[0].text}</Link>
        </h3>
        <p>Author: {book.author}</p>
        <p>Edition: {book.edition}</p>
        <p>Year of Publish: {book.year_of_publish}</p>
      </div>
    ))}
  </div>
)

LibraryGrid.propTypes = {
  books: PropTypes.array.isRequired,
}

export default LibraryGrid
