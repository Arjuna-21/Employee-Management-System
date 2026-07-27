import React from 'react'
import './SearchBar.css';

function SearchBar({ search, setSearch }) {
  return (
    <div className='search-container'>
        <h2>Search Employee</h2>
        <input className='search-input' type="text" value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default SearchBar