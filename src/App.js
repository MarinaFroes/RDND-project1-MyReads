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
    query: ''
  }

  componentDidMount() {
    this.fetchData()
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.fetchData()
  }

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }))
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
              />
              {
                query !== '' &&
                <Shelf
                showingBooks={showingBooks}
                onUpdateBook={this.updateBook}
                />
              }
            </>
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
