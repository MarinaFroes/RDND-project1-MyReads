import React from 'react'
import Books from './Books'

function Shelf({ shelf, booksList }) {

  return (
    <div className='shelf'>
      <h1>{shelf}</h1>
      <div className='books-container'>
        <Books booksList={booksList} />
      </div>
    </div>
  )
}

export default Shelf;