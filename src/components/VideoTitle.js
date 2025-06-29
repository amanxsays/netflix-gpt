import { TiStarHalfOutline } from "react-icons/ti";

const VideoTitle = ({ trailer }) => {
  const { original_title, overview, vote_average } = trailer;
  console.log(trailer);

  return (
    <div className="absolute top-[55vh] left-0 bg-gradient-to-t from-black h-[55vh] w-full">
      <div className="mt-[10vh] ml-[10vh] w-[70vh]">
        <p className="font-bold text-[8vh] w-[120vh]">{original_title}</p>
        <p className="font-medium text-sm mt-4 mb-2">{overview}</p>
        <p className="font-semibold flex items-center">Rating- <TiStarHalfOutline className="scale-125 ml-2 mr-1 text-red-400" />{vote_average}</p>
      </div>
    </div>
  );
};

export default VideoTitle;
