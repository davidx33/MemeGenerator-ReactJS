import React from 'react';
import memesData from './memesData';

function Meme() {

    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        // const url = memesArray[randomNumber].url

    }

  return (
    <main>
        <div className='form'>
            <input type="text" className='form--input'
            placeholder='Top text'></input>
            <input type="text" className='form--input'
            placeholder='Bottom text'></input>
            <button 
            onClick={getMemeImage}
            className='form--button'>
            Get a new meme image 🖼
            </button>
        </div>
        <img src = {memeImage} className='meme--image'/>
    </main>
  )
}

export default Meme