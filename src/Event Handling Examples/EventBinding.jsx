import React, { Component } from 'react'

export class EventBinding extends Component {
    state={
        salary:50000,
    }
    inputHandler=(value)=>{
        this.setState({salary:50000+value })
    }
  render() {
    return (
      <div>
      <h1>EventBinding</h1>
      <h2>Salary:{this.state.salary}</h2>
      <button onClick={this.inputHandler.bind(this,5000)}>Hike 5k</button>
      <button onClick={this.inputHandler.bind(this,10000)}>Hike 10k</button>
      <button onClick={this.inputHandler.bind(this,0)}>Hike 0</button>
      </div>
    )
  }
}

export default EventBinding
