import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies=useSelector((store)=> store.movies?.nowPlayingMovies)
  
  if(!movies) return;

  const trailer=movies[0];
  
  return (
    <div>
        <VideoBackground movie_id={trailer?.id}/>
        <VideoTitle trailer={trailer}/>
    </div>
  )
}

export default MainContainer