import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function MyHomme(){
    return(
        <>
        <h1>Hello World</h1>
        <nav>
            
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="InscriptionForm">Form</Link>
            </li>
            <li>
              <Link to="ListInscription">List</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        
        
        </>
    )
}