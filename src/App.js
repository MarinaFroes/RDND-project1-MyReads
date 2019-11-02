import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import Shelves from './Components/Shelves'
import AddBar from './Components/AddBar'
// import arrowback from './icons/arrowback.svg'
import SearchBar from './Components/SearchBar'
import Header from './Components/Header'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState(() => ({
          books
        }))
      })
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf)
      .then(books => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <main className='App'>
        <Header title='MyReads' />
        <SearchBar />
        <Shelves booksList={this.state.books} onUpdateBook={this.updateBook}/>
       <AddBar />
        {/* <img src={`${arrowback}`} alt='' style={{ height: '50px', backgroundColor: '#000', borderRadius: '50%'}}/> */}
      </main>
    )
  }
}

export default App;
