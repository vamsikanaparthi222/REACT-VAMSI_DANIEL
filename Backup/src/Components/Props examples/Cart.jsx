import React, { Component } from 'react'

export class Cart extends Component {
  render() {
    return (
      <div>
      <h1>Cart Component</h1>
      <pre>{JSON.stringify(this.props)}</pre>

        <h4>Product :{this.props.name}</h4>
        <h4>Price:{this.props.price}</h4>
        <h4>Color:{this.props.color}</h4>
        <h4>Colors:{this.props.colors[2]}</h4>
      </div>
    )
  }
}

export default Cart
