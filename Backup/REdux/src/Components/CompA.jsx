//component means own component
//reusable user interface
// props is stands for proprty 
//props is a communication b/w 2 components
//sending data one component to another component
//passing variable,array,object,number as a proprty 
import React from "react";
import CompB from "./CompB";
function CompA(){
    let a=100
    let b=200
    return <div>
    <h1>Component A</h1>
    <h5>hello gm</h5><hr/>
    <CompB  prop1={a} prop2={b}/>
    </div>
}
export default CompA