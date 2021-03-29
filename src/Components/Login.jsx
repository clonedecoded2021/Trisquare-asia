import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Login.css";
import { useDispatch } from "react-redux";
import reducer from '../reducer';
import Axios from 'axios';

function Login() {
  const dispatch = useDispatch(reducer)
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  Axios.defaults.withCredentials = true;

  const signin = (e) => {
    e.preventDefault();
    Axios.post("https://trisquare.asia/api/login", {
      // Axios.post("http://localhost:3001/api/login", {
      email: email,
      password: password,
    }).then(response => {
      dispatch({
        type: "login Success",
      })
      // console.log(response)
      localStorage.setItem("_trisquarestorage", JSON.stringify(response))
      if (response.data.message) {
        alert(response.data.message)
      } else {
        history.push("/buyer/");
        window.location.reload()
      }
    })
    setEmail("");
    setPassword("");
    // window.location("/buyer").reload()
  };
  return (
    <div className="login">
      <p id="timers">
        <span className="spans" id="timer-days"></span>
        <span className="spans" id="timer-hours"></span>
        <span className="spans" id="timer-mins"></span>
        <span className="spans" id="timer-secs"></span>
      </p>
      <div className="login__container">
        <h1 className="login__heading">Log in with Trisquare</h1>
        <form className="login__form">
          <input
            className="login__input"
            type="email"
            placeholder="Type your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login__input"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__SubmitButton"
            type="submit"
            onClick={signin}
          >
            Log In
          </button>
        </form>
        <div className="resetButtonContainer">
          <p className="login__para">
            Trouble Logging in?{" "}
            <Link className="login__resetPassword" to="/buyer/forgotPassword">
              Reset Password
            </Link>
          </p>
        </div>
        <div className="login__emptyDiv"></div>
        <h5 className="login__bottom">
          Not a user?
          <Link className="login__resetPassword link" to="/buyer/signup">
            Sign Up
          </Link>
        </h5>
      </div>
    </div>
  );
}
export default Login;