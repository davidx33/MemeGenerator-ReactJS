import React from 'react' 
import imgmemeface from "./images/troll-face.png"
import "./App.css"

function Header() {
  return (
    <header className='header'>
        <img src = {imgmemeface} alt =""
        className='header--image'/>
        <h1 className='header--title'>David Xu's Meme Generator :P
        </h1>
        <h4 className='header--project'>Images do not correspond to text, just random from an API</h4>
    </header>
  )
}

export default Header