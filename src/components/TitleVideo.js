import React from 'react'
import Header from './Header'
const TitleVideo = ({title,overview}) => {
  return (
    <div className='absolute'>
      <Header/>
    <div className='py-60 px-12 aspect-video bg-gradient-to-tr from-zinc-950 text-white'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-3/6 py-6 text-lg'>{overview}</p>
      <div className='flex'>
        <button className=' text-xl bg-white hover:bg-opacity-70 text-black px-10 py-2 rounded-lg'>Play</button>
        <button className='ml-2 text-xl bg-white hover:bg-opacity-70 text-black px-10 py-2 rounded-lg'>More info</button>
     </div>
    </div>
    </div>
  )
}

export default TitleVideo
