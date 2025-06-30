import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";

const useTrailer=(imdb_id)=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        getTrailer();
    },[])

    const getTrailer= async ()=>{
        const data= await fetch(`https://api.trakt.tv/movies/${imdb_id}/videos`, API_OPTIONS);
        const json= await data.json();
        const trailer=json.filter((video)=> video?.type==="trailer");  
        dispatch(addTrailer(trailer[0]?.url.substring(28)));
    }
}

export default useTrailer;