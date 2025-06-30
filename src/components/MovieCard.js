import React from 'react'
import useVideoInfo from '../hooks/useVideoInfo'

const MovieCard = ({imdb}) => {

  const poster= useVideoInfo(imdb);
  if(!poster) return;
  
  return (
    <div className='mx-2 w-[27vh] h-[40vh] my-2 overflow-hidden hover:scale-150 ease-linear duration-300 delay-300'>
      <img alt='m' className='rounded-sm' src={poster?.Poster!=="N/A"?poster.Poster:'https://imgs.search.brave.com/0WYz1M8jlbzVOKxHOECMH1Ulqt_c3KX12jczF2S3RtY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/Mi9yYW5kb20tcGhv/dG9zLXR1cm5lZC1p/bnRvLW1vdmllLXBv/c3RlcnMtMTE0X183/MDAuanBn'}></img>
    </div>
  )
}

export default MovieCard