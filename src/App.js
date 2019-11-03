import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import Shelves from './Components/Shelves'
import SearchIcon from './Components/SearchIcon'
// import arrowback from './icons/arrowback.svg'
import SearchPage from './Components/SearchPage'
import Header from './Components/Header'
import Footer from './Components/Footer'

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
      <div className='App'>
        <Header title='MyReads' />
        <Route
          exact
          path='/'
          render={() => (
            <main>
              <Shelves
                showingBooks={showingBooks}
                onUpdateBook={this.updateBook}
              />
              <SearchIcon />
            </main>
          )}
        />
        <Route
          exact
          path='/search'
          render={() => (
            <SearchPage
              query={query}
              onUpdateQuery={this.updateQuery}
            />
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
