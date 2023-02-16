import {createStore} from "react-redux"
import { rootReducer } from "./rootREducer";
import {composeWithDevTools} from "redux-devtools-extension";
let store=createStore(rootReducer,omposeWithDevTools());
export {store}