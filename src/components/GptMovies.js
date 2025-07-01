import { useSelector } from "react-redux"
import MovieCard from './MovieCard'
import { SiGrafana } from "react-icons/si";


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

//<span className="absolute left-[100vh] -z-10 mt-10 inline-block animate-[spin_3s_linear_infinite]"><SiGrafana className="scale-[800%] "/></span>
