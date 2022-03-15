import React from 'react'
import './MovieReviewDisplay.css'
import MovieCard from '../MovieCard/MovieCard'



function MovieReviewDisplay() {
  return (
    <div className='moviereview-display-container'>
        <img className='moviereview-display-background' src="./images/earthfromspace.jpg"></img>
        {data.map((item) => <MovieCard props={item} key={item.key}/>)}
        </div>
  )
}

export default MovieReviewDisplay