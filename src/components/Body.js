import { Outlet,useNavigate } from "react-router"
import { useEffect} from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"

const Body = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid, email:email, displayName:displayName , photoURL:photoURL}));
                navigate('/browse')
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/')
            }
        });
    },[])

  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Body