import React from 'react'




const Search = props => {
  // let [username , setUsernames] = React.useState(props.item.username);

  // const searchUser = () => {
  //   let search = username;
  //   setUsernames(search)
  // }
  
  return (
  <div className='header'>

<div className='search-logo'>

    <div className='logo'>
    <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
    </div>
    <div className='ig-text'>
    <a href="https://www.instagram.com">Instagram</a>
    </div>
    
 </div> {/* search-logo end */}

 
    <div className='search-bar'>
       <div className='search-link'>
       <form onSubmit={props.search}>
       <input 
            className='input' 
            placeholder='search' 
            type="text" 
            id="site-search"
            onChange={props.search} />
       </form>
       </div> 
    </div>

    <div className='side-icons'>
    
    <div className='compass'>
    <i className="far fa-compass"></i>
    </div>
    <div className='liked'>
    <i className="far fa-heart"></i>
    </div>
    <div className='profile'>
    <i className="far fa-user"></i>
    </div> 
    
    </div> {/* side-icons end */}

   </div>  /* header end */

  )
}

export default Search
