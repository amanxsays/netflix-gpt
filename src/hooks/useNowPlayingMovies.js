import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from '../utils/movieSlice'

const useNowPlayingMovies = () => {
  const dispatch=useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  },[]);

  const getNowPlayingMovies = async () => {
    const data1 = await fetch(
      'https://api.trakt.tv/movies/popular',
      API_OPTIONS
    );
    const data2= await fetch(
      'https://api.trakt.tv/movies/boxoffice',
      API_OPTIONS
    )
    const json1 = await data1.json();
    const json2 = await data2.json();
    const json=[...json1];
    json2.map((elt)=> json.push(elt.movie))
    dispatch(addNowPlayingMovies(json))
  };
};

export default useNowPlayingMovies;
