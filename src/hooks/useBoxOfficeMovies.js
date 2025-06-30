import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addBoxOfficeMovies } from "../utils/movieSlice";

const useBoxOfficeMovies = () => {
  const dispatch=useDispatch();

  useEffect(() => {
    getMovies();
  },[]);

  const getMovies = async () => {
    const data = await fetch(
      'https://api.trakt.tv/movies/boxoffice',
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addBoxOfficeMovies(json))
  };
}

export default useBoxOfficeMovies