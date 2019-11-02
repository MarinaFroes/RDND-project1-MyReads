import React from 'react'
import PropTypes from 'prop-types'
import magnifyingglass from '../icons/magnifyingglass.svg'

function SearchBar({ query, onUpdateQuery }) {
  return (
    <>
      <form>
        <img
          src={`${magnifyingglass}`}
          alt=''
          className='magnifying-glass-icon'
        />
        <input
          type='text'
          name='search-bar'
          id='search-bar'
          value={query}
          placeholder='Search book title...'
          onChange={event => onUpdateQuery(event.target.value)}
        />
      </form>
      <p>{query}</p>
    </>
  )
}

// class SearchBar extends Component {
//   static propTypes = {
//     query: PropTypes.string.isRequired,
//     onUpdateQuery: PropTypes.func.isRequired
//   }
//   render() {
//     // const { query } = this.state
//     const { query, onUpdateQuery } = this.props
//     return (
//       <>
//       <form onSubmit={this.handleSubmit}>
//         <img
//           src={`${magnifyingglass}`}
//           alt=''
//           className='magnifying-glass-icon'
//         />
//         <input
//           type='text'
//           name='search-bar'
//           id='search-bar'
//           value={query}
//           placeholder='Search book title...'
//           onChange={event => onUpdateQuery(event.target.value)}
//         />
//         </form>
//         <p>{query}</p>
//       </>
//     )
//   }
// }

export default SearchBar;

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onUpdateQuery: PropTypes.func.isRequired
}
