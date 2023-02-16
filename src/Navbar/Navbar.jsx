import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="#" className="navbar-brand">React Routing Example</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                <li className='nav-list'><Link to="ContactApp" className="nav-item">ContactApp</Link></li>
                <li className='nav-list'><Link to="login" className="nav-item">Login</Link></li>
                <li className='nav-list'><Link to="product" className="nav-item">Product</Link></li>
                <li className='nav-list'><Link to="et" className="nav-item">ET</Link></li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar