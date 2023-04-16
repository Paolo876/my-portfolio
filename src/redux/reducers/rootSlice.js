import { createSlice } from "@reduxjs/toolkit";
import { rootInitialState } from "../initialStates";

const rootSlice = createSlice({
    name: "root",
    initialState: rootInitialState,
    reducers: {
        setData(state, { payload }){
            state.skillsList = payload.skills;
            state.certifications = payload.certifications;
        }
    }, 
    // extraReducers: (builder) => {
    //     builder
    //     // login
    //     .addCase(login.pending, ( state ) => {
    //         state.isLoading = true;
    //         state.error = null;
    //     })
    //     .addCase(login.fulfilled, ( state, { payload }) => {
    //         state.isLoading = false;
    //         state.user = payload;
    //         state.error = null;

    //     })
    //     .addCase(login.rejected, ( state , { payload }) => {
    //         state.isLoading = false;
    //         state.error = payload.message;
    //     })
    // }
});

export const rootActions = rootSlice.actions;
export default rootSlice;