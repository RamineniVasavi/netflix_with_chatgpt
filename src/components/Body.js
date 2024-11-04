import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice'
const Body = () => {
  const dispatch=useDispatch();
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        },]
    );
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid,email,displayName } = user;
          // if user sigin in or sign up 
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    },[])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
