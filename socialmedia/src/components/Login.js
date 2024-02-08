import React from 'react'
import './Login.css'
 import NavBar from './NavBar'
 import {Link} from 'react-router-dom';
export default function Login() {
  return (
    <div>
      <NavBar/>
        <h1>Login Page</h1>
    <div class="login-box">
    <h2>Login</h2>
    <form>
      <div class="user-box">
      <label>Username</label><br></br>
        <input type="text" name="" required=""/>
      </div>
      <div class="user-box">
      <label>Password</label><br></br>
        <input type="password" name="" required=""/>
      </div>
      <button className='bun'>Login</button>
    </form>
  </div>
  <h4 className='tag'>Create new account ? <Link to='/signup'>Signup</Link></h4>
  </div>
  )
}