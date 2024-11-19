import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({ title,movies }) => {
    return movies && (
    <div>
        <div className=' p-6'>
         <h1 className='text-white text-3xl font-bold p-4'>{title}</h1>
        <div style={{"scrollbar-width":"none"}} className='flex  overflow-x-scroll no-scroll'>
        <div className='flex'>
        {movies?.map(movie=> <MovieCard key={movie.id} poster={movie.poster_path}/>)}
        </div>
        </div>
        </div>
    </div>
  )
}

export default MovieList
