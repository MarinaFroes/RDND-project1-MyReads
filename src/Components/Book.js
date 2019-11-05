import React from 'react'
import PropTypes from 'prop-types'
import ShelfSelection from './ShelfSelection'

function Book({ book, onUpdateBook, currentShelf }) {
  const dummyCover = 'https://dummyimage.com/128x193/e6e6e6/000.jpg&text=No+image+found';
  let cover;
  (book.imageLinks === undefined) ? cover = dummyCover : cover = `${book.imageLinks.smallThumbnail}`

  return (
    <section className='book-info'>
      <div className='cover-container'>
        <img
          className='cover-img'
          src={cover}
          alt=''
        />
      </div>
      <h2 className='book-title'>{book.title}</h2>
      <p><strong>Authors:</strong> {book.authors ? book.authors.join(', ') : 'author not found'}</p>
      <ShelfSelection
        book={book}
        onUpdateBook={onUpdateBook}
        currentShelf={currentShelf}
      />
    </section>
  )
}

export default Book;

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired
}