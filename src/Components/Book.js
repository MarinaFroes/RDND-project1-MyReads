// import React from 'react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dropdown from '../icons/dropdown.svg'
import DropDown from './DropDown'


class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  state = {
    isClicked: false
  }

  render() {
    const { book, onUpdateBook } = this.props;

    return (
      <div className='book-info'>
        <div className='cover-container'>
          <img
            className='cover-img'
            src={book.imageLinks.smallThumbnail}
            alt=''
          />
          <img
            src={`${dropdown}`}
            alt=''
            className='dropdown-icon'
            onClick={() => this.setState({ isClicked: !this.state.isClicked })}
          />
          {this.state.isClicked && <DropDown book={book} onUpdateBook={onUpdateBook}/>}
        </div>

        <h2 className='book-title'>{book.title}</h2>
        {/* {book.subtitle && <p>Subtitle: {book.subtitle}</p>} */}
        <p><strong>Authors:</strong> {book.authors}</p>
        {/* <p><strong>Rate:</strong> {book.averageRating || "No rating"}</p> */}
        <p>Shelf: {book.shelf}</p>
      </div>
    )
  }
}

// function Book({ book, onUpdateBook }) {
//   return (
//     <div className='book-info'>
//       <div className='cover-container'>
//         <img src={book.imageLinks.smallThumbnail} alt='' />
//         <img src={`${dropdown}`} alt='' className='dropdown-icon' onClick={onUpdateBook} />
//         <DropDown />
//       </div>
      
//       <h2 className='book-title'>{book.title}</h2>
//       {/* {book.subtitle && <p>Subtitle: {book.subtitle}</p>} */}
//       <p><strong>Authors:</strong> {book.authors}</p>
//       <p><strong>Rate::</strong> {book.averageRating || "No rating"}</p>
//       <p>Shelf: {book.shelf}</p>
//     </div>
//   )
// }

export default Book;
