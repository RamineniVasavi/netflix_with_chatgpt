import React, { useEffect, useState } from 'react'
import { TMDB_OPTIONS } from '../utils/constants'
import { json } from 'react-router-dom';
const useMovieDetails = (id) => {
   // const [data,setData]=useState();
    const MovieDetail=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+id, TMDB_OPTIONS);
        const value=await data.json();
        console.log(value);
        return value;
       }
    useEffect(()=>{
        MovieDetail();
},[])
}
export default useMovieDetails;
