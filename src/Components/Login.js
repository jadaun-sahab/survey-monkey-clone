import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css";

export default function Login() {
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <div className="login">
      <h1>SurveyMonkey</h1>
      <div className="loginContainer">
        <h3>
          Don’t have an account? <Link to="/">Sign up</Link>
        </h3>
        <h1>Log in</h1>
        <div>
          <input type="email" name="email" id="email" placeholder="Enter Your Email Address" />
        </div>
        <span>
          <Link to="/">forget mail?</Link>
        </span>
        <div>
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}
