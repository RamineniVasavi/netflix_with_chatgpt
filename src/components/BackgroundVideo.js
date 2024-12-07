import React from 'react'
import {  useSelector } from 'react-redux'
import useTrailer from "../Hooks/useTrailer"
const BackgroundVideo = ({ movieid }) => {
  const trailerstore=useSelector(store=>store.movies?.nowTrailer);
  // under movies videos api to Fetch all videos related to movie id like trailer , teaser ..etc
  useTrailer(movieid);
  return (
    <div className='w-full'>
      <iframe className='w-full aspect-video' src={"https://www.youtube.com/embed/"+trailerstore?.key+"?&autoplay=1&mute=1&loop=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay;mute;loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loop></iframe>
    </div>
  )
}

export default BackgroundVideo
