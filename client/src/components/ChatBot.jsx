/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useState } from "react";
import ChatImg from "../assets/images/chatbot.png";
import "../assets/css/ChatBot.css";

const ChatBot = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    setShowIframe(!showIframe);
  };
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="chatbot">
      <button className="ChatbotImage" onClick={handleClick}>
        <img
          className="ChatbotImage chatbot-image"
          alt="ChatbotImage"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={ChatImg}
        />
        {isHovering && (
          <div className="chat-message">
            get assistance from "wellby" our chatbot
          </div>
        )}
      </button>
      {showIframe && (
        <div>
          {/* <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/33057093-a80b-415d-90b5-62702409f1d6"
          ></iframe> */}
          <button className="ChatbotClose" onClick={handleClick}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
