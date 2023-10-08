import { createSlice } from "@reduxjs/toolkit";
import { rootInitialState } from "../initialStates";
import { getImageKeys } from "./rootReducers";


const rootSlice = createSlice({
    name: "root",
    initialState: rootInitialState,
    reducers: {
        setData(state, { payload }){
            state.skillsList = payload.skills;
            state.otherSkillsList = payload.otherSkills;
            state.certifications = payload.certifications;
        }
    },
    extraReducers: builder => {
        builder
        //getImageKeys
        .addCase(getImageKeys.pending, ( state ) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getImageKeys.fulfilled, ( state, { payload }) => {
            state.isLoading = false;
            state.imageKeys = payload;
            state.error = null;
        })
        .addCase(getImageKeys.rejected, ( state , { payload }) => {
            state.isLoading = false;
            state.error = payload.message;
        })
    }
});

export const rootActions = rootSlice.actions;
export default rootSlice;