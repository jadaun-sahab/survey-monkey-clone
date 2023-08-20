import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../style/login.css";

export default function Login() {
     const navigate=useNavigate();
  const login = () => {
    localStorage.setItem("login",true);
    navigate('/')
  };
  useEffect (()=>{
     let login = localStorage.getItem('login')
     if(login){
          navigate('/')
     }
})
  return (
    <div className='login'>
      <h1>SurveyMonkey</h1>
      <form action="/">

      <input type="text" name="username" id="username" />
      <input type="password" name="password" id="password" />
      <button onClick={login}>Login</button>
      </form>
    </div>
  );
}
