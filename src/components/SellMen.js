import React from 'react'
import shirts from "./Group27.png";
import suits from "./suitsbg.png"
import mensection from "./Group 26.png";
function SellMen() {
    return (
        <div className="sell_men">
            <div className="sellmen_img1">
            <img src={shirts} alt="shirts"/>
            </div>

            <div className="sellmen_img2">
            <img src={suits} alt="suits"/>
            </div>

            <div className="sellmen_img3">
            <img src={mensection} alt="shirts"/>
            </div>
            
        </div>
    )
}

export default SellMen
