import React, { useState } from "react";
import "./Auth.css";
import {useRegister} from "../../Hooks/useRegister"
const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [confirmPass, setConfirmPass] = useState(true);
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // const inputState = {firstname: '', lastname: '', username: '', email: '', password: '',confirmpass: ''}; 
  const {register, error, isLoading} = useRegister()
  // const [data, setData] = useState(44inputState);
  // Handle Change in input
  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await register(firstname, lastname, email,  username, password)
    console.log(userData);
    if (password === confirmPass) {
      setConfirmPass(false);
    }
    // else {

    // }
  }
  const resetForm = () => {
    // setData(inputState);
    // setConfirmPass(confirmPass);
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
            value={firstname}
            // onChange={handleChange}
            // required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            value={lastname}
            // onChange={handleChange}
            onChange={(e) => setLastname(e.target.value)}
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
            value={username}
            // onChange={handleChange}
            onChange={(e) => setUsername(e.target.value)}
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
            value={email}
            // onChange={handleChange}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            // onChange={handleChange}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
          {isRegister && (
          <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            // onChange={handleChange}
            onChange={(e) => setConfirmPass(e.target.value)}
            // required
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
