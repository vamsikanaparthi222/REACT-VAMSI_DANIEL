import { GM,GN } from "./message.action";
let initialState={
    message:"Hello",
}
let messageReducer =(state=initialState,action)=>{
    console.log(action.type);
    switch(action.type){
        case GM:
            return {message:"Hello Good Morning"}
        case GN:
            return{message:"Hello Good Night"}
        default:
            return state;
        }

    
}
export {messageReducer};