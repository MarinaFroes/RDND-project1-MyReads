import React from 'react'
import PropTypes from 'prop-types'
import { SHELVES_TYPES } from '../utils/SHELVES_TYPES'
// import dropdown from '../icons/dropdown.svg'

function DropDown({ book, onUpdateBook }) {
  return (
    <ul className='drop-down-menu' role="menubar">
      {/* <img src={`${dropdown}`} alt='' className='dropdown-icon' /> */}
      {SHELVES_TYPES.map(shelf => ( 
        <li
          key={shelf[1]}
          id={shelf[1]}
          role='menuitem'
          onClick={() => onUpdateBook(book, shelf[1])}
        >
          {shelf[0]}
        </li>
      ))}
    </ul>
  )
}

export default DropDown;

DropDown.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}