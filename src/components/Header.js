import { useDispatch, useSelector } from 'react-redux';
import {auth} from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { removeUser } from '../utils/userSlice'
import { useState } from 'react';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {

  const [showBtn,setShowBtn]=useState(false);
  const dispatch=useDispatch();
  const selector=useSelector((store)=> store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='flex fixed top-0 h-48 bg-gradient-to-b from-black p-2 w-full z-10'>
      <div className=''>
        <img alt='phot' className='h-16' src={NETFLIX_LOGO}></img>
      </div>
      <div className='flex gap-2 absolute right-2 top-4'>
        <img alt='j' src={selector?.photoURL} className='rounded-md h-10 w-10'></img>
        <div>
          <button className={` text-white flex flex-col font-medium mt-2 cursor-pointer ${showBtn && 'focus:mt-0'}`}  onClick={()=>{setShowBtn(!showBtn)}}>{selector?.displayName} {showBtn?'▴':'▾'} </button>
          {showBtn && <button onClick={handleSignOut} className='text-white bg-red-600 rounded-sm font-bold ml-2 p-0.5' >Log Out</button>}
        </div>
      </div>
    </div>
  )
}

export default Header