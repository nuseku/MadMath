import React from "react";
import "./Homework.css";
import Header from "./Header";

const Homework = () => {
  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="sub-container">
        <div className="section">
          <div className="title-left">Welcome to your Homework Page,</div>
          <div className="body-left">
            You are all caught up with your assignments... Good work!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework;
