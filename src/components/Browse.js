import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import usePopularmovies from '../Hooks/usePopularmovies';
import useTopRatedMovies from '../Hooks/useTopRatedmovies';
import useUpcomingmovies from '../Hooks/useUpcomingmovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
const Browse = () => {
  useNowPlayingMovies();
  usePopularmovies();
  useTopRatedMovies();
  useUpcomingmovies();
  const gptview=useSelector(store=>store.Gpt.ShowGpt);
  return (
    gptview ? <GptSearch/> :
    <div>
      <MainContainer/>
      <SecondContainer/>
      </div>
  )
}

export default Browse
