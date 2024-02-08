import React from 'react'
import './Signup.css'
import NavBar from './NavBar.js'
export default function Signup() {
  return (
    <div>
      <NavBar/> 
      <h1>Signup page</h1>
    <div class="sign-box">
    <h2>SignUp</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required=""/>
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required=""/>
        <label>Password</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required=""/>
        <label>Confirm-Password</label>
      </div>
      <button>Signup</button>
    </form>
    </div>
    </div>

  )
}