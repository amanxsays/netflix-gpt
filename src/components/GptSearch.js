import { useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { GENAI_API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies, refreshGptMovies } from "../utils/gptSlice";
import { SiGrafana } from "react-icons/si";
import GptMovies from "./GptMovies";

const GptSearch = () => {
  const dispatch=useDispatch();
  const searchFor = useRef(null);
  const description ="Act as a Movie suggestion ai tool and only give me the imdb id of 20 movies or series which are also available on omdb site and should be very common and based on the idea given as and in format: name,name,name,.. and";
  const ai = new GoogleGenAI({ apiKey: GENAI_API_KEY });
  const gptMoviesLoaded=useSelector(store => store.gpt.gptMovies)

  const handleSearch = async () => {
    dispatch(refreshGptMovies());
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite-preview-06-17",
        contents: description+"idea is:" + searchFor.current.value,
    });
    dispatch(addGptMovies(response.text.split(",")));
  };

  return (
    <div>
      <form
        className="flex md:text-base text-sm justify-center md:mx-[50vh] mx-2 md:mb-[10vh] bg-[#000000de] md:h-[20vh] md:py-10 md:px-4 p-2 md:gap-4 gap-2 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          className="w-10/12 rounded-sm bg-[#212121] text-white md:p-2 p-1 placeholder:text-[#706f6f] hover:opacity-70"
          placeholder="What's in your mind today ?"
          ref={searchFor}
        ></input>
        <button
          className="w-2/12 bg-red-600 rounded-sm font-medium md:text-lg hover:opacity-70"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </form>
      {(gptMoviesLoaded && gptMoviesLoaded.length==0) ? <span className="absolute md:left-[100vh] left-[25vh] -z-10 md:mt-10 mt-20 inline-block animate-[spin_3s_linear_infinite]"><SiGrafana className="md:scale-[800%] scale-[200%]"/></span> : <GptMovies/>}
    </div>
  );
};

export default GptSearch;
