import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="imgStorage">
        <a href="/home">
          <img
            className="logo"
            src="https://raw.githubusercontent.com/gist/curran/74cb4d255acf072633a2df0d9b9be7c3/raw/af69e737cc2477ce8318f885dbd4664cc999638e/thumbnail.png"
            alt="Logo"
          />
        </a>
      </div>
      <div className="webTitle">
        <Link to="/home">
          <p className="appname">Luna Math</p>
        </Link>
      </div>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/homework">Homework</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default Header;
