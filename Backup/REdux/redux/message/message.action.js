//action is a function return actionable objrcts
//create action types
const GM = "GM";
const GN = "GN";

let gmAction=()=>{
    return {type:GM}
}
let gnAction=()=>{
    return {type:GN}
};
export { gmAction,gnAction,GM,GN}
