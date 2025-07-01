import useVideoInfo from '../hooks/useVideoInfo'

const MovieCard = ({imdb}) => {

  const poster= useVideoInfo(imdb);
  if(poster?.Response==='False') return;
  
  return (
    <div>
    {poster?.Poster!='N/A' && <div className='mx-2 w-[27vh] h-[40vh] my-2 overflow-hidden hover:scale-125 ease-linear duration-300 delay-300'>
      <img alt='m' className='rounded-sm' src={poster?.Poster}></img>
    </div>}
    </div>
  )
}

export default MovieCard