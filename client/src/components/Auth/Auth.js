import React, { useState } from "react";
import "./Auth.css";
import {useRegister} from "../../Hooks/useRegister"
import {useLogin} from "../../Hooks/useLogin"
const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [confirmPass, setConfirmPass] = useState('');
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // const inputState = {firstname: '', lastname: '', username: '', email: '', password: '',confirmpass: ''}; 
  const {register, error, isLoading} = useRegister()
  const {login} = useLogin()
  // const [data, setData] = useState(44inputState);
  // Handle Change in input
  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };
  const handleSubmit = async (e) => {
    // setConfirmPass(false);
    e.preventDefault();
    if (isRegister) {
      await register(firstname, lastname, email,  username, password)
      if (password === confirmPass) {
        setConfirmPass(false);
      }
    } else {
      await login(username, password)
    }
  }
  const resetForm = () => {
    setFirstName(firstname)
    setLastName(lastname)
    setUserName(username)
    setEmail(email)
    setPassword(password)
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
            onChange={(e) => setLastName(e.target.value)}
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
            onChange={(e) => setUserName(e.target.value)}
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
        
        {isRegister && (confirmPass !== password) ? (<span className="confirmPass">*Confirm password is not match</span>) : null}
        
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
