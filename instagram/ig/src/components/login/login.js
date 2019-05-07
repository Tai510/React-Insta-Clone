import React from 'react'
import './login.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
import styled from 'styled-components';





// styled components start

const LoginPage = styled.div `
    margin-top: 100px;
    text-align: center;
    border: 2px solid black;
    width: 800px;
    height: 500px;
    margin-left: 300px;
    background-color: #E83A87;
`;

const HeaderText = styled.div `
    color: white;
`;

const IgLogo = styled.i `
    font-size: 80px;
    margin-top: 50px;
    text-shadow: 1px 1px 2px black;
`;

const H1 = styled.h1 `
font-family: 'Pacifico', cursive;
font-size: 40px;
text-shadow: 1px 1px 2px black;
`;

const FacebookLine = styled.div `
    color: white;
    display: flex;
    text-align: center;
    margin-left: 313px;
`;

const FacebookP = styled.p `
    text-align: center;
    text-shadow: 1px 1px 2px black;
    font-weight: 300px;
    padding-top: 3px;
`;

const FacebookLogo = styled.div `
    font-size: 30px;
    padding-top: 10px;
    margin-right: 10px;
    text-shadow: 1px 1px 2px black;
    color: white;
`;

const Input = styled.input `
    background-color: #E83A87;
    height: 25px;
    width: 120px;
    border-radius: 10px;
    border: 2px solid white;
    text-align: center;
    opacity: 1; 
`;

const UserName = styled.div `
    margin-bottom: 15px;
    color: white;
`;

const Password = styled.div `
    margin-bottom: 15px;
    color: white;
`;

const Submit = styled.button `
    background-color: #E83A87;
    color: #F8F8F8;
    height: 30px;
    width: 120px;
    border-radius: 10px;
    border: 2px solid white;
    text-shadow: 1px 1px 2px black;
`
const OR = styled.div `
    color: white;
    text-shadow: 1px 1px 2px black;
`

// styled components end




class Login extends React.Component {
    constructor() {
    super();
    this.state = {
        username: '',
        password: ''
    }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleLogin = e => {
       const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return(
        <LoginPage>
            <HeaderText>
            <IgLogo id="ig" className="fab fa-instagram"></IgLogo>
            <H1>Instagram</H1>
            </HeaderText>
            <form> 
                <UserName>
                <Input 
                type='text'
                name='username'
                value={this.state.username}
                placeholder='Username' 
                onChange={this.handleChange}/>
                </UserName>    
                <Password>
                <Input  
                type='text'
                name='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.handleChange}/>   
                </Password>  
            </form>
            <Submit onClick={this.handleLogin}>Log in</Submit>
            <OR className='or'>
                <p>------------------OR------------------</p>
            </OR>
            <FacebookLine className='fb'>
            <FacebookLogo>
            <i class="fab fa-facebook-square"></i>
            </FacebookLogo> 
            <FacebookP>Log in with Facebook</FacebookP>
            </FacebookLine>
            
        </LoginPage> /* loginPage end */
        )
    }
}

export default Login