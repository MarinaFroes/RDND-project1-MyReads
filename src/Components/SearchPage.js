import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import Book from './Book'

function SearchPage({query, onUpdateQuery, onClearQuery, showingBooks, onUpdateBook}) {
  return (
    <>
      <SearchBar
        query={query}
        onUpdateQuery={onUpdateQuery}
        onClearQuery={onClearQuery}
      /> 
      {showingBooks.length > 0 && (
        <>
          {console.log(showingBooks)}
          <p>Found <strong>{showingBooks.length}</strong> results.</p>
          <div className='show-search-results'>
            {showingBooks.map(book =>
              <Book key={book.id} book={book} onUpdateBook={onUpdateBook} currentShelf='none' />
            )}
          </div>
        </>
      )}
    </>
  )
}

export default SearchPage

SearchPage.propTypes = {
  query: PropTypes.string.isRequired,
  onUpdateQuery: PropTypes.func.isRequired,
  onClearQuery: PropTypes.func.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  showingBooks: PropTypes.array.isRequired
}