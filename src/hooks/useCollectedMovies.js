import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addCollectedMovies } from '../utils/movieSlice';

const useCollectedMovies = () => {
  const dispatch=useDispatch();

  useEffect(() => {
    getMovies();
  },[]);

  const getMovies = async () => {
    const data = await fetch(
      'https://api.trakt.tv/movies/collected/weekly',
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addCollectedMovies(json))
  };
}

export default useCollectedMovies