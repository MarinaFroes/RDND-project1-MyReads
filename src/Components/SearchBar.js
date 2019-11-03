import React from 'react'
import PropTypes from 'prop-types'
import arrowback from '../icons/arrowback.svg'
import { Link } from 'react-router-dom'

function SearchBar({ query, onUpdateQuery }) {
  return (
    <>
      <form>
        <Link to='/'>
          <img
            src={`${arrowback}`}
            alt=''
            className='arrowback-icon'
          />
        </Link>
        <input
          type='text'
          name='search-bar'
          id='search-bar'
          value={query}
          placeholder='Search book title or author...'
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
