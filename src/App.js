import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import Shelves from './Components/Shelves'

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

  render() {
    return (
      <div>
        <h1>MyReads</h1>
        <Shelves booksList={this.state.books}/>
      </div>
    )
  }
}

export default App;
