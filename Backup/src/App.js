import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from './Navbar Function/Navbar' 
import ContactApp from './Contact App/ContactApp'

class App extends Component {
  render(){
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
    <Route path="/contactApp" Component=""></Route>
    </Switch>
    </Router>
    </>
  )
  }
}

export default App