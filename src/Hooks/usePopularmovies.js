import { useEffect } from "react";
import { TMDB_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularmovies } from '../utils/movieSlice'
const usePopularmovies= ()=>{
    // fetching movies from TMDB and storing in redux
  const dispatch=useDispatch();
  const playingMovies=useSelector((store)=>store.movies.popularmovies);
  const Popular=async ()=>{
   const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TMDB_OPTIONS);
   const json=await data.json();
   dispatch(addPopularmovies(json.results));
 }
 useEffect(()=>{
  !playingMovies && Popular();
 },[]);
}
export default usePopularmovies;