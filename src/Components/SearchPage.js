import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import Book from './Book'

function SearchPage({ query, onUpdateQuery, onClearQuery, searchedBooks, books, onUpdateBook }) {
  return (
    <main className="search-page">
      <SearchBar
        query={query}
        onUpdateQuery={onUpdateQuery}
        onClearQuery={onClearQuery}
      />
      <div className="results-message">
        <p>
          Found <strong>{searchedBooks.length || 0}</strong> results.
        </p>
      </div>

      {searchedBooks.length > 0 && (
        <div className="show-search-results">
          {
            searchedBooks.map(searchedBook => {
              
              books.map(book => {
                  if (book.id === searchedBook.id) {
                    searchedBook.shelf = book.shelf
                  }
              }) 
              
              return (
                <Book
                  key={searchedBook.id}
                  book={searchedBook}
                  onUpdateBook={onUpdateBook}
                  currentShelf={searchedBook.shelf || "none"}
                />
              )
            })
          }
        </div>
      )}
    </main>
  )
}

export default SearchPage

SearchPage.propTypes = {
  query: PropTypes.string.isRequired,
  onUpdateQuery: PropTypes.func.isRequired,
  onClearQuery: PropTypes.func.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  searchedBooks: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
  books: PropTypes.array.isRequired
}