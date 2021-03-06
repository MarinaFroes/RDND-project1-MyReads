import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import MainPage from './Components/MainPage'
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
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      })
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() =>
        BooksAPI.get(book.id)
      )
      .then((updatedBook) => {
        this.setState(prevState => ({
          books: [
            updatedBook,
            ...prevState.books.filter(
              filteredBook => filteredBook.id !== book.id
            )
          ]
        }))
      })
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
      .then(searchedBooks => {
        this.setState({
          searchedBooks
        })
      })
  }

  updateQuery = query => {
    this.setState({
      query
    })

    this.updateSearchedBooks(query)
  }

  render() {
    const { query, books, searchedBooks } = this.state

    return (
      <div className='App'>
        <Header title='MyReads' />
        <Route
          exact
          path='/'
          render={() => (
            <MainPage
              books={books}
              onUpdateBook={this.updateBook}
            />
          )}
        />
        <Route
          exact
          path='/search'
          render={() => (
            <SearchPage
              query={query}
              onUpdateQuery={this.updateQuery}
              onClearQuery={this.clearQuery}
              searchedBooks={searchedBooks}
              books={books}
              onUpdateBook={this.updateBook}
            />
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
