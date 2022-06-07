
import React from 'react'

function useStatePractice() {
    const [count, setCount] = React.useState(0)
    function Add() {
        setCount(count + 1)
    }

    function sub() {
        setCount(prevCount => prevCount - 1)
    }
  return (
    <div className="counter">
            <button className="counter--minus" onClick={sub}>–</button>
            <div className="counter--count" >
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={Add}>+</button>
        </div>
  )
}

export default useStatePractice  


// // import React from "react"

// export default function App() {
//     const [isGoingOut, setIsGoingOut] = React.useState(true)
//     /**
//      * Challenge: 
//      * - Initialize state for `isGoingOut` as a boolean
//      * - Make it so clicking the div.state--value flips that
//      *   boolean value (true -> false, false -> true)
//      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//      */
//     function changeMind() {
//         setIsGoingOut(prevState => !prevState)
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div onClick={changeMind} className="state--value">
//                 <h1>{isGoingOut ? "Yes" : "No"}</h1>
//             </div>
//         </div>
//     )
// }

// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//     /**
//      * Challenge: Convert the code below to use an array
//      * held in state instead of a local variable. Initialize 
//      * the state array with the same 2 items below
//      * 
//      * Don't worry about fixing `addItem` quite yet.
//      */
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
//     function addItem() {
//         // We'll work on this next
//         // const newThingText = `Thing ${thingsArray.length + 1}`
//         // thingsArray.push(newThingText)
//         // document.getElementById()
//         // console.log(thingsArray)
//     }
    
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }


// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
//     function addItem() {
//         setThingsArray(prevState => {
//             return [...prevState, `Thing ${prevState.length + 1}`]
//         })
//     }
    
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// import React from "react"

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
    
//     let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
//     function toggleFavorite() {
//         setContact(prevContact => ({
//             ...prevContact,
//             isFavorite: !prevContact.isFavorite
//         }))
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     <img 
//                         src={`../images/${starIcon}`} 
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }



function toggleFavorite() {
    setContact(prevContact => {
        return {
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }
    })
}