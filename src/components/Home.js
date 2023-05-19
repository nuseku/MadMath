import React from 'react'
import Header from './Header'
import './Home.css'

const Home = () =>{
    return(
        
        <div className = "main-container">
            <div className = "header">
                <Header />
            </div>
            <div className = "welcome">
                <a href="https://www.google.com" target="_blank">Google</a>
                <h4> Hello! Welcome to Nuray's tutoring service! Log in to get started.</h4>
            </div>
            
        </div>
    )
}

export default Home