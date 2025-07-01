import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptPage:false,
        gptMovies:null,
    },
    reducers:{
        toggleGptPage:(state)=>{
            state.showGptPage=!state.showGptPage;
        },
        addGptMovies:(state , action)=>{
            state.gptMovies=[...new Set([...state.gptMovies,...action.payload])];
        },
        refreshGptMovies:(state)=>{
            state.gptMovies=[];
        }
    }
})

export const {toggleGptPage ,addGptMovies, refreshGptMovies} =gptSlice.actions;
export default gptSlice.reducer;