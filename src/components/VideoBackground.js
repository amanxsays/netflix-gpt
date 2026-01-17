import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({imdb_id}) => {
  useTrailer(imdb_id);
  const key=useSelector((store)=> store.movies?.trailer)

  return (
    <div >
      <iframe
        className="aspect-video absolute md:top-[-9vh]"
        src={"https://www.youtube.com/embed/"+key+"?autoplay=1&mute=1&origin=https://nettflixai.netlify.app"}
        referrerPolicy="strict-origin-when-cross-origin"
        title="YouTube video player"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
