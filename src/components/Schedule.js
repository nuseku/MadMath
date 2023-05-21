import React, { useState } from "react";
import Header from "./Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Schedule.css";

const Schedule = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="sub-container">
        <div className="section">
          <div className="title-left">
            Your schedule for the upcoming month,
          </div>
          <div className="body-left">
            <div className="cal">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
