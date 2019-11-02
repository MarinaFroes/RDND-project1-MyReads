import React from 'react'
import dropdown from '../icons/dropdown.svg'

function Book({ book }) {
  return (
    <div className='book-info'>
      <div className='cover-container'>
        <img src={book.imageLinks.smallThumbnail} alt='' />
        <img src={`${dropdown}`} alt='' className='dropdown-icon' />
      </div>
      
      <h2 className='book-title'>{book.title}</h2>
      {/* {book.subtitle && <p>Subtitle: {book.subtitle}</p>} */}
      <p>Authors: {book.authors}</p>
      <p>Rate: {book.averageRating || "No rating"}</p>
      <p>Shelf: {book.shelf}</p>
    </div>
  )
}

export default Book
