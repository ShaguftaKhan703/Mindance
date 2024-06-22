import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Logo from '../assets/images/butterfly.png';
import '../assets/css/AuthForm.css';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://mindance-api.onrender.com/auth/signup',
      {
        email,
        username,
        password
      });
      alert('Signup successful! Please log in.');
      navigate(0);
    } catch(err) {
      console.error(err);
    }
  };
  return (
    <div className="form-child-container">
      <form onSubmit={handleSubmit}>
        <div className="logo-holder">
          <img className="logo-image" src={Logo} alt="Mindance-Butterfly-Logo" />
          <h2 className="logo-text">Mindance</h2>
        </div>
        <div className="auth-form">
          <label className="auth-form-label" htmlFor="email">Email</label>
          <input className="auth-form-input" type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <label className="auth-form-label" htmlFor="username">Username</label>
          <input className="auth-form-input" type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
          <label className="auth-form-label" htmlFor="password">Password</label>
          <input className="auth-form-input" type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button className="auth-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}