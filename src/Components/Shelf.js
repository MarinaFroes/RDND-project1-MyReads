import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function Shelf({ title, shelf, booksList, onUpdateBook }) {
  return (
    <div className='shelf'>
      <h1 className='shelf-title'>{title}</h1>
      <div className='books-container'>
        {booksList.map(book => book.shelf === shelf && <Book key={book.id} book={book} onUpdateBook={onUpdateBook}/>)}
      </div>
    </div>
  )
}

export default Shelf;

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  booksList: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}