import React from 'react'
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
