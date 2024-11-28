import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondContainer = () => {
  const movie=useSelector(store=>store.movies);
  console.log(movie.nowPlayingMovies);
  return (
    <div className='bg-black'>
      <div className='lg:-mt-44 translate-x-0'>
     <MovieList title="Now Playing" movies={movie.nowPlayingMovies}/>
     <MovieList title="Popular" movies={movie.popularmovies}/>
     <MovieList title="Top Rated" movies={movie.TopRatedmovies}/>
     <MovieList title="Upcoming" movies={movie.Upcomingmovies}/>
</div>
    </div>
  )
}

export default SecondContainer
