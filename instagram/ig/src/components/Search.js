import React from 'react'

const Search = props => {
  return (
<div className='search-bar'>

    <div className='logo'>
        <i class="fab fa-instagram"></i>
    </div>
    <div className='ig-text'>
        <h1>instagram</h1>
    </div>
    <div className='side-icons'>
    <div className='compass'>
    <i class="far fa-compass"></i>
    </div>
    <div className='liked'>
    <i class="far fa-heart"></i>
    </div>
    <div className='profile'>
    <i class="fas fa-user"></i>
    </div>
    
    </div> {/* search-bar end */}

    
</div>
  )
}

export default Search