import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      {/* bg */}
      <div className='h-screen w-screen overflow-hidden'>
        <div className='bg-black opacity-50 absolute w-full h-full'></div>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg'></img>
      </div>

      {/* header and login page */}
      <Header/>
      <div className='h-[85vh] w-[70vh] top-20 left-[0.70vh] absolute bg-[#000000d3]'>
        <form className="mx-2 mt-20">
          <div tabIndex={0} className='group w-10/12 relative h-14 mx-8 my-2 bg-[#212121cc] border border-neutral-600 rounded-md focus-within:border-white'>
            <div className='absolute text-[#959292c5] opacity-0 group-hover: p-1 group-hover:opacity-100 group-hover:text-xs'>Email or mobile number</div>
            <input className='absolute w-full h-full pl-3 bg-transparent outline-none caret-white text-white group-hover:placeholder-opacity-0  placeholder-zinc-300 ' placeholder='Email or phone number'></input>
          </div>
          <div tabIndex={0} className='group w-10/12 relative h-14 mx-8 my-2 bg-[#212121cc] border border-neutral-600 rounded-md focus-within:border-white'>
            <div className='absolute text-[#959292c5] opacity-0 group-hover: p-1 group-hover:opacity-100 group-hover:text-xs'>Password</div>
            <input className='absolute w-full h-full pl-3 bg-transparent outline-none caret-white text-white group-hover:placeholder-opacity-0  placeholder-zinc-300' placeholder='Password'></input>
          </div>
          <button></button>
        </form>
      </div>
      
    </div>
  )
}

export default Login