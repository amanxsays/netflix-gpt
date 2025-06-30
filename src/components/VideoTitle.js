import { TiStarHalfOutline } from "react-icons/ti";
import useVideoInfo from '../hooks/useVideoInfo';
import { useSelector } from "react-redux";
import { FiInfo } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ imdb_id }) => {
  
  const videoInfo=useVideoInfo(imdb_id);
  if(!videoInfo) return;
  
  const { Title, Genre, Plot, imdbRating } = videoInfo;

  return (
    <div className="absolute top-0 left-0 bg-gradient-to-r from-black h-[100vh] w-[200vh]">
      <div className="mt-[30vh] ml-[10vh] w-[70vh]">
        <p className="font-bold text-[8vh] w-[120vh]">{Title}</p>
        <p className="font-bold text-base w-[120vh]">{Genre}</p>
        <p className="font-medium text-sm mt-4 mb-2">{Plot}</p>
        <p className="font-semibold flex items-center">Rating- <TiStarHalfOutline className="scale-125 ml-2 mr-1 text-red-400" />{imdbRating}</p>
        <div className="flex mt-3 gap-4">
          <button className="bg-white text-black font-medium text-lg px-6 py-2 rounded-sm flex items-center gap-4 hover:bg-opacity-70"><FaPlay className="scale-150"/> Play</button>
          <button className="bg-[#8a8787b0]  font-medium text-lg px-4 py-2 rounded-sm flex items-center gap-4 hover:opacity-70"><FiInfo className="scale-150"/> More Info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
