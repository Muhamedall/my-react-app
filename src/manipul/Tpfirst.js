import React from "react";
import { useState } from "react";
export default function Myfunction(){
    const [pass,setPass]=useState('');
    const handelSubmit=(event)=>{
        setPass(event.target.value);
        
    }

    return(
        <>
        <label>ENTER YOU PASS :</label>
        <input type="password" value={pass} onChange={handelSubmit}>

        </input>
         {pass.length<=4?<p style={{ color: "red" }} >Password doit avoir au moins t 4 caractères</p>:""} 
        </>
    )
}
 