import React from "react";
import arrivals from "./newarrivals.png";
import brands from "./brands.png";
import reuse from "./reuse.png";
import sellers from "./BestSellers.png";
import sellit from "./sellit.png";
import Typewriter from 'typewriter-effect';
// import { useHistory } from "react-router-dom";

function Homepage() {

  return (
    <div className="homepage_body">
      <img className="arrivals"  src={arrivals} alt="new arrivals" />
      {/* <div className="overlay">
            <span>lorem ipsum</span>
          </div> */}
      <img src={brands} alt="new arrivals" />

      <div className="body_one">
        <div className="text_left">
          <Typewriter 
          onInit={(typewriter) => {
            typewriter
            .typeString("Whats Thrifting ?")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Click below  to learn More!!")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Whats Thrifting ?")
            .start();
          }}
          />
          <p>
            In simple words, thrifiting is second hand <br/>cloth shopping.<br/> But it’s
            a lot more than that. <br/><br/>Explore the aspect of <a href=""><b>more</b></a>.
          </p>
        </div>
        <div className="img_right">
          <img src={reuse} alt="new arrivals" />
        </div>
      </div>

      <div className="body_two">
        <img src={sellers} alt="lorem" />
      </div>

      <div className="body_three">
        <img src={sellit} alt="lorem" />
        <button className="sellit_button">SELL</button>
      </div>
    </div>
  );
}

export default Homepage;
