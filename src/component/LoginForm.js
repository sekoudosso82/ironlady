import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://ironladyback.herokuapp.com/api/v1/login", {
    // fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(response => {
      //set user to state
      //redirect!
      if (response.errors){
        alert(response.errors)
      } else {
        // this.props.history.push("/items")
        this.props.setUser(response)
      }
    })
    this.setState({
        username: "",
        password: ""
      })

  }

  render(){
    return (

      <form className="loginForm" onSubmit={this.handleSubmit}>

                    <h1 className="loginMessage"> Hi {this.state.username}</h1>
                    <input className="loginFormInput" placeholder="username" name="username" 
                      value={this.state.username} 
                      onChange={this.handleChange}placeholder="username"/>
                    <br></br>
                    <br></br>
                    <input className="loginFormInput" placeholder="password" name="password" 
                        value={this.state.password} type="password"  
                        onChange={this.handleChange}placeholder="password"/>
           
                  <br></br>
                 
                      <button className="loginFormInput" type="submit">Log In</button>

              <Link className="loginFormInput" to="/signup"><button >NEW USER SIGN UP</button></Link>

      </form>
    
    )
  }
  
}

export default LoginForm
