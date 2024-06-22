import { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/images/butterfly.png';
import Show from '../assets/images/visibility_white_filled.svg';
import Hide from '../assets/images/visibility_off_white_filled.svg';
import '../assets/css/AuthForm.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [, setCookies] = useCookies(['access_token']);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://mindance-api.onrender.com/auth/login', {
        username,
        password
      });
      setCookies('access_token', response.data.token);
      window.localStorage.setItem('userID', response.data.userID);
      window.localStorage.setItem('username', response.data.username);
      const userID = window.localStorage.getItem('userID');
      if (userID !== 'undefined') {
        navigate('/home');
      } else {
        navigate('/auth');
      }
      // navigate('/home');
      // !cookies.access_token ? navigate('/auth') : navigate('/home');
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="form-child-container">
      <form onSubmit={handleSubmit}>
        <div className="logo-holder">
          <img className="logo-image" src={Logo} alt="Mindance-Butterfly-Logo" />
          <h2 className="logo-text">Mindance</h2>
        </div>
        <div className="auth-form">
          <label className="auth-form-label" htmlFor="email-or-username">Email or Username</label>
          <input className="auth-form-input" type="text" id="email-or-username" value={username} onChange={(event) => setUsername(event.target.value)} />
          <label className="auth-form-label" htmlFor="password">Password</label>
          <div className="password-container">
            <input className="auth-form-input" type={isShowPassword ? "text" : "password"} id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <button type="button" onClick={() => {setIsShowPassword(prevState => !prevState)}}>
              <img src={isShowPassword ? Hide : Show} alt="" />
            </button>
          </div>
        </div>
        <button className="auth-button" type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;