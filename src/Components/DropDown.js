import React from 'react'
import PropTypes from 'prop-types'
import { SHELVES_TYPES } from '../utils/SHELVES_TYPES'

function DropDown({ book, onUpdateBook }) {
  return (
    <div className='drop-down-container'>
      <select
        className='drop-down-menu'
        role="menubar"
        onChange={event => onUpdateBook(book, event.target.value)}
      >
        {SHELVES_TYPES.map(shelf => ( 
          <option
            key={shelf[1]}
            value={shelf[1]}
            role='menuitem'
            selected={book.shelf === shelf[1]}
          >
            {shelf[0]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropDown;

DropDown.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}