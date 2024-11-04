import React, { useRef, useState } from 'react'
import Header from './Header'
import { FormValidation,Namevalidation } from '../utils/FormValidation'
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const Navigate=useNavigate();
  const dispatch=useDispatch();
  const [isSignIn,setIsSignIn]=useState(true);
  const [errorMessage,setErrorMessage]=useState("");
  const SignHandler=()=>{
    setIsSignIn(!isSignIn);
    setErrorMessage("");
  }
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const FormValidator=()=>{
      if(!isSignIn){
        //sign up validation
      setErrorMessage(FormValidation(email.current.value,password.current.value));
      if(errorMessage===null || errorMessage==="Enter Name"){
      setErrorMessage(Namevalidation(name.current.value));
      }
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
              Navigate("/browse");
              updateProfile(user, {
                displayName: name.current.value, photoURL: "https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
              console.log(user);
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
              Navigate("/browse");
              console.log(user);
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
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg"  alt="Background image"></img>
    </div>
    <form onClick={(e)=>e.preventDefault()} className='p-10 absolute w-3/12 border border-black  top-[30%] right-[37%] text-white bg-opacity-80 bg-black'>
      <h2 className='font-bold text-3xl mx-2 py-3'>{isSignIn?"Sign In":"Sign Up"}</h2>
      {!isSignIn &&<input ref={name} className='p-3 my-4 mx-2 w-full border border-black rounded-sm bg-gray-600' placeholder='Full Name'></input>}
      <input ref={email} type="text" placeholder='Email Address' className="p-3 my-4 mx-2 w-full border border-black rounded-sm bg-gray-600"></input>
      <input ref={password} type="password" placeholder='Password' className='p-3 my-4 mx-2 w-full border border-black rounded-sm bg-gray-600'></input>
      {errorMessage&& <p className=' mx-2 text-red-500'>{errorMessage}</p>}
      <button onClick={FormValidator} className='p-3 my-4 mx-2 w-full bg-red-500 rounded-sm'>{isSignIn?"Sign In":"Sign Up"}</button>
      <p className='cursor-pointer hover:underline' onClick={SignHandler}>{isSignIn?"New to Netflix? Sign Up Now":"Already registered? Sign In Now."}</p>
    </form>
    </div>
  )
}

export default Login
