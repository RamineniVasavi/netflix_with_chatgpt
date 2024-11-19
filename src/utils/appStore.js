import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import Gptslice from "./Gptslice"
const appStore=configureStore({
    reducer:{
    User:userReducer,
    movies:movieReducer,
    Gpt:Gptslice
    }
});
export default appStore;