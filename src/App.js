import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Homework from './components/Homework'
import Schedule from './components/Schedule'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/homework" element={<Homework/>}></Route>
          <Route path="/schedule" element={<Schedule/>}></Route>
          </Routes>
      </Router>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
