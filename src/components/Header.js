import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            {/*eslint-disable-next-line*/}
            <a href="/home">
            <img src = "https://d1.awsstatic.com/Customer%20References%20Directory%20Logos/Capital-One_Logo_%401x.0aef0b700254d3f618484ff03747100753de3d64.png"></img>
            </a>
            <Link to="/"><h1 className="appname">Budget Tracker</h1></Link>
                <div className="links">
                    <Link to="/home">Home</Link>
                    <Link to="/budget">Budget</Link>
                    <Link to="/rewards">Rewards</Link>
                </div>
        </div>
    )
}

export default Header