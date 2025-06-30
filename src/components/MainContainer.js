import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies=useSelector((store)=> store.movies?.popularMovies)
  
  if(!movies) return <div className='w-screen h-screen bg-black absolute'></div>;

  const trailer=movies[0];
  
  return (
    <div className='w-full h-[100vh] relative'>
    <div>
        <VideoBackground imdb_id={trailer?.ids?.imdb}/>
        <VideoTitle imdb_id={trailer?.ids?.imdb}/>
    </div>
    </div>
  )
}

export default MainContainer