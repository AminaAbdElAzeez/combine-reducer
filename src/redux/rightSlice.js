import { createSlice } from "@reduxjs/toolkit";

export const rightSlice = createSlice({
    name : "combineReducers",
    initialState : {
        value : "50%"
    },
    reducers : {
        expandDivTwo : (state, action) => {
            state.value = action.payload;
        }
    }
})
export const { expandDivTwo} = rightSlice.actions;
export default rightSlice.reducer;