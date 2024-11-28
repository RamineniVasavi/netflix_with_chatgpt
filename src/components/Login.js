import React, { useRef, useState } from 'react'
import Header from './Header'
import { FormValidation,SignFormValidation } from '../utils/FormValidation'
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMAGE,USER_LOGO } from "../utils/constants"
import Modal from './Modal';
const Login = () => {
  const dispatch=useDispatch();
  const [isSignIn,setIsSignIn]=useState(true);
  const [errorMessage,setErrorMessage]=useState(0);
  const SignHandler=()=>{// resetting error messges on toggle b/w signup and signin
    setIsSignIn(!isSignIn);
    document.getElementById("emailerror").innerText="";
    document.getElementById("passworderror").innerText="";
    if(!isSignIn){
    document.getElementById("nameerror").innerText="";  
    }
  }
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const FormValidator=()=>{
    if(!isSignIn){
    //sign up validation
      setErrorMessage(SignFormValidation(email.current.value,password.current.value,name.current.value));
    }
    else{
    //sign in validation
      setErrorMessage(FormValidation(email.current.value,password.current.value));
    }
    // Sign in or sign up, if user enters correct credentials
    if(!errorMessage){
      if(!isSignIn){
        // got the below authentication code from firebase doc https://firebase.google.com/docs/auth/web/password-auth
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, photoURL: USER_LOGO
              }).then(() => {
                // Profile updated!
                // once our profile name is updated we need to update our store .
                //our credds will get updated bcz we have onAuthStateChanged func in body but to update name we should get name from auth and update store  
                const { uid,email,displayName } = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message);
              });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+"-"+errorMessage);
            });
          }
          else{
            //sigin login
             signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+"-"+errorMessage);
            });
         }
    }
  }
  return (
    <div >
      <div className='absolute'>
        <Header />
        <img src={BACKGROUND_IMAGE}  alt="Background movies"></img>
      </div>
      <form onClick={(e)=>e.preventDefault()} className='p-10 absolute w-3/12 border border-black  top-[30%] right-[37%] text-white bg-opacity-80 bg-black'>
        <h2 className='font-bold text-3xl mx-2 py-3'>{isSignIn?"Sign In":"Sign Up"}</h2>
        {!isSignIn && <>
        <input ref={name} className='p-3 my-4 mx-2 w-full border border-black rounded-sm bg-gray-600' placeholder='Full Name'></input>
        <p id="nameerror" className=' mx-2 text-red-500'></p></>
        }
        <input ref={email} type="text" placeholder='Email Address' className="p-3 my-4 mx-2 w-full border border-black rounded-sm bg-gray-600"></input>
        <p id="emailerror" className=' mx-2 text-red-500'></p>
        <input ref={password} type="password" placeholder='Password' className='p-3 my-4 mx-2 w-full border border-black rounded-sm bg-gray-600'></input>
        <p id="passworderror" className=' mx-2 text-red-500'></p>
        <button onClick={FormValidator} className='p-3 my-4 mx-2 w-full bg-red-500 rounded-sm'>{isSignIn?"Sign In":"Sign Up"}</button>
        <p className='cursor-pointer hover:underline' onClick={SignHandler}>{isSignIn?"New to Netflix? Sign Up Now":"Already registered? Sign In Now."}</p>
      </form>
    </div>
  )
}

export default Login
