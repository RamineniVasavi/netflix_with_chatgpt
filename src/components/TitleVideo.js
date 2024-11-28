import React from 'react'
import Header from './Header'
import Modal from './Modal';
const TitleVideo = ({title,overview}) => {
  const showHandler=()=>{
  document.getElementById("moreinfotext").style.display="block";
  }
  return (
    <div className='absolute sm:w-full'>
      <Header/>
    <div className='pt-60 pl-12 aspect-video  from-zinc-950 text-white'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p id="moreinfotext" className='hidden max-[1024px]:sr-only w-3/6 py-6 text-lg'>{overview}</p>
      <div className='flex'>
      <button onClick={showHandler} className='ml-2 max-[1024px]:sr-only lg:block hidden text-xl bg-white hover:bg-opacity-70 text-black px-10 py-2 rounded-lg'>More info</button>
     </div>
    </div>
    </div>
  )
}

export default TitleVideo
