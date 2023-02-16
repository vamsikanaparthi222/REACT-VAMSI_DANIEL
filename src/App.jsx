import React from 'react'
import Navbar from './Navbar/Navbar'
//import Login from './Login/Login'
//import ContactApp from './Contact App/ContactApp'
//import Product from './REdux/Product/Product'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EApp from './EXPENSE TRACKER/EApp'

const App = () => {
    
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    
                    <Route path="/et" component={EApp} />
                 
                </Switch>
            </Router>
        </div>
    )
}

export default App