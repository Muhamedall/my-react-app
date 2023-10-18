import React from "react"
import { Link ,Outlet} from "react-router-dom";

export default function FirstPage(){
    return (
        <>
        <h1>Hello my site </h1>
        <nav>
           <ul>
            <li>
               <Link to="Sauski" >Homme</Link>
            </li>
            <li>
                <Link to="For">Form</Link>
            </li>
           </ul>
        </nav>
        <Outlet />
        
        </>
    )
}