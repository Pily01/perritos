import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import AuthService from './auth-service';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { name: '', password: '', email: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email
    const password = this.state.password;
  
    this.service.signup(name, password, email)
    .then( response => {
        this.setState({
            username: "",
            email: "",
            password: "",
        });
         this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
        <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <label>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Signup" />
        </form>
  
        <p>Already have account? 
            <Link to={"/login"}> Login</Link>
        </p>
  
      </div>
    )
  }
}

export default Signup;

