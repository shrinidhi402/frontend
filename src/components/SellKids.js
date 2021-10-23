import React from 'react'
import group29 from "./Group 29.png"
import group30 from "./Group 30.png"
import Group33 from "./Group 33.png"
import shorts from "./shorts.png"


function SellKids() {
    return (
        <div className="sell_kids">

            <div className="sellkids_slider">
            <img src={group30} alt="" />
            <img src={group29} alt="" />
            <img src={shorts} alt="" />
            <img src={Group33} alt="" />
        
            </div>
            <div className="sellkids_img1">
                <img src={group30} alt="" />
            </div>

            <div className="sellkids_img1">
                <img src={group29} alt="" />
            </div>

            <div className="sellkids_img1">
                <img src={Group33} alt="" />
            </div>

            <div className="sellkids_img1">
                <img src={shorts} alt="" />
            </div>

            <div className="sell_form">
               <h1>Your Closet Clean Out</h1>
               <p>A simple three step process and its <a href="">that's</a> easy selling </p>
               <h6>1)<a href="">Login</a> and <a href="">Sign Up</a> to SELL</h6>
               <h6>2)Upload Images Of Clothing Articles You Want to Sell</h6>
               <h6>3)Upload Images Of Clothing Articles You Want to Sell</h6>
            </div>


        </div>
    )
}

export default SellKids
