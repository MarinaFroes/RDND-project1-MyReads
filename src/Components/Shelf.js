import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { SHELVES_TYPES } from '../utils/SHELVES_TYPES'

function Shelf({ books, onUpdateBook }) {
  return (
    <section>
      {
        SHELVES_TYPES.filter(shelf => shelf[1] !== 'none').map(shelf => (
            <div key={shelf[1]} className='shelf'>
              <h1 className='shelf-title'>{shelf[0]}</h1>
              <div className='books-container'>
                {
                books.filter(book => book.shelf === shelf[1]).map(book => (
                  <Book
                    key={book.id}
                    book={book}
                    onUpdateBook={onUpdateBook}
                    currentShelf={shelf[1]}
                  />
                ))
                }
              </div>
            </div>
          )
        )
      }
    </section>
  )
}

export default Shelf;

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

