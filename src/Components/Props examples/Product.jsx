import React, { Component } from 'react'
import Cart from './Cart'

class Product extends Component {
    product_Name="samsung f23 5g"
    produt_Price=15000
    Product_Color="Skyblue"
    colors=['Gray','white','red','gold']
  render() {
    return (
      <div>
        <h1>Product Component</h1>
        <h5>hello products</h5><hr/>
        <Cart name={this.product_Name}
        price={this.produt_Price}
        color={this.Product_Color}
        colors={this.colors}/>
      </div>
    )
  }
}

export default Product
