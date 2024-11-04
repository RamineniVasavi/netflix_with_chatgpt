import React from 'react'
import logo from "../utils/Netflix_Logo_PMS.png"
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const user=useSelector(store=>store.User);
 const navigate=useNavigate();
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute flex py-2 h-24 w-screen bg-gradient-to-tr from-black justify-between'>
      <img className='w-40 h-24 mx-10' src={logo} alt="logo"></img>
      {user && <div className='flex h-12 m-4'>
        <img alt="user icon" src="https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"></img>
         <button className='p-2 hover:underline' onClick={handleSignout}>(Sign Out)</button>
      </div>}
    
    </div>
  )
}

export default Header
