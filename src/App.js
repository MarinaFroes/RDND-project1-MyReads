import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import Shelves from './Components/Shelves'
import SearchIcon from './Components/SearchIcon'
// import arrowback from './icons/arrowback.svg'
import SearchPage from './Components/SearchPage'
import Header from './Components/Header'

class App extends Component {
  state = {
    books: [],
    query: ''
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
  }

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.updateQuery('')
  }

  render() {
    const { query, books } = this.state

    const showingBooks = query === ''
      ? books
      : books.filter(b => (
        b.title.toLowerCase().includes(query.toLowerCase()) || b.authors.join('').toLowerCase().includes(query.toLowerCase())
      ))

    return (
      <main className='App'>
        <Header title='MyReads' />
        {/* <SearchPage
          query={query}
          onUpdateQuery={this.updateQuery}
        /> */}
        <Shelves
          showingBooks={showingBooks}
          onUpdateBook={this.updateBook}
        />
       <SearchIcon />
        {/* <img src={`${arrowback}`} alt='' style={{ height: '50px', backgroundColor: '#000', borderRadius: '50%'}}/> */}
      </main>
    )
  }
}

export default App;
