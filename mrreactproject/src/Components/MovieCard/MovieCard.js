import React from 'react'
import './MovieCard.css'

function MovieCard({props}) {
  return (
    <div className='movie-card-container'>
        <img src={props.src} alt=''></img>
        <div className='project-card-entry'>
            <h1>{props.email}</h1>
            <p>
                {props.username}
            </p>
            <p>
                {props.password}
            </p>
        </div>
    </div>
  )
}

export default MovieCard