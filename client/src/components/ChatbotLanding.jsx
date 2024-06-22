import React from "react";
import ImageChatbot from "../assets/images/REV vecteezy_frame-chatbot-service-icon-hs0521 1.png";
import Icon4 from "../assets/images/Fast real time replies.svg";
import Icon5 from "../assets/images/Human-centered.svg";
import Icon6 from "../assets/images/Determine user's mood.svg";
import "../assets/css/ChatbotLanding.css";

function ChatbotLanding() {
  return (
    <div>
      <div className="container5">
        <div className="one">
          <div className="chatbotText">Chat with Wellby - our Chatbot for Assistance</div>
        </div>
        <div className="two">
          <img className="ImageChatbot" src={ImageChatbot} alt="ImageChatbot" />
        </div>
      </div>

      <div className="quality">
        <div id="leftbox1">
          <img className="icon1" src={Icon4} alt="icon" />
          <p className="offer1">Fast, Real Time Replies</p>
        </div>
        <div id="middlebox1">
          <img className="icon1" src={Icon5} alt="icon" />
          <p className="offer1"> Human-Centered</p>
        </div>
        <div id="rightbox1">
          <img className="icon1" src={Icon6} alt="icon" />
          <p className="offer1"> Determine User's Mood </p>
        </div>
      </div>
    </div>
  );
}

export default ChatbotLanding;
