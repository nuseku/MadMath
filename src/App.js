import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Homework from "./components/Homework";
import Schedule from "./components/Schedule";
import Signup from "./components/Signup";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/homework" element={<Homework />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
