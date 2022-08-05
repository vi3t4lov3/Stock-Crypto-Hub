import React, { useState } from "react";
import "./Auth.css";
import {useRegister} from "../../Hooks/useRegister"
const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [confirmPass, setConfirmPass] = useState(false);
  
  const inputState = {firstname: '', lastname: '', username: '', email: '', password: '',confirmpass: ''}; 
  const {register, error, isLoading} = useRegister()
  const [data, setData] = useState(inputState);
  // Handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(inputState)
    if (data.password !== data.confirmpass) {
      setConfirmPass(true);
    }
    else {

    }
  }
  const resetForm = () => {
    setData(inputState);
    setConfirmPass(confirmPass);
  };
  return (
    <div className="Auth">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
      <h2> {isRegister ? "Sign up" : "Login"}</h2>
        
      {isRegister && (
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
            // required
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            value={data.lastname}
            onChange={handleChange}
            // required
          />
        </div>
      )}
        

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handleChange}
            // required
          />
        </div>
        {isRegister && (
        <div>
          <input
            type="text"
            placeholder="Email"
            className="infoInput"
            name="email"
            value={data.email}
            onChange={handleChange}
            // required
          />
        </div>
      )}
        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
            required
          />
          {isRegister && (
          <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
          )}
        </div>
        {confirmPass ? (<span className="confirmPass">*Confirm password is not match</span>) : null}
        
        <div>
        <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                setIsRegister((prev) => !prev);
                resetForm()
              }}
            >
              {isRegister
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
        </div>
        <button className="button infoButton" type="submit">{isRegister ?"Signup" : "Login"}</button>
      </form>
    </div>
  );
}

export default Auth;
