import React from 'react'

const Search = props => {
  return (
  <div className='header'>

<div className='search-logo'>

    <div className='logo'>
    <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
    </div>
    <div className='ig-text'>
    <a href="https://www.instagram.com">Instagram</a>
    </div>
    
 </div> {/* search-bar end */}
    
    <div className='search-bar'>
       <div className='search-link'>
       <input className='input' placeholder='search' type="text" id="site-search" aria-label="Search through site content"/>
       </div> 
    </div>


    <div className='side-icons'>
    
    <div className='compass'>
    <i class="far fa-compass"></i>
    </div>
    <div className='liked'>
    <i class="far fa-heart"></i>
    </div>
    <div className='profile'>
    <i class="far fa-user"></i>
    </div> 
    
    </div> {/* side-icons end */}

   </div>  /* header end */

  )
}

export default Search
