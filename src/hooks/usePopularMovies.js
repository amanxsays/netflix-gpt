import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addPopularMovies} from '../utils/movieSlice'

const usePopularMovies = () => {
  const dispatch=useDispatch();
  const selector=useSelector(store => store.movies.popularMovies)

  useEffect(() => {
    !selector && getPopularMovies();
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
