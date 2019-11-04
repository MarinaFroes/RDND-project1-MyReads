import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import Shelf from './Components/Shelf'
import SearchIcon from './Components/SearchIcon'
import SearchPage from './Components/SearchPage'
import Header from './Components/Header'
import Footer from './Components/Footer'

class App extends Component {
  state = {
    books: [],
    query: '',
    searchedBooks: []
  }

  componentDidMount() {
    this.fetchData()
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => this.fetchData())
  }

  clearQuery = () => {
    this.updateQuery('')
  }

  updateSearchedBooks = query => {
    query === '' ?
    this.setState({
      searchedBooks: []
    }) :
    BooksAPI.search(query)
      .then(books => {
        this.setState({
          searchedBooks: books
        })
      })
  }

  updateQuery = query => {
    this.setState({
      query
    })

    this.updateSearchedBooks(query)
  }

  fetchData = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          books
        })
      })
  }

  render() {
    const { query, books, searchedBooks } = this.state

    const showingBooks = query === '' ? books : searchedBooks

    return (
      <div className='App'>
        <Header title='MyReads' />
        <Route
          exact
          path='/'
          render={() => (
            <main>
              <Shelf
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
            <>
              <SearchPage
                query={query}
                onUpdateQuery={this.updateQuery}
                onClearQuery={this.clearQuery}
                showingBooks={searchedBooks}
                onUpdateBook={this.updateBook}
              />
            </>
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
