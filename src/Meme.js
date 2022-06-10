import React from 'react';
import memesData from './memesData';
import "./App.css"

function Meme() {

    // * Challenge: 
    //  * As soon as the Meme component loads the first time,
    //  * make an API call to "https://api.imgflip.com/get_memes".
    //  * 
    //  * When the data comes in, save just the memes array part
    //  * of that data to the `allMemes` state
    //  * 
    //  * Think about if there are any dependencies that, if they
    //  * changed, you'd want to cause to re-run this function.
    //  * 
    //  * Hint: for now, don't try to use an async/await function.
    //  * Instead, use `.then()` blocks to resolve the promises
    //  * from using `fetch`. We'll learn why after this challenge.
    //  */

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    

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