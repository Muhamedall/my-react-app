import React from "react";
import { useState } from "react";


export default function Muform (){
    const [FormInput,setFormInput]=useState({})
    const handelChang=(e)=>{
        const currentTarget=e.currentTarget;
        const id=currentTarget.id;
        let value =currentTarget.value;
        if(currentTarget.type === 'checkbox'){
            value =currentTarget.checked;

        }
        setFormInput(prevState=>{
            return {...prevState , ...{[id]:value}}
           
        })

    }
    const handelCliak=(e)=>{
        e.preventDefault();
     

    }
  
   
    return (
        <>
           {Object.keys(FormInput).map((key, index) => (
            <ul key={index}>
               
                <li> {FormInput[key]}</li>
            </ul>
        ))}
    
      
        
  

            
        <div className="container my-4">
        <form>
            <label>Enter your Name :</label>
        <input className="form-control" type="text"  id="name" onChange={handelChang} ></input>
        <label>Enter you age :</label>
        <input className="form-control " type="text" id="age"onChange={handelChang} ></input><br></br>
        <select className="form-select" id="selectForm" onChange={handelChang}>
          <option value="">Open this select menu</option>
          <option value="Mar">Mar</option>
          <option value="Egy">Egy</option>
         <option value="Alg">Alg</option>
</select>
       
        <input className="form-check-input" type="checkbox" onChange={handelChang}  id="flexCheckDefault"></input>Accept our ignor<br></br>
        <button type="submit" className="btn btn-primary mb-3" onClick={handelCliak}>Ajoute</button>
        </form>
        </div>
      
       
      
     
      
        </>
        
      
    )
 
  
}