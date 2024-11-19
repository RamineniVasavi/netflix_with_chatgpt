import { useEffect } from "react";
import { TMDB_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowplayingmovies } from '../utils/movieSlice'
const useNowPlayingMovies= ()=>{
    // fetching movies from TMDB and storing in redux
  const dispatch=useDispatch();
  const playingMovies=useSelector((store)=>store.movies.nowPlayingMovies);
  const Now_Playing=async ()=>{
   const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', TMDB_OPTIONS);
   const json=await data.json();
   dispatch(addNowplayingmovies(json.results));
 }
 useEffect(()=>{
  // to prevent fetching multiple times.
   !playingMovies && Now_Playing();// if we dont have movies in our store then only we should make api call
 },[]);
}
export default useNowPlayingMovies;