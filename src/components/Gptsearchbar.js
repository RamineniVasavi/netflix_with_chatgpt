import React, { useRef } from 'react'
import openai from '../utils/openAi';
import { TMDB_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { Gpt_Tmdb_Searches } from '../utils/Gptslice';

const Gptsearchbar = () => {
  const invalue=useRef(null);
  const dispatch=useDispatch();
  const searchMovie= async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', TMDB_OPTIONS);
    const details=await data.json();
   return details.results;
  }
  const OpenAihandler= async()=>{
    //https://platform.openai.com/docs/libraries
   const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query or find the movie : " +
    invalue.current.value +
    ". only give me names of 20 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const completion = await openai.chat.completions.create({
     messages:[{role:"user",content:gptQuery}],
     model:"gpt-4o-mini"
    });
  
    console.log(completion.choices?.[0]?.message?.content);
    // completion is a string of movies seperated by , like superbad, step brother .
    // we split the string sperated by , into array
    const gptMovies=completion.choices?.[0]?.message?.content.split(",");
    
    const PromiseArray=gptMovies.map(item=>searchMovie(item));// Returns promises
    const TmdbResults=await Promise.all(PromiseArray);
    console.log(TmdbResults);
    dispatch(Gpt_Tmdb_Searches({moviesArray:gptMovies,MovieData:TmdbResults}));
  }
  return (
    <div className='pt-[15%] flex justify-center'>
    <form className='bg-black p-2 grid grid-cols-12' onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" ref={invalue} className='p-2 m-4 border col-span-10' placeholder='what would you like to watch?'></input>
        <button className='bg-red-600 rounded-sm col-span-2 my-4 py-2 mx-4 px-4 search' onClick={OpenAihandler}>Search</button>
    </form>
    </div>
  )
}

export default Gptsearchbar
