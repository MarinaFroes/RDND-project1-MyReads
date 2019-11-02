import React from 'react'
import { SHELVES_TYPES } from '../utils/SHELVES_TYPES'
// import dropdown from '../icons/dropdown.svg'

function DropDown() {
  return (
    <div className='drop-down-menu'>
      {/* <img src={`${dropdown}`} alt='' className='dropdown-icon' /> */}
      {SHELVES_TYPES.map(shelf => ( 
        <p key={shelf[1]} id={shelf[1]}>{shelf[0]}</p>
      ))}
    </div>
  )
}

export default DropDown;
