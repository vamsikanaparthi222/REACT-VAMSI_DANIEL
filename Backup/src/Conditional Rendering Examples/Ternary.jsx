
//it approach keeps the code simple and readble
import React, { Component } from 'react'

export class Ternary extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedin:false
    }
  }
  render() {
    <div><h1>Ternary Rendering</h1></div>
    return ( 
      this.state.isLoggedin?(
      <div>Hello, Good Afternoon Vamsi_Daniel</div>
    ):( <div>Hello, Good Evening Vamsi_Daniel</div>)      
    )
  }
}

export default Ternary
