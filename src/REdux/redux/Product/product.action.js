//Action types
const INCR="INCR"
const DECR="DECR"
let incrAction=()=>{
    //action is a function it return returnable objects
    console.log("First")
    return { type:INCR}
}
let decrAction=()=>{
    return {type:DECR}
}
export {INCR,DECR,incrAction,decrAction}