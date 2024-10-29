import React from 'react'
import logo from "../utils/Netflix_Logo_PMS.png"
const Header = () => {
  return (
    <div className='absolute mx-10 py-2 w-60 bg-gradient-to-tr from-black'>
      <img  src={logo} alt="logo"></img>
    </div>
  )
}

export default Header
