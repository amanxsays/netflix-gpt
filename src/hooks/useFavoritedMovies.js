import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from '../utils/constants';
import { addFavoritedMovies } from '../utils/movieSlice'

const useFavoritedMovies = () => {
  const dispatch = useDispatch();
  const selector=useSelector(store => store.movies.favoritedMovies)

  useEffect(() => {
    !selector && getFavMovies();
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
