import React, { Component } from 'react'

export class ChildComp extends Component {
  render() {
    const {employee1}=this.props;
    return (
      <div>
        <table>
        <tr><td>Name is:{employee1.name}</td></tr>
        <tr><td>Code is:{employee1.empCode}</td></tr>
        <tr><td>Age is:{employee1.age}</td></tr>
        <tr><td>Email is:{employee1.email}</td></tr>
        <tr><td>Salary is:{employee1.salary}</td></tr>
        <tr><td>Message is :{this.props.message1.message}</td></tr>
        <tr><td>User is:{this.props.message.User}</td></tr>
        <tr><td>Mail is:{this.props.mail}</td></tr>
        </table>
      </div>
    )
  }
}

export default ChildComp
