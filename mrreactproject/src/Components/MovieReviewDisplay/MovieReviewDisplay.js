import React from 'react'
import './MovieReviewDisplay.css'
import MovieCard from '../MovieCard/MovieCard'

const data = [
    {
        title: "Iron Man",
        entry: "Best Iron Man movie ever!",
        src: "/images/derpfrieza2.png",
        key: 1
    },
    {
        title: "Iron Man 2",
        entry: "Pretty good overall",
        src: '/images/derpfrieza2.png',
        key: 2
    }
]

function MovieReviewDisplay() {
  return (
    <div className='moviereview-display-container'>
        <img className='moviereview-display-background' src="./images/earthfromspace.jpg"></img>
        {data.map((item) => <MovieCard props={item} key={item.key}/>)}
        </div>
  )
}

export default MovieReviewDisplay