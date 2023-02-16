import React from 'react'
import {INCR,DECR, incrAction,decrAction } from '../redux/Product/Product.action'
import {useDispatch} from "rect-redux"

const Product = () => {
  let dispatch=useDispatch()
  let Product={
    name:"Samsung F23",
    image:"https://www.91-img.com/gallery_images_uploads/7/b/7b87cea11114aeef52bbe5408dce1c30e2c3dc00.JPG?tr=h-550,w-0,c-at_max",
    price:15000,
    qty:1
  }
  let decrHandler=()=>{
    dispatch(decrAction)
    
  }
  let incrHandler=()=>{
    dispatch(incrAction)
  }
  return (
    <div className="container mt-5">
    <div className="row">
    <div className="col-md-6">
    <table className='table table-hover'>
    <thead className='bg-primary text-white'>
    <tr>
    <th>Name</th>
    <th>Image</th>
    <th>Price</th>
    <th>Qty</th>
    <th>Total</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>{Product.name}</td>
    <td><img src={Product.image} alt="" height="50px"/></td>
    <td>{Product.price}</td>
    <td><i className='fa fa-minus-circle' onClick={decrHandler}></i>{Product.qty}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
    <td>{Product.qty* Product.price}</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </div>
  )
}

export default Product
