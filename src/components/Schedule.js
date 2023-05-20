import React from "react";
import "./Schedule.css";
import Header from "./Header";

const Schedule = () => {
  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="sub-container">
        <div className="sub-container">
          <div className="section">
            <div className="title-left">
              Your schedule for the upcoming m,nth
            </div>
            <div className="body-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
