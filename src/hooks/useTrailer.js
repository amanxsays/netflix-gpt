import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";

const useTrailer=(movie_id)=>{
    const dispatch=useDispatch();
    // const movie=useSelector((store)=> store.movies?.nowPlayingMovies);

    useEffect(()=>{
        getTrailer();
    },[])

    const getTrailer= async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?', API_OPTIONS);
        const json= await data.json();
        const trailer=json?.results.filter((video)=> video?.type==="Trailer");
        dispatch(addTrailer(trailer[trailer.length-1]?.key));
    }
}

export default useTrailer;