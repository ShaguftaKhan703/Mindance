import { useState } from "react";
import Login from "../components/Login";
import { Signup } from "../components/Signup";
import { AuthImageSlider } from "../components/AuthImageSlider";
import '../assets/css/Auth.css';

export const Auth = () => {
  let [authMode, setAuthMode] = useState("login");

  const changeAuthMode = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
  };

  if (authMode === "login") {
    return (
      <div className="auth-container">
        <div className="slider-container">
          <AuthImageSlider />
        </div>
        <div className="form-container">
          <Login />
          <div className="registered-text">
            Not registered yet? {""}
            <span className="registered-text-link" onClick={changeAuthMode}>
              Sign Up
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="slider-container">
        <AuthImageSlider />
      </div>
      <div className="form-container">
        <Signup />
        <div className="registered-text">
          Already registered? {""}
          <span className="registered-text-link" onClick={changeAuthMode}>
            Log In
          </span>
        </div>
      </div>
    </div>
  );
};
