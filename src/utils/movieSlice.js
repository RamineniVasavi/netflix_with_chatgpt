import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies:null,
    nowTrailer:null,
    popularmovies:null,
    TopRatedmovies:null,
    Upcomingmovies:null,
  },
  reducers:{
   addNowplayingmovies:(state,action)=>{
    state.nowPlayingMovies=action.payload;
   },
   addPopularmovies:(state,action)=>{
   state.popularmovies=action.payload;
   },
   addNowTrailer:(state,action)=>{
    state.nowTrailer=action.payload;
   },
   addTopRatedmovies:(state,action)=>{
    state.TopRatedmovies=action.payload;
   },
   addUpcomingmovies:(state,action)=>{
    state.Upcomingmovies=action.payload;
   }
  }
});
export const { addUpcomingmovies,addTopRatedmovies,addNowplayingmovies,addNowTrailer,addPopularmovies }= movieSlice.actions;
export default movieSlice.reducer;