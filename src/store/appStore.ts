import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "./slice/firstSlice";

export const appStore = configureStore({
    reducer:{
        first : firstReducer,
    },
})