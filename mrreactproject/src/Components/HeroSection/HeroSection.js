import React from 'react'
import './HeroSection.css'

function Body() {
    return (
        <div className='herocontainer'>
            <video className='covervideo' src='/videos/backgroundvideo.mp4' autoPlay loop muted></video>
            <h1>About MrStealth</h1>
            <p>This website is all about MrStealth</p>
        </div>
    )
}

export default Body
