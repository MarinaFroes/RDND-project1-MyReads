import React from 'react'
import Shelf from './Shelf'
import SearchIcon from './SearchIcon'
import PropTypes from 'prop-types'

function MainPage({ showingBooks, onUpdateBook }) {
  return (
    <main>
      <Shelf
        showingBooks={showingBooks}
        onUpdateBook={onUpdateBook}
      />
      <SearchIcon />
    </main>
  )
}

export default MainPage;

MainPage.propTypes = {
  onUpdateBook: PropTypes.func.isRequired,
  showingBooks: PropTypes.array.isRequired
}