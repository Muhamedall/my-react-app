import React from "react";
import { useRef } from "react";

export default function Myform (){
    const InputNameRef=useRef();
    const InputLastName =useRef();
    const InputOption=useRef();
    const IsTappes=useRef(true);
const handelClick=(e)=>{
    e.preventDefault();

    if(InputNameRef.current.value === ""){

       return IsTappes;
    }
    else{
        alert('is ')
    }
 
  
}

    return (
        <> 
        <form>
            <input type="text" id="FirstName" ref={InputNameRef} {...IsTappes ? <p></p>:<p>None</p>}></input><br></br>
                <input type="text" id="LastName" ref={InputLastName}></input><br></br>
                <select id="option" ref={InputOption}>
                <option value="Dev">Dev</option>
                <option value="Infra">Infra</option>
                <option value="Gestion">Gestion</option>
                </select>
                <button onClick={handelClick}>Submit</button>
          


            </form></>
    )
}