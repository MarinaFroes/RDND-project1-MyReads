import React from 'react'
import PropTypes from 'prop-types'
import arrowback from '../icons/arrowback.svg'
import { Link } from 'react-router-dom'

function SearchBar({ query, onUpdateQuery, onClearQuery }) {
  return (
    <form>
      <Link to='/'>
        <img
          src={`${arrowback}`}
          alt=''
          className='arrowback-icon'
          onClick={() => onClearQuery()}
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
  )
}

export default SearchBar;

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onUpdateQuery: PropTypes.func.isRequired,
  onClearQuery: PropTypes.func.isRequired
}
