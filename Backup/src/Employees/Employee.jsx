import React, { Component } from 'react'
import employees from './Data'

class Employee extends Component {
  render() {
    return (
      <div>
        <h1>Employee Data Component</h1>
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-6">
        <table className='table table-hover'>
        <thead className='bg-danger text-white'>
        <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
        </tr>
        </thead>
        <tbody>
        {
            employees.map((employee)=>{
                return <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
                </tr>
            })
        }
        </tbody>
        </table>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Employee
