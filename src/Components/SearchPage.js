import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'

function SearchPage({query, onUpdateQuery}) {
  return (
    <>
      <SearchBar
        query={query}
        onUpdateQuery={onUpdateQuery}
      /> 
    </>
  )
}

export default SearchPage

SearchPage.propTypes = {
  query: PropTypes.object.isRequired,
  onUpdateQuery: PropTypes.func.isRequired
}