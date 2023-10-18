import React from "react";
import { useState } from "react";
export default function Myshop(){
    const handelCliack=()=>{
        console.log('hi')
    }



    return(
        <>
        <nav>
            <div className="theLink">

            
            <a href="#">Homme</a>
            <a href="#">About</a>
            <a href="#">Shop</a>
            </div>
            <div className="Cart">
                <button>Cart</button>

            </div>
        </nav>
        <div className="Title">
            <h1>Shop in style </h1>
            <p>Withe the shop homepeage template </p>

        </div>
        <section>
            <div>
                <img src="Logo1.jpg" alt="Image first"></img>
                <h3>Fancy Product</h3>
                <span>$80.00</span>
                <button onClick={handelCliack}>Adde to carte </button>
            </div>
        </section>

        </>
    )
}