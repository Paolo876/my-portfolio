import { createSlice } from "@reduxjs/toolkit";
import { rootInitialState } from "../initialStates";
import { getImageKeys, getEmailJSKeys } from "./rootReducers";


const rootSlice = createSlice({
    name: "root",
    initialState: rootInitialState,
    reducers: {
        setData(state, { payload }){
            state.skillsList = payload.skills;
            state.otherSkillsList = payload.otherSkills;
            state.certifications = payload.certifications;
            state.resumeUrl = payload.resumeUrl;
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
        //getEmailJSKeys
        .addCase(getEmailJSKeys.pending, ( state ) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getEmailJSKeys.fulfilled, ( state, { payload }) => {
            state.isLoading = false;
            state.emailJSKeys = payload;
            state.error = null;
        })
        .addCase(getEmailJSKeys.rejected, ( state , { payload }) => {
            state.isLoading = false;
            state.error = payload.message;
        })
    }
});

export const rootActions = rootSlice.actions;
export default rootSlice;