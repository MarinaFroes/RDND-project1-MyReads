import React from 'react'
import PropTypes from 'prop-types'
import arrowback from '../icons/arrowback.svg'
import { Link } from 'react-router-dom'

function SearchBar({ query, onUpdateQuery }) {
  return (
    <>
      <form>
        <Link to='/'>
          <img
            src={`${arrowback}`}
            alt=''
            className='arrowback-icon'
          />
        </Link>
        <input
          type='text'
          name='search-bar'
          className='search-bar'
          value={query}
          placeholder='Search book title or author...'
          onChange={event => onUpdateQuery(event.target.value)}
        />
      </form>
      <p>{query}</p>
    </>
  )
}

export default SearchBar;

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onUpdateQuery: PropTypes.func.isRequired
}
