import React, { useEffect, useState } from 'react'
import useMovieDetails from '../Hooks/useMovieDetails';
import { TMDB_OPTIONS } from '../utils/constants'
const Modal = ({ id , onClose}) => {
  const [jsondata,setJsondata]=useState({});
  const MovieDetail=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+id, TMDB_OPTIONS);
    const json=await data.json();
    console.log(json);
    setJsondata(json);
   }
   useEffect(()=>{
    if(document.querySelector(".close")){
    document.querySelector(".close").focus();
    document.body.style.overflow='hidden';
    document.body.style.backgroundColor='blur';
    document.querySelector(".modal").style.overflow="scroll";
    if(document.querySelector(".search")){
      document.querySelector(".modal").setAttribute("style","margin-top:20px");
    }
    }
    MovieDetail();
   },[])
  return (
    <>{ jsondata &&
   <div className=' overflow-scroll modal fixed inset-0 z-[1000px] -mt-96 h-[500px] m-96 bg-white'>
      <div className='flex justify-between'>
      <h1 className='text-black text-3xl font-bold mx-4 mt-4 px-4 pt-4'>{jsondata?.original_title}</h1>
      <button className='text-white close px-2 mx-4 my-8 bg-red-500 cursor-pointer' onClick={onClose}>X</button>
      </div>
      <h1 className='text-bold px-4 mx-4 pb-2 pt-1 text-xl '>{jsondata?.release_date} &nbsp; {jsondata?.genres?.map(element => {
       return <span>{element.name} , </span>
      })}</h1>
      <h1 className='text-bold pl-4 ml-4 pb-2 text-xl font-bold'>Rating : {jsondata?.vote_average} ({jsondata?.vote_count})</h1>
      <h1 className='text-bold px-4 mx-4 pb-2 text-xl '>{jsondata?.tagline}</h1>
      <h1 className='text-bold px-4 mx-4 text-xl font-bold'>Overview</h1>
      <h1 className='px-4 mx-4 mb-4 text-xl'>{jsondata?.overview}</h1>
    </div>}
    </>
  )
}

export default Modal
