import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Product from './components/Product'
import Contact from './components/Contact'
import Registration from './components/Login'

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/product" component={Product} />
            <Route path="/contact" component={Contact} />
            <Route path="/registration" component={Registration} />

            
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App