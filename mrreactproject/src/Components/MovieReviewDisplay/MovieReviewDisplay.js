import React, {useEffect, useState} from 'react'
import './MovieReviewDisplay.css'
import MovieCard from '../MovieCard/MovieCard'



function MovieReviewDisplay() {

  const [ users, setUsers ] = useState([])

  useEffect(() => {

    fetch("http://localhost:1027/users")
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => console.error(err))

  }, [])
  return (
    <div className='moviereview-display-container'>
        <img className='moviereview-display-background' src="./images/earthfromspace.jpg"></img>
        {users.map((user) => <MovieCard props={user} key={user._id}/>)}
        </div>
  )
}

export default MovieReviewDisplay