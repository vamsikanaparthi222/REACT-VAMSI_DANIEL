//why it is using suppose you have multiple reducers 
import { productReducer } from "./Product/Product.reducer";
import {combineReducers} from "redux"
let rootReducer=combineReducers({Product:productReducer});
export {rootReducer}