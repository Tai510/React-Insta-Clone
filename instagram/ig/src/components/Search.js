import React from 'react';
import styled from 'styled-components';

/* styled components start */

const Header = styled.div `
  display: flex;
  justify-content: space-evenly;
  background-color: #E83A87;
  color: white;
  border-radius: 5px;
  width: 1400px;
  margin-left: 20px;
  height: 80px;
`;

const SearchLogo = styled.div `
  display: flex;
`;

const Logo = styled.div `
  margin-top: 10px;
`;

const Icons = styled.a `
  font-size: 35px;
  border-right: 1px solid black;
  margin-left: 30px;
  padding-right: 30px;
  color: white;
  height: 90px;
  text-shadow: 1px 1px 2px black;
`;

const Igtext = styled.div `
  text-decoration: none;
  color: black;
  margin-left: 20px;
  font-size: 15px;
  margin-bottom: 70px;
`;

const IGfont = styled.p `
  font-family: 'Pacifico', cursive;
  font-size: 30px;
  margin: 0;
  margin-top: 5px;
  font-weight: bolder;
  color: white;
  text-shadow: 1px 1px 2px black;
`;

const Searchlink = styled.div `
  padding-top: 15px;
`;

const Input = styled.input `
  height: 30px;
  width: 170px;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 15px;
  text-align: center;
  font-weight: bolder;
`;

const SocialIcons = styled.div `
  display: flex;
  padding-top: 15px;
  font-size: 30px;
  margin-right: 30px;
`;

const Socialpadding = styled.div `
  padding-right: 20px; 
  text-shadow: 1px 1px 2px black;   
`;

/* styled components start */


const Search = props => {
  
  return (
  <Header>

<SearchLogo>

    <Logo>
    <Icons href="https://www.instagram.com"><i className="fab fa-instagram"></i></Icons>
    </Logo>
    <Igtext>
    <IGfont>Instagram</IGfont>
    </Igtext>
    
 </SearchLogo> {/* search-logo end */}

 
    <div>
       <Searchlink>
       <form onSubmit={props.search}>
       <Input  
            placeholder='search' 
            type="text" 
            id="site-search"
            onChange={props.search} />
       </form>
       </Searchlink> 
    </div>

    <SocialIcons>
    
    <Socialpadding>
    <i className="far fa-compass"></i>
    </Socialpadding>
    <Socialpadding>
    <i className="far fa-heart"></i>
    </Socialpadding>
    <Socialpadding>
    <i className="far fa-user"></i>
    </Socialpadding> 
    
    </SocialIcons> {/* side-icons end */}

   </Header>  /* header end */

  )
}

export default Search
