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
                <Link to='/MovieReview'>
                    Games
                </Link>
            </div>
            <div>
                <a href='/games/DBC3.html'>Dragon Ball</a>
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
