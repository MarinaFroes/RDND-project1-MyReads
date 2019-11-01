import React from 'react'
import Shelf from './Shelf'

const SHELVES_TYPES = [
  'Currently reading',
  'Want to read',
  'Read'
]

function Shelves({ booksList }) {
 
  return (
    <div>
      {
        SHELVES_TYPES.map( shelf => (
          <Shelf shelf={shelf} booksList={booksList} key={shelf}/>
        ))
      }
    </div>
  )
}

export default Shelves
