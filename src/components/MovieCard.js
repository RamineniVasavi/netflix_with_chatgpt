import React from 'react'
import { IMAGE_URL } from '../utils/constants'

const MovieCard = ({ poster }) => {
  if(!poster) return null;
  return (
    <div className='w-36 pr-4'>
      <img alt="movie card" src={IMAGE_URL+poster}></img>
    </div>
  )
}

export default MovieCard
