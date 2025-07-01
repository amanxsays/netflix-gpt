import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import useTrendingMovies from "../hooks/useTrendingMovies"
import useFavoritedMovies from "../hooks/useFavoritedMovies"
import useBoxOfficeMovies from "../hooks/useBoxOfficeMovies"
import useCollectedMOvies from "../hooks/useCollectedMovies"


const SecondaryContainer = () => {
  const selector=useSelector((store)=> store.movies)
  useTrendingMovies();
  useFavoritedMovies();
  useBoxOfficeMovies();
  useCollectedMOvies();


  return (
    <div className="text-white md:font-base text-sm md:top-[-20vh] top-[-32vh] px-4 pt-4 mt-2 relative w-full">
      <MovieList title={'Popular'} movieList={selector.popularMovies}/>
      <MovieList title={'Trendings'} movieList={selector.trendingMovies}/>
      <MovieList title={'Box Office'} movieList={selector.boxOfficeMovies}/>
      <MovieList title={'Favorited'} movieList={selector.favoritedMovies}/>
      <MovieList title={'Collected'} movieList={selector.collectedMovies}/>
    </div>
  )
}

export default SecondaryContainer