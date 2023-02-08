import React, { Component } from 'react'

export class EventHandling extends Component {
    state={
        counter:0,
    }
    incrHandler=()=>{
        this.setState({counter:this.state.counter +1})
    }
    decrHandler=()=>{
        this.setState({counter:this.state.counter -1})
    }
  render() {
    return (
      <div>
        <h1>Event Handling</h1>
        <h2>Counter Value:{this.state.counter}</h2>
        <button className="btn btn-primary" onClick={this.decrHandler}>DECR</button>
        <button className="btn btn-success" onClick={this.incrHandler}>INCR</button>
      </div>
    )
  }
}

export default EventHandling
