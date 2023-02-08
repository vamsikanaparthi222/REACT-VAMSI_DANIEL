import React, { Component } from 'react'

export class Login extends Component {
    state={
        email:"",
        pasword:""

    }
    emailHandler=()=>{
        this.setState({email:this.state.email})
    }
    passwordHandler=()=>{
        this.setState({password:this.state.pasword})
    }
  render() {
    return (
      <div>
        <form>
        <label >Email: </label>
        <input type="text" placeholder='Email Id' onClick={this.emailHandler} /><br /><br />
        <label >Password: </label>
        <input type="password" placeholder="Password" onClick={this.passwordHandler} /><br /><br />
        <input type="submit" placeholder="Login" />
        </form>
      </div>
    )
  }
}

export default Login
