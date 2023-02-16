import {INCR,DECR } from '../redux/Product/Product.action'

    //reducer is a pure function , it will take 2 arguments state,action
let initialState={
    name:"Samsung F23",
    image:"https://www.91-img.com/gallery_images_uploads/7/b/7b87cea11114aeef52bbe5408dce1c30e2c3dc00.JPG?tr=h-550,w-0,c-at_max",
    price:15000,
    qty:1
}
let productReducer =(state=initialState,action)=>{
    console.log(action.type)
    switch(action.type){
        case INCR:
            return {...state, qty:state.qty +1}
        case DECR:
            return {...state,qty:state.qty -1}
        default:
            return state

    }
 }
 export {productReducer}