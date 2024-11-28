import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
const { moviesArray,MovieData }=useSelector(store=>store.Gpt);// movies array from gpt and data from tmdb
 if(!moviesArray) return null;
  return (
    <div className='bg-black bg-opacity-90'>
      {moviesArray.map((item,index)=><MovieList key={item} title={item} movies={MovieData[index]} />)}
    </div>
  )
}

export default GptMovieSuggestions
