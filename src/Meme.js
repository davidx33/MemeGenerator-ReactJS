import React from 'react';
import memesData from './memesData';
import "./App.css"

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })


    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevmeme => ({
            ...prevmeme,
            [name]: value
        }))

    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    name = "topText"
                    className="form--input"
                    value = {meme.topText}
                    onChange = {handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    name = "bottomText"
                    className="form--input"
                    value = {meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div>
                <img src={memeImage} className="meme--image" />
                <h2 className="meme--texttop">{meme.topText}</h2>
                <h2 className="meme--textbottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

   
export default Meme