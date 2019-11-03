import React from 'react'
import { Link } from 'react-router-dom'

function SearchIcon() {
  return (
    <Link
      to='/search'
    >
      <div className='search-icon'></div>
    </Link>
  )
}


export default SearchIcon;
