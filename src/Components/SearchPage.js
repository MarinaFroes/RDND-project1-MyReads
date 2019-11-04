import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'

function SearchPage({query, onUpdateQuery, onClearQuery}) {
  return (
    <SearchBar
      query={query}
      onUpdateQuery={onUpdateQuery}
      onClearQuery={onClearQuery}
    /> 
  )
}

export default SearchPage

SearchPage.propTypes = {
  query: PropTypes.string.isRequired,
  onUpdateQuery: PropTypes.func.isRequired,
  onClearQuery: PropTypes.func.isRequired
}