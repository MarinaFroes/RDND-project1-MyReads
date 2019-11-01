import React from 'react'
import Shelf from './Shelf'

const SHELVES_TYPES = [
  ['Currently Reading','currentlyReading'],
  ['Want to read','wantToRead'],
  ['Read','read']
]

function Shelves({ booksList }) {
  
  return (
    <div>
      {
        SHELVES_TYPES.map( shelf => (
          <Shelf title={shelf[0]} shelf={shelf[1]} booksList={booksList} key={shelf}/>
        ))
      }
    </div>
  )
}

export default Shelves
