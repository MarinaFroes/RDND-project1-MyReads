import React from 'react'
import PropTypes from 'prop-types'
import { FaBookReader } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header({ title }) {
  return (
    <header>
      <div className='header-icon'><FaBookReader /></div>
      <Link to='/' className='app-title'>
        <h1>{title}</h1>
      </Link>
    </header>
  )
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired
}