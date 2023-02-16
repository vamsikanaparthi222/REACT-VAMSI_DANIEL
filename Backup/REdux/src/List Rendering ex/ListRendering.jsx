import React, { Component } from 'react'

export class ListRendering extends Component {
    names=["vamsi","ajay","nayak"];
  render() {
    return (
      <div>
      <h1>List Rendering</h1>
        {this.names.map((name)=>(
            <h4>{name}</h4>
    ))}
      </div>
    )
  }
}

export default ListRendering
