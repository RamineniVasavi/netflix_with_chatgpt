import { useEffect } from "react";
import { TMDB_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingmovies } from '../utils/movieSlice'
const useUpcomingmovies= ()=>{
    // fetching movies from TMDB and storing in redux
  const dispatch=useDispatch();
  const upcomingMovie=useSelector((store)=>store.movies.Upcomingmovies);
  const upComing=async ()=>{
    // check the below link if we dont get data
    //https://developer.themoviedb.org/reference/movie-upcoming-list
  const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', TMDB_OPTIONS);
   const json=await data.json();
   console.log(json);
   dispatch(addUpcomingmovies(json.results));
 }
 useEffect(()=>{
  // this is memoization . we will do api calls only if needed
   !upcomingMovie && upComing();
 },[]);
}
export default useUpcomingmovies;