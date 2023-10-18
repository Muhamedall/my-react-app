import React from "react";
import { useState } from "react";
export default function Mycounter (){
    const [count ,setCount]=useState(0);
    const Increament=(e)=>{
        e.preventDefault()
     
            setCount((count)=>count+1)
   

    }
    return (
        <>
        <h2>My count is {count}  </h2>
        <button onClick={Increament}>Add</button>


        </>
    )
}

