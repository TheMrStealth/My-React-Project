import React from 'react'
import './HeroSection.css'

function Body() {
    return (
        <div className='herocontainer'>
            <video className='covervideo' src='/videos/backgroundvideo.mp4' autoPlay loop muted></video>
            <h1>About RJ Gillette</h1>
            <p>This Website Is All About Me</p>
        </div>
    )
}

export default Body
