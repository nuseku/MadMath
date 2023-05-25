import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import database from "./database";
import "./Login.css";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password",
  };

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    const { uname, pass } = event.target.elements;

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    //Send to Database
    fetch("http://localhost:5001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: uname.value, password: pass.value }),
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

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        console.log("User logged in successfully!");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
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
        <div className="title">Sign In</div>
        {isSubmitted ? <Navigate to="/home" /> : renderForm}
      </div>
    </div>
  );
};

export default Login;
