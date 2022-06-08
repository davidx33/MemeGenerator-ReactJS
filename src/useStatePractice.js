
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



// import React from "react"

// export default function Box(props) {
//     const [on, setOn] = React.useState(props.on)
//     /**
//      * Challenge: Create state controlling whether
//      * this box is "on" or "off". Use the incoming
//      * `props.on` to determine the initial state.
//      * 
//      * Create an event listener so when the box is clicked,
//      * it toggles from "on" to "off".
//      * 
//      * Goal: clicking each box should toggle it on and off.
//      */
//     const styles = {
//         backgroundColor: on ? "#222222" : "transparent"
//     }
    
//     function toggle() {
//         setOn(prevOn => !prevOn)
//     }
    
//     return (
//         <div style={styles} className="box"></div>
//     )



import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}


// import React from "react"

// export default function App() {
//     const [messages, setMessages] = React.useState(["a"])
//     /**
//      * Challenge:
//      * - If there are no unread messages, display "You're all caught up!"
//      * - If there are > 0 unread messages, display "You have <n> unread
//      *   message(s)"
//      *      - If there's exactly 1 unread message, it should read "message"
//      *        (singular)
//      */
//     return (
//         <div>
//             {
//                 messages.length === 0 ?
//                 <h1>You're all caught up!</h1> :
//                 <h1>You have {messages.length} unread 
//                 {messages.length > 1 ? "messages" : "message"}</h1>
//             }
//         </div>
//     )
// }