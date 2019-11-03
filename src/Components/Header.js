import React from 'react'
import PropTypes from 'prop-types'
import { FaBookReader } from 'react-icons/fa'

function Header({ title }) {
  return (
    <header>
      <div className='header-icon'><FaBookReader /></div>
      
      <h1>{title}</h1>
    </header>
  )
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired
}