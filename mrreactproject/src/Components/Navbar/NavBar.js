import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function navbar() {
    return (
        <nav id="background-panel" style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/earthfromspace.jpg'})` 
          }}>
            <div>
                <Link to='/'>
                    Home
                </Link>
            </div>
            <div>
                FORTNITE
            </div>
            <div>
                <Link to='/Game'>
                Dragon Ball
                </Link>
            </div>
            <div>
                Twitch
            </div>
            <div>
                Youtube
            </div>
            <div>
                Discord
            </div>
        </nav>
    )
}

export default navbar
