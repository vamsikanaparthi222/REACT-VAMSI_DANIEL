import React, { Component } from 'react'
import ChildComp from './ChildComp';
export class ParentComp extends Component {
    mail="Mail Delivered"
    message={
        message:"Good Morning",
        User:"Vamsi"
    
    }
    constructor(){
        super();
        this.state={
            employee:{
                empCode:"222",
                name:"Vamsi kanaparthi",
                age:"23",
                email:"kanaparthivamsi222@gmail.com",
                location:"Bangalore",
                salary:"95000"
            }
        }
    }
  render() {
    return (
      <div>
        <ChildComp
        employee1={this.state.employee}
        message1={this.message}
        mail={this.mail}/>
      </div>
    )
  }
}

export default ParentComp
