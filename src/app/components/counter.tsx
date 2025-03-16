"use client"
import { useState } from "react"

export const Counter = () => {
    const [counter,setCounter] = useState(0)
    const handleIncrease = ()=>{
        setCounter(counter+1)
        console.log("logged counter");
        
    }
    return <>
    Counter {counter}
    <button type="button" onClick={handleIncrease}>
        Increase
    </button>
    </>
}