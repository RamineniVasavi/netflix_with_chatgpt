import React, { useState } from 'react'
import { IMAGE_URL } from '../utils/constants'
import Modal from './Modal';

const MovieCard = ({ id,poster }) => {
const [showModal,setShowModal]=useState(false);
if(!poster) return null;
 const showModalHandler=()=>{
  setShowModal(!showModal);
 }
  return (
    <div>
    <div className='w-36 pr-4'>
      <img alt="movie card" onClick={showModalHandler} src={IMAGE_URL+poster}></img>
    </div>
    <div className='fixed '>
    {showModal && <Modal id={id} onClose={()=>{setShowModal(false);
      document.body.style.overflow='';
    } 
  }/>}
    </div>
    </div>
  )
}

export default MovieCard
