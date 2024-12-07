import React from 'react'
import { useEffect } from 'react'
import logo from "../utils/Netflix_Logo_PMS.png"
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { USER_LOGO } from '../utils/constants'
import { ToggleGpt,Gpt_Tmdb_Searches } from '../utils/Gptslice'
import Modal from './Modal';
const Header = () => {
  const user=useSelector(store=>store.User);
  const showgpt=useSelector(store=>store.Gpt.ShowGpt);
 const navigate=useNavigate();
 const dispatch=useDispatch();
 useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const { uid,email,displayName } = user;
      // if user sigin in or sign up 
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      navigate("/browse");
    } else {
      // User is signed out
      dispatch(removeUser());
      navigate("/");
    }
  });
    // onAuthStateChanged will return a unsubscribe function . unsubscribe when component unmounts
    return ()=>unsubscribe();
},[])
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const Gpthandler=()=>{
    dispatch(Gpt_Tmdb_Searches({}));
     dispatch(ToggleGpt());
  }
  return (
    <div className='absolute flex bg-gradient-to-tr black h-[80px]  py-2  w-full text-white  from-zinc-950 justify-between'>
      <img className=' md:h-12 m-4' src={logo} alt="logo"></img>
      {user && <div className='flex  md:h-12 m-4'>
        <button onClick={Gpthandler} className='bg-purple-800 text-white mx-2 md:px-4 rounded-sm '>{showgpt?"Home":"Gpt Search"}</button>
        <img alt="user icon" src={USER_LOGO}></img>
         <button className='md:p-2 hover:underline' onClick={handleSignout}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header
