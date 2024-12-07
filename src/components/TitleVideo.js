import React from 'react'
import Header from './Header'
import Modal from './Modal';
const TitleVideo = ({title,overview}) => {
  const showHandler=()=>{
  document.getElementById("moreinfotext").style.display="block";
  }
  return (
    <div className='absolute w-full'>
      <Header/>
    <div className='  pt-60 pl-12 aspect-video max-[500px]:aspect-[11/9] text-white'>
      <h1 className='text-3xl font-bold max-[500px]:text-xl max-[500px]:-mt-[50px] max-[400px]:-mt-[40%]'>{title}</h1>
      <p id="moreinfotext" className='bg-gradient-to-tr from-zinc-950 hidden max-[1024px]:sr-only w-3/6 p-6 text-lg '>{overview}</p>
      <div className='flex '>
      <button onClick={showHandler} className=' max-[1024px]:sr-only lg:block hidden text-xl bg-white hover:bg-opacity-70 text-black px-10 py-2 my-2 rounded-lg'>More info</button>
     </div>
    </div>
    </div>
  )
}

export default TitleVideo
