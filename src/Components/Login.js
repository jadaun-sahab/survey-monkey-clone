import React from "react";
import "../style/login.css";

export default function Login() {
  const login = () => {
    localStorage.setItem("login");
  };
  return (
    <div>
      <input type="text" name="username" id="username" />
      <input type="password" name="password" id="password" />
      <button onClick={login}>Login</button>
    </div>
  );
}
