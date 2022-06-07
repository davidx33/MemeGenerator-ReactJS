import React from "react"
import Header from "./Header";
import Meme from "./Meme";


function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>

  )

}

export default App;


// how to map over an array in react

// const thingsElements = thingsArray.map(thing => <p>{thing}</p>)
// {thingsElements} insert this into the return body of the function