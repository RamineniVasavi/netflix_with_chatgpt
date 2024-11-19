import { useEffect } from "react";
import { TMDB_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedmovies } from '../utils/movieSlice'
const usePopularmovies= ()=>{
    // fetching movies from TMDB and storing in redux
  const dispatch=useDispatch();
  const playingMovies=useSelector((store)=>store.movies.TopRatedmovies);
  const TopRated=async ()=>{
   const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', TMDB_OPTIONS);
   const json=await data.json();
   dispatch(addTopRatedmovies(json.results));
 }
 useEffect(()=>{
   !playingMovies && TopRated();
 },[]);
}
export default usePopularmovies;