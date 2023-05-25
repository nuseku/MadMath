import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import database from "./database";
import "./Signup.css";

function Signup() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const errors = {
    pass: "Passwords do not match!",
  };

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    const { fname, lname, email, uname, pass, passConfirm } =
      event.target.elements;

    if (pass.value !== passConfirm.value) {
      setErrorMessage({ name: "pass", message: errors.pass });
      return;
    }

    //Send to Database
    fetch("http://localhost:5001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        username: uname.value,
        password: pass.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log("Data sent successfully:", data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
    database.push(uname.value, pass.value);
    setIsSubmitted(true);
    console.log("User created account successfully!");
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessage.name && (
      <div className="error">{errorMessage.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <div className="signup-input-container">
          <label>First Name </label>
          <input type="text" name="fname" required />
          <label>Last Name </label>
          <input type="text" name="lname" required />
          <label>Email Address</label>
          <input type="text" name="email" required />
          <label>Username </label>
          <input type="text" name="uname" required />
          <label>Password </label>
          <input type="password" name="pass" required />
          <label>Confirm Password </label>
          <input type="password" name="passConfirm" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <Navigate to="/home" /> : renderForm}
      </div>
      <Link to="/">
        <p className="signup-paragraph">
          Already have an account? <span className="join-now">Sign in</span>
        </p>
      </Link>
    </div>
  );
}

export default Signup;
