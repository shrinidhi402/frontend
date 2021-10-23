import React from "react";
import aboutus from "./aboutustext.png"
import infosection from "./infosection.png"
import multicolor from "./multicolor.png"

function AboutUs() {
  return (
    <div>
      <img className="aboutus" src={aboutus} alt="" />
      <img className="info" src={infosection} alt="" />
      <img className="multi" src={multicolor} alt="" />
    </div>
  );
}

export default AboutUs;
