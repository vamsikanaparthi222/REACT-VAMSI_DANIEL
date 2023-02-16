import React, { Component } from 'react'

class Dc2 extends Component {
    constructor(props){
        super(props)
        this.state={
            currentTime:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                currentTime:new Date().toLocaleTimeString()
            })
        })
    }
  render() {
    return (
      <div>
        <h3>Digital Clock 2</h3>
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-6">
        <div className="card">
        <div className="card-header bg-danger text-white">
        <h1>Digital Clock</h1>
        </div><br />
        <div className="card-body bg-primary text-white">
        <h3>Time:--{this.state.currentTime}</h3>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Dc2
