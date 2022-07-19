import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISecond {
   id?: string;
   name?: string;
}

const initialState: ISecond[] = [
   {
      id: "1",
      name: "k",
   },
   {
      id: "2",
      name: "P",
   },
];

export const secondSlice = createSlice({
   name: "second",
   initialState,
   reducers: {
      addSecond: (state: ISecond[], actions: PayloadAction<ISecond>) => {
         let newState: ISecond[] = [...state];
         let index = newState.findIndex(x=> x.id === actions.payload.id);
         if(index == -1){
            newState.splice(newState.length,0,{id:actions.payload.id, name:actions.payload.name});
         }

         return newState;
      },
      changeSecond: (state: ISecond[], actions: PayloadAction<ISecond>) => {
         let newState: ISecond[] = [...state];
         let index = newState.findIndex((x) => x.id === actions.payload.id);

         if (index > -1) {
            newState.splice(index - 1, 1, { id: actions.payload.id, name: actions.payload.name });
         }

         return newState;
      },
      deleteSecond: (state: ISecond[], actions:PayloadAction<string>) => {
        let newState: ISecond[] = [...state];
        let index = newState.findIndex(x=> x.id === actions.payload);
        if(index > -1) {
            newState.splice(index,1);
        }

        return newState;
      }
   },
});

export const {addSecond,changeSecond,deleteSecond } = secondSlice.actions;
export default secondSlice.reducer;
