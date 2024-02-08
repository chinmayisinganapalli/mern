import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
export default function NavBar() {
  return (
  <div className='nav-container'>
    <div className='navigation'>
        <nav>
            <ul>
            <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        </ul>

        </nav>
      
    </div>
    </div>
  )
}