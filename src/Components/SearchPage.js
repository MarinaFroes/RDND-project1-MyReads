import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import Book from './Book'

function SearchPage({query, onUpdateQuery, onClearQuery, showingBooks, onUpdateBook}) {
  return (
    <main className='search-page'>
      <SearchBar
        query={query}
        onUpdateQuery={onUpdateQuery}
        onClearQuery={onClearQuery}
      /> 
      <div className='results-message'>
        <p>Found <strong>{showingBooks.length || 0}</strong> results.</p>
      </div>
      
      {showingBooks.length > 0 && (   
        <div className='show-search-results'>
          {showingBooks.map(book =>
            (<Book
              key={book.id}
              book={book}
              onUpdateBook={onUpdateBook}
              currentShelf='none'
            />)
          )}
        </div>
      ) 
      }
    </main>
  )
}

export default SearchPage

SearchPage.propTypes = {
  query: PropTypes.string.isRequired,
  onUpdateQuery: PropTypes.func.isRequired,
  onClearQuery: PropTypes.func.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  showingBooks: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}