import React from 'react'
import './App.css'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
  import Home from './components/Home.js'
// import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
export default function App() {
  return (
    <div>
     
      <Router>
       <Routes>
        <Route path="/Login" exact Component={Login} />
        <Route path="/Signup" exact Component={Signup} />
        <Route path="/home" exact Component={Home} />
      </Routes>
    </Router>
    </div>
  )
}