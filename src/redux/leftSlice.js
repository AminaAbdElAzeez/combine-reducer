import { createSlice } from "@reduxjs/toolkit";

export const leftSlice = createSlice({
    name : "combineReducers",
    initialState : {
        value : "50%"
    },
    reducers : {
        expandDivOne : (state, action) => {
            state.value = action.payload;
        }
    }
})
export const { expandDivOne ,expandDivTwo} = leftSlice.actions;
export default leftSlice.reducer;