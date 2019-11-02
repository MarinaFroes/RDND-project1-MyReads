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
      .then(data => console.log(data))
      // TODO: Update books
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
        <SearchBar
          query={query}
          onUpdateQuery={this.updateQuery}
        />
        <Shelves
          showingBooks={showingBooks}
          onUpdateBook={this.updateBook}
        />
       <AddBar />
        {/* <img src={`${arrowback}`} alt='' style={{ height: '50px', backgroundColor: '#000', borderRadius: '50%'}}/> */}
      </main>
    )
  }
}

export default App;
