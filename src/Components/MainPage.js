import React from 'react'
import Shelf from './Shelf'
import SearchIcon from './SearchIcon'
import PropTypes from 'prop-types'

function MainPage({ books, onUpdateBook }) {
  return (
    <main>
      <Shelf books={books} onUpdateBook={onUpdateBook} />
      <SearchIcon />
    </main>
  )
}

export default MainPage;

MainPage.propTypes = {
  onUpdateBook: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}