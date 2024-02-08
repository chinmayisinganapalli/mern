import React from 'react'
import NavBar from './NavBar'
import './NavBar.css'
import social from './social-media-quality.jpg'
export default function Home() {
  return (
    <div className='homepage'>
        
        <h1 className='home'>This is Home page</h1>
        <img src={social}/>
    </div>
  )
}

