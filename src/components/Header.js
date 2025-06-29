import { useDispatch, useSelector } from 'react-redux';
import {auth} from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { removeUser } from '../utils/userSlice'
import { useState } from 'react';

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
    <div className='flex justify-between'>
      <div className=''>
        <img alt='photo' className='h-12' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>
      </div>
      <div className='flex gap-2'>
        <img alt='profileLogo' src={selector?.photoURL} className='rounded-md h-10 w-10'></img>
        <div>
          <button className={` text-white flex flex-col font-medium mt-2 cursor-pointer ${showBtn && 'focus:mt-0'}`}  onClick={()=>{setShowBtn(!showBtn)}}>{selector?.displayName} {showBtn?'▴':'▾'} </button>
          {showBtn && <button onClick={handleSignOut} className='text-white bg-red-500 rounded-sm font-bold ml-2 p-0.5' >Log Out</button>}
        </div>
      </div>
    </div>
  )
}

export default Header