import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function Shelf({ title, shelf, showingBooks, onUpdateBook }) {
  return (
    <div className='shelf'>
      <h1 className='shelf-title'>{title}</h1>
      <div className='books-container'>
        {showingBooks.map(book => book.shelf === shelf && <Book key={book.id} book={book} onUpdateBook={onUpdateBook}/>)}
      </div>
    </div>
  )
}

export default Shelf;

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  showingBooks: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}