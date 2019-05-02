import React from 'react'
import './login.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';
 

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
        <div className='loginPage'>
            <div className='header-text'>
            <i className="fab fa-instagram"></i>
            <h1>Instagram</h1>
            </div>
            <form> 
                <div className='username'>
                <input 
                type='text'
                name='username'
                value={this.state.username}
                placeholder='Username' 
                onChange={this.handleChange}/>
                </div>    
                <div className='password'>
                <input  
                type='text'
                name='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.handleChange}/>   
                </div>  
            </form>
            <button className='submit' onClick={this.handleLogin}>Log in</button>
            <div className='or'>
                <p>------------------OR------------------</p>
            </div>
            <div className='fb'>
            <i class="fab fa-facebook-square"></i> 
            <p>Log in with Facebook</p>
            </div>
            
        </div> /* loginPage end */
        )
    }
}

export default Login