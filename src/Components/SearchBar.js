import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    userInput: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='search-bar'
          id='search-bar'
          value={this.state.userInput}
          placeholder='Search' />
        <input
          type='submit'
          value='Submit'
          className='input-submit'
        />
      </form>
    )
  }
}

export default SearchBar;

