import { TiStarHalfOutline } from "react-icons/ti";
import useVideoInfo from '../hooks/useVideoInfo';
import { useSelector } from "react-redux";

const VideoTitle = ({ imdb_id }) => {
  useVideoInfo(imdb_id);
  const videoInfo=useSelector((store)=> store.movies?.videoInfo)
  if(!videoInfo) return;
  
  const { Title, Genre, Plot, imdbRating } = videoInfo;

  return (
    <div className="absolute top-[55vh] left-0 bg-gradient-to-t from-black h-[55vh] w-full">
      <div className="mt-[10vh] ml-[10vh] w-[70vh]">
        <p className="font-bold text-[8vh] w-[120vh]">{Title}</p>
        <p className="font-bold text-base w-[120vh]">{Genre}</p>
        <p className="font-medium text-sm mt-4 mb-2">{Plot}</p>
        <p className="font-semibold flex items-center">Rating- <TiStarHalfOutline className="scale-125 ml-2 mr-1 text-red-400" />{imdbRating}</p>
      </div>
    </div>
  );
};

export default VideoTitle;
