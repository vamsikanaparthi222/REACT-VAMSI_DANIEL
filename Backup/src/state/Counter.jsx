import React, { Component } from 'react'

export class Counter extends Component {
    state={
        qty:1
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty -1})
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty +1})
    }
  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h4>Quantity:{this.state.qty}</h4>
        <button onClick={this.decrHandler}>DECR</button>
        <button onClick={this.incrHandler}>INCR</button>
      </div>
    )
  }
}

export default Counter
