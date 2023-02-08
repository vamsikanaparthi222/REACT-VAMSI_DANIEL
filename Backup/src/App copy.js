import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from './Navbar Function/Navbar' 
import CompA from './Components/CompA'
import Product from './Components/Props examples/Product'
import Ifelse from './Conditional Rendering Examples/Ifelse'
import Ternary from './Conditional Rendering Examples/Ternary'
import EventBinding from './Event Handling Examples/EventBinding'
import EventHandling from './Event Handling Examples/EventHandling'
import ListRendering from './List Rendering ex/ListRendering'
import ListRenderingex2 from './List Rendering ex/ListRenderingex2'
import Namelist from './List Rendering ex/Namelist'
//import Navbar from './Navbar'
import Counter from './state/Counter'
import Message from './state/Message'
import Products from './state/Products'
import Login from './Form Handling/Login'
import Registration from './Form Handling/Registration'
import DigitalClock from './Clock/DigitalClock'
import Dc2 from './Clock/Dc2'
import Employee from './Employees/Employee'
import Home from './Dummy/Home'
class App extends Component {
  render(){
  return (
    <>
    <Navbar/>
    <CompA/><hr/>
    <Product/><hr/>
    <Message/><hr/>
    <Counter/><hr/>
    <Products/><hr/>
    <EventHandling/><hr/>
    <EventBinding/><hr/>
    <Ifelse/><hr/>
    <Ternary/><hr/>
    <ListRendering/><hr/>
    <ListRenderingex2/><hr/>
    <Namelist/><hr/>
    <Login/><hr/>
    <Registration/><hr/>
    <DigitalClock/><hr/>
    <Dc2/><hr/>
    <Employee/><hr/>
    <Router>
    <Navbar/>
    <Switch>
    <Route path="/home" component={Home}/>
    </Switch>
    </Router>
    </>
  )
  }
}

export default App