import React from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'
import { SHELVES_TYPES } from '../utils/SHELVES_TYPES'

function Shelves({ showingBooks, onUpdateBook }) {
  return (
    <section>
      {
        SHELVES_TYPES.map( shelf => (
          <Shelf 
            title={shelf[0]} 
            shelf={shelf[1]} 
            showingBooks={showingBooks} 
            key={shelf} 
            onUpdateBook={onUpdateBook}
          />
        ))
      }
    </section>
  )
}

export default Shelves

Shelves.propTypes = {
  showingBooks: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}