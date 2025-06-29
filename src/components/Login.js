import { checkValidData } from '../utils/validate';
import { useRef, useState } from 'react'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { updateProfile } from 'firebase/auth';
import { NETFLIX_BG, NETFLIX_LOGO, RANDOM_IMG } from '../utils/constants';

const Login = () => {
  const [isSignInPage,setIsSignInPage]=useState(true);
  const [error,setError]=useState([true,true]);
  const [customError,setCustomError]=useState(null);

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleSubmit=()=>{
    setError(checkValidData(email.current.value,password.current.value));
    if(!error[0] || !error[1]) return;
  
    if(!isSignInPage){
      createUserWithEmailAndPassword( auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: RANDOM_IMG+name.current.value
          }).then(() => {
            // Profile updated!
          }).catch((error) => {
            // An error occurred
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setCustomError(errorCode+' '+errorMessage);
        // ..
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setCustomError(errorCode+' '+errorMessage);
      });
    }
  }

  const handleToggle=()=>{
    setIsSignInPage(!isSignInPage);
  }


  return (
    <div>
      {/* bg */}
      <div className='h-screen w-screen overflow-hidden'>
        <div className='bg-black opacity-50 absolute w-full h-full'></div>
        <img alt='h' src={NETFLIX_BG}></img>
      </div>

      {/* header and login page */}
      <div className='absolute z-10 left-32 top-1'>
        <img alt='phot' className='h-20' src={NETFLIX_LOGO}></img>
      </div>
      <div className='h-[85vh] w-[70vh] top-20 left-[0.70vh] absolute bg-[#000000d3]'>
        <h1 className='text-white text-3xl font-bold mt-16 mx-10 mb-7'>{isSignInPage?'Sign In':'Sign up' }</h1>
        <form className="mx-2" onSubmit={(e)=>e.preventDefault()}>
          {!isSignInPage && <div tabIndex={0} className='group w-10/12 relative h-14 mx-8 my-4 bg-[#212121cc] border border-neutral-600 rounded-md focus-within:border-white focus-within:border-2'>
            <div className='absolute text-[#959292c5] opacity-0 group-hover: p-1 group-hover:opacity-100 group-hover:text-xs'>Enter your full name</div>
            <input ref={name} className='absolute w-full h-full pl-3 bg-transparent outline-none caret-white text-white group-hover:placeholder-opacity-0  placeholder-zinc-300 ' placeholder='Enter your full name'></input>
          </div>}
          <div tabIndex={0} className={`group w-10/12 relative h-14 mx-8 my-3 bg-[#212121cc] border ${!error[0]?'border-red-600 mb-1':'border-neutral-600'} rounded-md focus-within:border-white focus-within:border-2`}>
            <div className='absolute text-[#959292c5] opacity-0 group-hover: p-1 group-hover:opacity-100 group-hover:text-xs'>Email or mobile number</div>
            <input ref={email} className='absolute w-full h-full pl-3 bg-transparent outline-none caret-white text-white group-hover:placeholder-opacity-0  placeholder-zinc-300 ' placeholder='Email or phone number'></input>
          </div>
          {!error[0] && <p className='text-red-600 text-sm ml-10 mb-1 font-medium'>⊗ Please enter a valid email or phone number.</p>}
          <div tabIndex={0} className={`group w-10/12 relative h-14 mx-8 my-3 bg-[#212121cc] border ${!error[1]?'border-red-600 mb-1':'border-neutral-600'} rounded-md focus-within:border-white focus-within:border-2`}>
            <div className='absolute text-[#959292c5] opacity-0 group-hover: p-1 group-hover:opacity-100 group-hover:text-xs'>Password</div>
            <input ref={password} type='password' className='absolute w-full h-full pl-3 bg-transparent outline-none caret-white text-white group-hover:placeholder-opacity-0  placeholder-zinc-300' placeholder='Password'></input>
          </div>
          {!error[1] && <p className='text-red-600 text-sm ml-10 mb-1 font-medium'>⊗ Please enter a valid password.</p>} 
          {customError!=null && <p className='text-red-600 text-sm ml-10 mb-1 font-medium'>⊗{customError}</p>} 
          <button className='bg-red-600 text-white w-10/12 mx-8 my-2 h-10 rounded-md font-medium' onClick={handleSubmit}>{isSignInPage?'Sign In':'Sign up'}</button>
          <div className='text-zinc-500 mt-4 ml-10 font-medium flex gap-1'>{!isSignInPage?'Already registered?':'New to Netflix?' }<p className='text-white font-medium cursor-pointer' onClick={handleToggle}>{!isSignInPage?'Sign In now.':'Sign up now.' }</p></div>
        </form>
      </div>
    </div>
  )
}

export default Login