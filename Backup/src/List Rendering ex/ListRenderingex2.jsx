import React, { Component } from 'react'

export class ListRenderingex2 extends Component {
    Persons=[
        {id:196,name:"vamsi",email:"kv@gmail.com",loc:"bangalore"},
        {id:197,name:"ajay",email:"ka@gmail.com",loc:"guntur"},
        {id:199,name:"nayak",email:"kh@gmail.com",loc:"gunutr"}
    ]
  render() {
    return (
      <div>
        {this.Persons.map((val)=>(
            <h4>
            I am {val.name} and My Loc {val.loc}
            </h4>
    ))}
      </div>
    )
  }
}

export default ListRenderingex2
