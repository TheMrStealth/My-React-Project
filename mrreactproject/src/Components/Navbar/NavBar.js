import React from 'react';
import './Navbar.css';
function navbar() {
    return (
        <nav id="background-panel" style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/earthfromspace.jpg'})` 
          }}>
            <div>
                Home
            </div>
            <div>
                FORTNITE
            </div>
            <div>
                Dragon Ball
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
