import React, { Component } from 'react'

export class Ifelse extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedin:false,
        }
    }
  render() {
    let message;
    if(this.state.isLoggedin){
        message=<div>Hello, Good Morning  Vamsi_Daniel</div>;
    }else{
        message=<div>Hello, Good Night Vamsi_Daniel</div>
    }
    return (
      <div>
      <h1>Ifelse Conditional rendering</h1>
        {message}
      </div>
    )
  }
}

export default Ifelse
