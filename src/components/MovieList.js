import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({ title,movies }) => {
    return movies && (
    <div>
        <div className=' px-6'>
         <h1 className='text-white text-3xl font-bold min-[800px]:p-4 max-[800px]:text-xl'>{title}</h1>
        <div style={{"scrollbar-width":"none"}} className='flex  overflow-x-scroll'>
        <div className='flex'>
        {movies?.map(movie=> <MovieCard key={movie.id} id={movie.id} poster={movie.poster_path}/>)}
        </div>
        </div>
        </div>
    </div>
  )
}

export default MovieList
