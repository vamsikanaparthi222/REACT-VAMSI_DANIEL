import React, { Component } from 'react'
class Registration extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            emailid:"",
            password:"",
            mobile:"",
            gender:"",
            dob:"",
            country:"",
            address:"",
            state:"",
            checkbox:""
        }
    }
    inputHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitHandler=(event)=>{
        event.preventdefault()
    }
  render() {
    return (
      <div>
      <h1 className="bg-primary text-white mt-5">Registration Form</h1>
      <div className="container">
      <div className="row">
      <div className="col-md-5">
      <div className="card">
      <div className="card-header">
      <h4>Register Your Details With Our Company </h4>
      </div>
      <div className="card-body">
      <form onSubmit={this.submitHandler}>
      <div className="form-group">
      <input onChange={this.inputHandler} name="username" type="text" className="form-control" placeholder="Username:" />
      </div>
      <div className="form-group">
      <input onChange={this.inputHandler} name="emailid" type="email" className="form-control" placeholder="Email Id:" />
      </div>
      <div className="form-group">
      <input onChange={this.inputHandler}  name="password" type="password" className="form-control" placeholder="Password:"/>
      </div>
      <div className="form-group">
      <input onChange={this.inputHandler} name="mobile" type="number" className="form-control" placeholder="Mobile No:"/>
      </div>
      <div className="form-group">
      <input onChange={this.inputHandler} name="gender" type="radio" className="form-control" placeholder="Gender:"/>Male
      </div>
      <div className="form-group">
      <input onChange={this.inputHandler} name="gender" type="radio" className="form-control" placeholder="Gender:"/>Female
      </div>
      <div className="form-group">
      <input onChange={this.inputHandler} name="dob" type="date" className="form-control" placeholder="Date Of Birth:"/>
      </div>
      <div className='form-group'>
      <select onChange={this.inputHandler} name="country"  className="form-control" placeholder='Country' type="country">
      <option >Country:-</option>
      <option >America</option>
      <option>Bangladesh</option>
      <option >China</option>
      <option >Dargeling</option>
      <option >India</option>
      </select>
      </div>
      <div className='form-group'>
      <input onChange={this.inputHandler} name="address" className="form-control"  placeholder='Address' type="text-area" />
      </div>
      <div className='form-group'>
      <select input onChange={this.inputHandler} name="address" className="form-control"  placeholder='Address' type="state">
      <option >State:-</option>
      <option >AP</option>
      <option >MP</option>
      <option >UP</option>
      <option >TS</option>
      <option >TN</option>
      </select>
      </div>
      <div  className='form-group'>
      <input className='form-group' onChange={this.inputHandler} name="checkbox"  type="checkbox"  /> please select terms & conditions
      </div>
      <input type="submit" className="btn btn-success" />
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Registration
