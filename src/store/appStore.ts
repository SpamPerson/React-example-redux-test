import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "./slice/firstSlice";
import secondReducer from "./slice/secondSlice"

export const appStore = configureStore({
    reducer:{
        first : firstReducer,
        second : secondReducer,
    },
})

export type RootState = ReturnType<typeof appStore.getState>
export type AppDisPatch = typeof appStore.dispatch