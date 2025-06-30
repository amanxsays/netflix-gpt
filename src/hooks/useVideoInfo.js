import { useEffect, useState } from "react";
import { omdb_api_key } from "../utils/constants";

const useVideoInfo=(imdb_id)=>{
    const [json,setJson]=useState([]);
    useEffect(()=>{
        getAllInfo();
    },[])

    const getAllInfo= async ()=>{
        const data= await fetch(`https://www.omdbapi.com/?i=${imdb_id}&apikey=${omdb_api_key}`);
        setJson(await data.json());
    }

    return json;
}

export default useVideoInfo;