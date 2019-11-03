import React from 'react'
import PropTypes from 'prop-types'
import DropDown from './DropDown'

function Book({ book, onUpdateBook }) {
  return (
    <section className='book-info'>
      <div className='cover-container'>
        <img
          className='cover-img'
          src={book.imageLinks.smallThumbnail}
          alt=''
        />
      </div>

      <h2 className='book-title'>{book.title}</h2>
      <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
      <DropDown book={book} onUpdateBook={onUpdateBook} />
    </section>
  )
}

export default Book;

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}