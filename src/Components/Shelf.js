import React from 'react'
import Book from './Book'

function Shelf({ title, shelf, booksList }) {
  return (
    <div className='shelf'>
      <h1 className='shelf-title'>{title}</h1>
      <div className='books-container'>
        {booksList.map(book => book.shelf === shelf && <Book key={book.id} book={book} />)}
      </div>
    </div>
  )
}

export default Shelf;