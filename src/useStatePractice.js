
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