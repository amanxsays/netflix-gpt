import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from '../utils/constants';
import { addFavoritedMovies } from '../utils/movieSlice'

const useFavoritedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getFavMovies();
  }, []);

  const getFavMovies = async () => {
    const data = await fetch(
      "https://api.trakt.tv/movies/favorited/weekly",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addFavoritedMovies(json));
  };
};
export default useFavoritedMovies;
