import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addPopularMovies} from '../utils/movieSlice'

const usePopularMovies = () => {
  const dispatch=useDispatch();

  useEffect(() => {
    getPopularMovies();
  },[]);

  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.trakt.tv/movies/popular',
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addPopularMovies(json))
  };
};

export default usePopularMovies;
