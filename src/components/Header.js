import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
import { useState } from "react";
import { SiOpenai } from "react-icons/si";
import { NETFLIX_LOGO } from "../utils/constants";
import {toggleGptPage} from '../utils/gptSlice'
import { FaHome } from "react-icons/fa";


const Header = () => {
  const [showBtn, setShowBtn] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptPage);

  const handleToggle=() => {
    dispatch(toggleGptPage());
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex fixed top-0 h-[22vh] bg-gradient-to-b from-black p-2 w-full z-20">
      <div className="">
        <img alt="phot" className="h-16" src={NETFLIX_LOGO}></img>
      </div>
      <div>
        <button onClick={handleToggle} className="relative top-2 left-[148vh] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-black group-hover:from-red-600 group-hover:to-black hover:text-white dark:text-white  focus:outline-none dark:focus:ring-red">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:scale-125">
            {!showGpt?<span className="inline-block animate-[spin_3s_linear_infinite]"><SiOpenai className="scale-[170%]"/></span>:<span className="inline-block animate-[bounce_1s_linear_infinite]"><FaHome className="scale-[190%] -mb-0.5"/></span>}
          </span>
        </button>
      </div>
      <div className="flex gap-2 absolute right-2 top-4">
        <img
          alt="j"
          src={selector?.photoURL}
          className="rounded-md h-10 w-10"
        ></img>
        <div>
          <button
            className={` text-white flex flex-col font-medium mt-2 cursor-pointer ${
              showBtn && "focus:mt-0"
            }`}
            onClick={() => {
              setShowBtn(!showBtn);
            }}
          >
            {selector?.displayName} {showBtn ? "▴" : "▾"}{" "}
          </button>
          {showBtn && (
            <button
              onClick={handleSignOut}
              className="text-white bg-red-600 rounded-sm font-bold ml-2 p-0.5"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
