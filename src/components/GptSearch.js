import { useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { GENAI_API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies, refreshGptMovies } from "../utils/gptSlice";

const GptSearch = () => {
  const dispatch=useDispatch();
  const searchFor = useRef(null);
  const description ="Act as a Movie suggestion ai tool and only give me the imdb id of 20 movies or series which are also available on omdb site and should be very common and based on the idea given as and in format: name,name,name,.. and";
  const ai = new GoogleGenAI({ apiKey: GENAI_API_KEY });

  const handleSearch = async () => {
    dispatch(refreshGptMovies());
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: description+"idea is:" + searchFor.current.value,
    });
    dispatch(addGptMovies(response.text.split(",")));
  };

  return (
    <div>
      <form
        className="flex justify-center mx-[50vh] mb-[10vh] bg-[#000000de] h-[20vh] py-10 px-4 gap-4 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          className="w-10/12 rounded-sm bg-[#212121] text-white p-2 placeholder:text-[#706f6f] hover:opacity-70"
          placeholder="What's in your mind today ?"
          ref={searchFor}
        ></input>
        <button
          className="w-2/12 bg-red-600 rounded-sm font-medium text-lg hover:opacity-70"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
