import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
  const dispatch=useDispatch();
  const selector=useSelector(store => store.movies.trendingMovies)

  useEffect(() => {
    !selector && getTrendingMovies();
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