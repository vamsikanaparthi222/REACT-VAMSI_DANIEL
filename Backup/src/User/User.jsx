import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        Axios.get().then().catch()
    }
  render() {
    return (
      <div>
        <h1>User Component</h1>
        <div className="container mt-5">
        <div className="row">
        <pre>{JSON.stringify(this.state.users)}</pre>
        </div>
        </div>
      </div>
    )
  }
}

export default User
