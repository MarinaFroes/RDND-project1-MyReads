import React from 'react'
import PropTypes from 'prop-types'
import { SHELVES_TYPES } from '../utils/SHELVES_TYPES'

function ShelfSelection({ book, onUpdateBook, currentShelf }) {
  return (
    <div className='shelf-selection-container'>
      <select
        className='shelf-selection-menu'
        role="menubar"
        onChange={event => onUpdateBook(book, event.target.value)}
        value={currentShelf}
      >
        {SHELVES_TYPES.map(shelf => ( 
          <option
            key={shelf[1]}
            value={shelf[1]}
            role='menuitem'
          >
            {shelf[0]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ShelfSelection;

ShelfSelection.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired
}