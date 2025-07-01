import { useSelector } from "react-redux"
import MovieCard from './MovieCard'


const GptMovies = () => {
  const gptMovies=useSelector((store) => store.gpt.gptMovies)
  if(!gptMovies) return;
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {gptMovies.map((imdb)=> <MovieCard key={imdb} imdb={imdb}/>)}
      </div>
    </div>
  )
}

export default GptMovies
