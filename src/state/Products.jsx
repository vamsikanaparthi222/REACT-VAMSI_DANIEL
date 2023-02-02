import React, { Component } from 'react'

class Products extends Component {
    state={
        product_Name:"SAMSUNG Galaxy F23 5G (Forest Green, 128 GB)  (6 GB RAM)",
        price:16999,
        image:"https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/p/z/-original-imagcg22pf79cgau.jpeg?q=70",
        Qty:1
    }
    decrHandler=()=>{
        this.setState({Qty:this.state.Qty -1})
    }
    incrHandler=()=>{
        this.setState({Qty:this.state.Qty +1})
    }
  render() {
    return (
        
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-10">
        <table className="table table-hover">
        <thead className="bg-info">
        <th>Product Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Total Price</th>
        </thead>
        <tbody>
        <tr>
        <td>{this.state.product_Name}</td>
        <td><img src={this.state.image} alt="" height="50px"/></td>
        <td>{this.state.price}</td>
        <td><i class="fa fa-minus-circle" onClick={this.decrHandler}></i>
        {this.state.Qty}
        <i className="fa fa-plus-circle" onClick={this.incrHandler} ></i>

        </td>
        <td>{this.state.price * this.state.Qty}</td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
        
    )
  }
}

export default Products
