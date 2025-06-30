import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
  const dispatch=useDispatch();

  useEffect(() => {
    getTrendingMovies();
  },[]);

  const getTrendingMovies = async () => {
    const data = await fetch(
      'https://api.trakt.tv/movies/trending',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json))
  };
}

export default useTrendingMovies