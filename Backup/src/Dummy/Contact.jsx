import React, { Component } from 'react'

export class Contact extends Component {
  constructor(){
    super()
    this.state={
      contacts:[]
    }
  }
  render() {
    return (
      <div>
      <h1>Contact Component</h1>
      <div className="container">
      <div className="row">
      <div className="col-md-8"></div>
      <div className="col-md-4"></div>
      </div>
      </div>

      </div>
    )
  }
}

export default Contact
