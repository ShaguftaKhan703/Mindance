import { useState } from "react";
import axios from "axios";
import '../assets/css/ChatAuth.css';

const ChatAuth = (props) => {
  const chat_user = window.localStorage.getItem('username');

  const [username, ] = useState(chat_user);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://mindance-api.onrender.com/chat/authenticate', { username })
      .then((r) => {
        props.onAuth({ ...r.data, secret: username });
        window.localStorage.setItem('chat_user', r.data.username);
      }) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="chat-auth-form-container">
      <form className="chat-auth-form-card" onSubmit={handleSubmit}>
        <div className="chat-auth-form-title">Welcome!</div>
        <div className="chat-auth-form-subtitle">An empathetic listener is waiting for you...</div>
        <div className="chat-auth-form">
          <label className="chat-auth-form-label" htmlFor="">Username</label>
          <input className="chat-auth-form-input" type="text" value={username} readOnly={true} />
          <button className="chat-auth-button" type="submit">Chat</button>
        </div>
      </form>
    </div>
  );
};

export default ChatAuth;