import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailer:null,
        videoInfo:null,
    },
    reducers:{
        addNowPlayingMovies:( state, action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailer:( state, action)=>{
            state.trailer=action.payload;
        },
        addVideoInfo:( state, action)=>{
            state.videoInfo=action.payload;
        },
    }
})

export const {addNowPlayingMovies ,addTrailer ,addVideoInfo} = movieSlice.actions;
export default movieSlice.reducer;