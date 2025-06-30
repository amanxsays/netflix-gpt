import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        popularMovies:null,
        trendingMovies:null,
        favoritedMovies:null,
        boxOfficeMovies:null,
        collectedMovies:null,
        trailer:null,
    },
    reducers:{
        addPopularMovies:( state, action)=>{
            state.popularMovies=action.payload;
        },
        addTrendingMovies:( state, action)=>{
            state.trendingMovies=action.payload;
        },
        addFavoritedMovies:( state, action)=>{
            state.favoritedMovies=action.payload;
        },
        addBoxOfficeMovies:( state, action)=>{
            state.boxOfficeMovies=action.payload;
        },
        addCollectedMovies:( state, action)=>{
            state.collectedMovies=action.payload;
        },
        addTrailer:( state, action)=>{
            state.trailer=action.payload;
        },
    }
})

export const {addPopularMovies ,addTrailer ,addBoxOfficeMovies ,addTrendingMovies, addCollectedMovies, addFavoritedMovies} = movieSlice.actions;
export default movieSlice.reducer;