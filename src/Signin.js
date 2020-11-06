import { auth } from "./firebase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signin.css";

function Signin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signin">
      <Link to="/">
        <img
          className="signin_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="Amazon-Logo"
        />
      </Link>
      <div className="signin_container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} className="signin_button">
            Continue
          </button>
        </form>

        <p>
          By continuing, you agree to Fake Amazon's Conditions of Use and
          Privacy Notice.
        </p>
      </div>
      <hr />
      <p>New to Amazon?</p>

      <button onClick={register} className="register_button">
        Create your Amazon account
      </button>
    </div>
  );
}

export default Signin;
