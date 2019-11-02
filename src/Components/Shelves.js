import React from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'
import { SHELVES_TYPES } from '../utils/SHELVES_TYPES'

function Shelves({ booksList, onUpdateBook }) {
  return (
    <div>
      {
        SHELVES_TYPES.map( shelf => (
          <Shelf 
            title={shelf[0]} 
            shelf={shelf[1]} 
            booksList={booksList} 
            key={shelf} 
            onUpdateBook={onUpdateBook}
          />
        ))
      }
    </div>
  )
}

export default Shelves

Shelves.propTypes = {
  booksList: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}