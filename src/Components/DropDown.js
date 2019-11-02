import React from 'react'
import { SHELVES_TYPES } from '../utils/SHELVES_TYPES'
// import dropdown from '../icons/dropdown.svg'

function DropDown() {
  return (
    <ul className='drop-down-menu' role="menubar">
      {/* <img src={`${dropdown}`} alt='' className='dropdown-icon' /> */}
      {SHELVES_TYPES.map(shelf => ( 
        <li
          key={shelf[1]}
          id={shelf[1]}
          role='menuitem'
        >
          {shelf[0]}
        </li>
      ))}
    </ul>
  )
}

export default DropDown;
