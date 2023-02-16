import React, { Component } from 'react'

export class Message extends Component {
    state={
        message:"Hello"
    }
    gmHandler=()=>{
        this.setState({message:"Hello,Good Morning"})
    }
    gnHandler=()=>{
        this.setState({message:"Hello,Good Night"})
    }
  render() {
    return (
      <div>
        <h1>Message Component</h1>
        <h4>Message:{this.state.message}</h4>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gnHandler}>GN</button>
      </div>
    )
  }
}

export default Message
