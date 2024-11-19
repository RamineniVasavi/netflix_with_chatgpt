import React from 'react'
import Header from './Header'
import Gptsearchbar from './Gptsearchbar'
import { BACKGROUND_IMAGE } from "../utils/constants"
import GptMovieSuggestions from './GptMovieSuggestions'
const GptSearch = () => {
  return (
    <div>
     <img src={BACKGROUND_IMAGE} className='fixed -z-20' alt="Background movies"></img>
      <Header/>
      <Gptsearchbar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
