import React from 'react';
import './Navbar.css';
function navbar() {
    return (
        <div id="background-panel" style={{ 
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
                Marvel
            </div>
            <div>
                DC
            </div>
        </div>
    )
}

export default navbar
