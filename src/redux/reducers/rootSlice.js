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

    }
});

export const rootActions = rootSlice.actions;
export default rootSlice;