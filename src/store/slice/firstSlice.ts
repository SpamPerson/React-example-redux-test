import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IFirst {
    value?:string
}

const initialState:IFirst ={
    value:'',
}

export const firstSlice = createSlice({
    name:'first',
    initialState,
    reducers: {
        insertFirst:(state:IFirst,actions:PayloadAction<string>) => {
            state.value = actions.payload;
        },
        deleteFirst:(state:IFirst) => {
            state.value = '';
        },
    }
})

export const {insertFirst, deleteFirst} = firstSlice.actions;

export default firstSlice.reducer;