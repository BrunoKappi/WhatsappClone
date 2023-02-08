import React from "react";
import { auth, provider } from "../../services/firebase";
import "./Login.css"

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <div className="LoginContainer">
      <button className='login-with-google-btn' onClick={handleSignin}>Login com Google</button>
    </div>
  );
};

export default Login;
