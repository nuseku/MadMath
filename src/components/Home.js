import React, { useState } from "react";
import Header from "./Header";
import "./Home.css";

const Home = () => {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the server
    fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, subject }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Display the response message
        // Reset the form inputs
        setFullName("");
        setSubject("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="sub-container">
        <div className="section">
          <div className="title-left">Hello NAME,</div>
          <div className="body-left">
            Your current classes are: MATH1 and MATH2
          </div>
        </div>
        <hr></hr>
        <div className="section">
          <div className="title-left">To-Do:</div>
          <div className="body-left">You have no to-do's!</div>
        </div>
        <hr></hr>
        <div className="section">
          <div className="title-left">Upcoming Classes:</div>
          <div className="body-left">
            Your next class is scheduled for: <b>Monday, June 10.</b>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Home;
/* <div className="form_2">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div> */
