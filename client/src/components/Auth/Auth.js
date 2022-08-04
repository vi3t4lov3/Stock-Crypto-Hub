import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const inputState = {firstname: '', lastname: '', username: '', email: '',username: '', password: '',confirmpass: ''}; 

  const [data, setData] = useState(inputState);
  
  return (
    <div className="Auth">
      <form className="infoForm authForm">
      <h2> {isRegister ? "Sign up" : "Login"}</h2>
        
      {isRegister && (
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
      )}
        

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        {isRegister && (
        <div>
          <input
            type="text"
            placeholder="Email"
            className="infoInput"
            name="email"
          />
        </div>
      )}
        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          {isRegister && (
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
          )}
        </div>

        <div>
        <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                setIsRegister((prev) => !prev);
              }}
            >
              {isRegister
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth;
