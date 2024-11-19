import React from 'react'
import TitleVideo from './TitleVideo'
import BackgroundVideo from './BackgroundVideo'
import { useSelector } from 'react-redux'
import Header from './Header'
const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;// if we dont have movies it wont go to next line just returns.
    const firstMovie =movies[0]; // if we have null, this wont break 
    const { id,original_title,overview }=firstMovie;
    return (
    <div >
      <TitleVideo title={original_title}  overview={overview}/>
      <BackgroundVideo movieid={id}/>
    </div>
  )
}

export default MainContainer
