import React, { Component } from 'react'

class DigitalClock extends Component {
    constructor(props){
        super(props)
        this.state={
            currentTime:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
      setInterval(()=>{
        this.setState({currentTime:new Date().toLocaleTimeString()})
      },1000)
    }
  render() {
    return (
      <div>
        <h1>Digital Component</h1>
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-6">
        <div className="card">
        <div className="card-header bg-success text-white">
        <h3>Time:--{this.state.currentTime}</h3>
        </div>
        <div className="card-body">
        <h5>Every Second is Most Valuable</h5>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default DigitalClock
