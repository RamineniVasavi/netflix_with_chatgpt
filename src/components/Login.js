import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const [isSignIn,setIsSignIn]=useState(true);
  const SignHandler=()=>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div >
    <div className='absolute'>
      <Header />
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg"  alt="Background image"></img>
    </div>
    <form className='p-10 absolute w-3/12 border border-black  top-[35%] right-[37%] text-white bg-opacity-80 bg-black'>
      <h2 className='font-bold text-3xl mx-2 py-3'>{isSignIn?"Sign In":"Sign Up"}</h2>
      {!isSignIn &&<input className='p-3 my-4 mx-2 w-full border border-black rounded-sm bg-gray-600' placeholder='Full Name'></input>}
      <input type="text" placeholder='Email Address' className="p-3 my-4 mx-2 w-full border border-black rounded-sm bg-gray-600"></input>
      <input type="password" placeholder='Password' className='p-3 my-4 mx-2 w-full border border-black rounded-sm bg-gray-600'></input>
      <button className='p-3 my-4 mx-2 w-full bg-red-500 rounded-sm'>{isSignIn?"Sign In":"Sign Up"}</button>
      <p className='cursor-pointer' onClick={SignHandler}>{isSignIn?"New to Netflix? Sign Up Now":"Already registered? Sign In Now."}</p>
    </form>
    </div>
  )
}

export default Login
