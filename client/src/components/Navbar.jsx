import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes, FaUser, FaBook } from "react-icons/fa";
import Logo from "../assets/images/butterfly.png";
import "../assets/css/Navbar.css";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const username = window.localStorage.getItem("username");

  const logout = () => {
    setCookies("access_token", "");
    var ediary_data = window.localStorage.getItem("e-diary-data");
    window.localStorage.clear();
    window.localStorage.setItem("e-diary-data", ediary_data);
    navigate("/");
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar-container">
      <Link to={!cookies.access_token ? "/" : "/home"}>
        <h1>
          <img className="image" src={Logo} alt="" /> Mindance
        </h1>
      </Link>
      <div className="navbar" ref={navRef}>
        {/* <Link to='/'>Mindance</Link> */}
        {/* <Link to='/auth'>Login/Signup</Link> */}
        {!cookies.access_token || window.location.pathname === "/auth" ? (
          <Link to="/auth">
            <button className="navbar-auth-button">Login</button>
          </Link>
        ) : (
          <>
            <Link to="/home">Home</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/ediary">
              <Link to="/helplines">Helplines</Link>
              <Link to="/community">Community</Link>
              <FaBook />
            </Link>
            <Link to="/details">
              <FaUser />
              <span> {username}</span>
            </Link>
            <button className="navbar-auth-button" onClick={logout}>
              Logout
            </button>
          </>
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};
