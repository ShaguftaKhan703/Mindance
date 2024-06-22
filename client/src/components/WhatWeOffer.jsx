import React from "react";
import Icon1 from "../assets/images/Connect to a listener.svg";
import Icon2 from "../assets/images/Locate therapists around you.svg";
import Icon3 from "../assets/images/Mood tracker.svg";
import Image11 from "../assets/images/Group_26.svg";
import "../assets/css/WhatWeOffer.css";

function WhatWeOffer() {
  return (
    <div>
      <div className="whatweoffer">
        <p className="title">What We Offer</p>
        <div id="leftbox">
          <img className="icon" src={Icon1} alt="icon" />
          <p className="offer">Connect To A Listener</p>
        </div>
        <div id="middlebox">
          <img className="icon" src={Icon2} alt="icon" />
          <p className="offer"> Locate Therapists Near You</p>
        </div>
        <div id="rightbox">
          <img className="icon" src={Icon3} alt="icon" />
          <p className="offer"> Mood Tracker </p>
        </div>
      </div>
      <div className="weHelpWith">
        <p className="weHelpWith-para">We Help With</p>

        <img className="weHelpWith-image" src={Image11} alt="we help with" />
      </div>
    </div>
  );
}

export default WhatWeOffer;
