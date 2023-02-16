import React, { Component } from 'react'

export class Namelist extends Component {
    name=["vamsi","ajay","nayak"];
    namesList=this.name.map((name,index)=>
    <h4 key={index}>{index} {name}</h4>)
  render() {
    return (
      <div>
        <h1>Namest Rendering</h1>
        {this.namesList}
      </div>
    )
  }
}

export default Namelist
