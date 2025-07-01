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
    <div className="absolute top-0 left-0 bg-gradient-to-r from-black md:h-[100vh] h-56 md:w-[200vh] w-screen overflow-x-hidden">
      <div className="md:mt-[30vh] mt-[10vh] md:ml-[10vh] ml-4 w-[70vh]">
        <p className="font-bold md:text-[8vh] w-[120vh]">{Title}</p>
        <p className="font-bold md:text-base text-xs w-[120vh]">{Genre}</p>
        <p className="hidden md:inline-block font-medium text-sm mt-4 mb-2">{Plot}</p>
        <p className="hidden md:inline-block font-semibold md:flex items-center">Rating- <TiStarHalfOutline className="scale-125 ml-2 mr-1 text-red-400" />{imdbRating}</p>
        <div className="flex md:mt-3 mt-2 md:gap-4 gap-1">
          <button className="bg-white text-black font-medium md:text-lg text-xs md:px-6 md:py-2 p-1 rounded-sm flex items-center md:gap-4 gap-1 hover:bg-opacity-70"><FaPlay className="scale-150"/> Play</button>
          <button className="bg-[#8a8787b0]  font-medium md:text-lg text-xs md:px-4 md:py-2 p-1 rounded-sm flex items-center md:gap-4 gap-1 hover:opacity-70"><FiInfo className="scale-150"/> More Info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
