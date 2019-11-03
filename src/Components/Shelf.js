import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { SHELVES_TYPES } from '../utils/SHELVES_TYPES'

function Shelf({ showingBooks, onUpdateBook }) {
  return (
    <section>
      {
        SHELVES_TYPES.map( shelf => (
          <div key={shelf[1]} className='shelf'>
            <h1 className='shelf-title'>{shelf[0]}</h1>
            <div className='books-container'>
              {showingBooks.filter(book => book.shelf === shelf[1]).map(book => <Book key={book.id} book={book} onUpdateBook={onUpdateBook}/>)}
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
  showingBooks: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

