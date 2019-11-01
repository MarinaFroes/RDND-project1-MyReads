import React from 'react'

function Books({ booksList }) {
  return (
    <div>
      {
        booksList.map(book => (
          <div key={book.id} className='book-info'>
            <img src={book.imageLinks.smallThumbnail} alt=''/>
            <p>Title: {book.title}</p>
            {book.subtitle && <p>Subtitle: {book.subtitle}</p>}
            <p>Authors: {book.authors}</p>
            <p>Rate: {book.averageRating || "No rating"}</p>
            <p>Shelf: {book.shelf}</p>
          </div>
        ))
      }
   
    </div>
  )
}

export default Books
