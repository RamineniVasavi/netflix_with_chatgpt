import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
  name:"Gpt",
  initialState:{
    ShowGpt:false,
    moviesArray:null,
    MovieData:null
  },
  reducers:{
    ToggleGpt:(state)=>{
        state.ShowGpt=!state.ShowGpt;
    },
    Gpt_Tmdb_Searches:(state,action)=>{
      const { moviesArray,MovieData }=action.payload;
      state.moviesArray=moviesArray;
      state.MovieData=MovieData;
    }
  }
});

export const { ToggleGpt,Gpt_Tmdb_Searches }=GptSlice.actions;
export default GptSlice.reducer;