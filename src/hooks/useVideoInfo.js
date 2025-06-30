import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { omdb_api_key } from "../utils/constants";
import { addVideoInfo } from "../utils/movieSlice";

const useVideoInfo=(imdb_id)=>{
    const dispatch=useDispatch();
    // const movie=useSelector((store)=> store.movies?.nowPlayingMovies);

    useEffect(()=>{
        getAllInfo();
    },[])

    const getAllInfo= async ()=>{
        const data= await fetch(`https://www.omdbapi.com/?i=${imdb_id}&apikey=${omdb_api_key}`);
        const json= await data.json();
        console.log(json);
        
        dispatch(addVideoInfo(json));
    }
}

export default useVideoInfo;